// for information about these interfaces
import type PocketBase from 'pocketbase';
import type { AuthModel } from 'pocketbase';

declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      pb: PocketBase;
      user: AuthModel;
    }
    // interface PageData {
    //   session: Session | null;
    // }
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
