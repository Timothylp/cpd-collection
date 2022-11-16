import PocketBase from "pocketbase";
import { Record } from "pocketbase";
import { convertRecordToDeliveryBoy } from "../types/DeliveryBoy";
import DeliveryBoy from "../types/DeliveryBoy";

export const client = new PocketBase("https://8090-timothylp-cpdcollection-76lm2ia6dze.ws-eu74.gitpod.io");

/*
 * This function is used to get the user's session token from the cookie.
 * It is used to authenticate the user.
 * @param {string} cookie - The cookie to get the session token from.
 * @returns {string} - The session token.
 */
export function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    let pops = parts.pop();
    if (pops !== undefined) {
      return pops.split(";").shift();
    }
  }
  return "";
}

/*
 * This function is used to set cookies.
 * @param {string} cname - The cookie name.
 * @param {string} cvalue - The cookie value.
 * @param {number} exdays - The expiration date of the cookie.
 */
export function setCookie(cname: string, cvalue: string, exdays: number = 14) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/*
 * This function is used to erase cookies.
 * @param {string} cname - The cookie name.
 */
export function eraseCookie(cname: string) {
  document.cookie = cname + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

/**
 * Check if the dark mode is enabled in the user's cookies.
 * @returns {boolean} - True if the user is dark mode on, false otherwise.
 */
export function isDarkModeEnabled() {
  let cookieValue = getCookie("dark_mode");

  if (cookieValue == "1") {
    return true;
  } else {
    return false;
  }
}

/**
 * Check if the user is logged in.
 * @returns {boolean} - True if the user is logged in, false otherwise.
 */
export function isLogged() {
  if (client.authStore.isValid) {
    return true;
  } else {
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
}

/**
 * Login the user.
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 * @returns {boolean} - True if the user is logged in, false otherwise.
 */
export async function userAuthentification(email: string, password: string) {
  const authData = await client.users.authViaEmail(email, password);
  client.authStore.exportToCookie();

  return authData;
}

/**
 * Clean the user's session.
 * @returns {void}
 */
export function userAuthClear() {
  client.authStore.clear();
}

/**
 * Get the delivery all cards.
 * @returns {Record[]} - All the delivery cards.
 */
export async function getDeliveryCards() {
  let items: Record[] = [];
  const result = await client.records.getFullList("deliveryCard");

  let deliveryBoys: DeliveryBoy[] = [];
  if (result) {
    items = result;

    items.forEach((item) => {
      const url = client.records.getFileUrl(item, item.image);
      deliveryBoys.push(convertRecordToDeliveryBoy(item, url));
    });
  }

  return deliveryBoys;
}

/**
 * Get the delivery card by id.
 * @param {string} id - The id of the delivery card.
 * @returns {Record} - The delivery card.
 */
export async function getDeliveryCardById(id: string) {
  let item: Record = new Record();
  const result = await client.records.getOne("deliveryCard", id);

  let deliveryBoy: DeliveryBoy = {
    id: "",
    title: "",
    power: 0,
    rarity: 0,
    image: "",
  };

  if (result) {
    item = result;
    const url = client.records.getFileUrl(item, item.image);
    deliveryBoy = convertRecordToDeliveryBoy(item, url);
  }

  return deliveryBoy;
}

/**
 * Get all user delivery cards.
 * @returns {Record[]} - All the user delivery cards.
 */
export async function getUserDeliveryCards() {
  let items: Record[] = [];
  const result = await client.records.getList("userDeliveryCard", 1, 50, {
    expand: 'deliveryCard, deliveryCard.rarity',
    filter: 'user = "' + client.authStore?.model?.id + '"',
  });

  let deliveryBoys: DeliveryBoy[] = [];
  if (result) {
    items = result.items;

    items.forEach((item) => {
      const url = client.records.getFileUrl(item["@expand"].deliveryCard, item["@expand"].deliveryCard.image);
      deliveryBoys.push(convertRecordToDeliveryBoy(item, url));
    });
  }

  return deliveryBoys;
}
