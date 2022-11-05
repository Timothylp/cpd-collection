import PocketBase from 'pocketbase';

const client = new PocketBase('https://8090-timothylp-cpdcollection-76lm2ia6dze.ws-eu74.gitpod.io');

export default async function userAuthentification(email: string, password: string) {
    const authData = await client.users.authViaEmail(email, password);

    return authData
}