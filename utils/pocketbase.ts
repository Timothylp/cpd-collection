import PocketBase from "pocketbase";
import { Record } from "pocketbase";

export const client = new PocketBase("https://8090-timothylp-cpdcollection-76lm2ia6dze.ws-eu74.gitpod.io");

function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    let pops = parts.pop();
    if (pops !== undefined) {
      return pops.split(";").shift();
    }
  }
}

export function isLogged() {
  let valid = false;
  let cookieValue = getCookie("pb_auth");
  if (cookieValue !== undefined) {
    client.authStore.loadFromCookie(cookieValue.toString());
  }
  if (client.authStore.isValid) {
    valid = true;
  }
  return valid;
}

export async function userAuthentification(email: string, password: string) {
  const authData = await client.users.authViaEmail(email, password);
  client.authStore.exportToCookie();

  return authData;
}

export function userAuthClear() {
  client.authStore.clear();
}

export async function getDeliveryCards() {
  let items: Record[] = [];
  const result = await client.records.getList("deliveryCard", 1, 50);
  if (result) {
    items = result.items;
  }

  return items;
}
