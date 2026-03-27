import { ID, Query } from 'appwrite'
import {account, databases} from './appwriteConfig'

export const createFile = async (contant) => {
    const curentuser = await account.get();
    return await databases.createDocument('69ac0b050008d1438a14', 'todos', ID.unique(), {contant:contant,completed:false,UserId:curentuser.$id});
}

export const  getTodos= async ()=>{
    const curentuser = await account.get();
    return await databases.listDocuments('69ac0b050008d1438a14', 'todos',[Query.equal('UserId', curentuser.$id)]);
}

export const DeletePost= async (id)=>{
    return await databases.deleteDocument('69ac0b050008d1438a14', 'todos', id);
}