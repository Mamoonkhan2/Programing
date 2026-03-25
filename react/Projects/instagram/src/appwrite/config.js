import { Client, Databases, Storage, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://sgp.cloud.appwrite.io/v1")
  .setProject("69ac0aeb0037017061e4");

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);

export default client;