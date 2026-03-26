import {Account,Databases,Client} from 'appwrite'
const client   = new Client();
client.setEndpoint('https://sgp.cloud.appwrite.io/v1').setProject('69ac0aeb0037017061e4');
export const account  = new Account(client);
export const databases = new Databases(client,'69ac0b050008d1438a14');