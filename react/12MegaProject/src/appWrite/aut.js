import conf from '../conf'
import { Account , ID, Client } from 'appwrite'


export class AppriteService {
    client = new Client()
    account;
    constructor(){
        this.client
            .setEndpoint(conf.apiUrl)
            .setProject(conf.projectId)
        this.account(this.client)
    }
    async createAcount({email,password,name}){
        try {
            const UserAcount = this.account.create(ID.unique,email,password,name);
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
            return await this.account.createEmailPasswordSession(
               email,
               password
            );
        }
        catch (error) {
            console.log('error in login user',error)
            throw error;
        }
    }
    async CurrentUSer(){
        try{
            return await this.account.get();
        }
        catch(e){
            console.log("Error while fetching current user:", e);
            throw e;
        }
    }
    async LogoutUser(){
        try {
            return await this.account.deleteSession('current');
        } catch (error) {
            console.log("Error while logging out user:", error);
            throw error;
        }
    }
};
const appriteService = new AppriteService();
export default  appriteService;