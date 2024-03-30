import { pb } from '$lib/pocketbase';
import currentUser from '$lib/user.svelte';

pb.authStore.loadFromCookie(document.cookie);
pb.authStore.onChange(() => {
  console.log(`hook client model: ${JSON.stringify(pb.authStore.model)}`);
  currentUser.user = pb.authStore.model;
  document.cookie = pb.authStore.exportToCookie({ httpOnly: false });
}, true);
