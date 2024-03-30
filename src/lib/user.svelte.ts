import type { AuthModel } from 'pocketbase';

let userSvelte: AuthModel | null = $state(null);

const currentUser = {
  get user() {
    return userSvelte;
  },

  set user(value) {
    userSvelte = value;
  }
};

export default currentUser;
