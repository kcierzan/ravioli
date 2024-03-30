import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import { redirect, type Handle } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

const PUBLIC_URLS = ['/', '/register', '/login'];

export const handle: Handle = async ({ event, resolve }) => {
  const pb = new PocketBase(PUBLIC_POCKETBASE_URL);
  pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

  try {
    if (pb.authStore.isValid) {
      await pb.collection('users').authRefresh();
    }
  } catch {
    console.log('clearing authstore');
    pb.authStore.clear();
  }

  event.locals.pb = pb;
  event.locals.user = pb.authStore.model;

  if (!pb.authStore.isValid && !PUBLIC_URLS.includes(event.url.pathname)) {
    throw redirect(303, '/');
  }

  const response = await resolve(event);

  response.headers.set('set-cookie', pb.authStore.exportToCookie({ httpOnly: false }));

  return response;
};
