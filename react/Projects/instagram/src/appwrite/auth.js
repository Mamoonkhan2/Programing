import { Account , ID, Client } from 'appwrite'
import {account} from './config'

export class authserviceClass {
   
    async createAcount({email,password,name}){
        try {
            const UserAcount = account.create(ID.unique,email,password,name);
            if(UserAcount){
                //do something
                return this.LoginUser({email,password})
            }
            else{
                return UserAcount;
            }
        } catch (e) {
            console.log('error in current user',e)
            throw e;
        }
    }

    async LoginUser({email,password}){
        try {
            // will check for the accoutnt and then if it exist it will create a session for the user
            // and return the session data
            return await account.createEmailPasswordSession(
               email,
               password
            );
        }
        catch (error) {
            console.log('error in login user',error)
            throw error;
        }
    }
    async CurrentUser(){
        // it will give the current user data if the user is logged in otherwise it will throw an error
        try{
            return await account.get();
        }
        catch(e){
            console.log("Error while fetching current user:", e);
            throw e;
        }
    }
    async LogoutUser(){
        try {
            return await account.deleteSession('current');
        } catch (error) {
            console.log("Error while logging out user:", error);
            throw error;
        }
    }
};
export const authservice = new authserviceClass();
