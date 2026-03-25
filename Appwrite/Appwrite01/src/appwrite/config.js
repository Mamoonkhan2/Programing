import { Account,Storage , ID, Client, TablesDB, Databases, Query } from 'appwrite'
import confi from '../conf/confi.js'
import conf from '../conf/confi.js';
export class AppWriteService
{
    client = new Client()
    database;
    constructor(){
            this.client
                .setEndpoint(confi.apiUrl)
                .setProject(confi.projectId)
            this.database = new Databases(this.client)
    }
    async createPost({contant}){
        try {
            return await this.database.createDocument(
                conf.databaseId,
                conf.collectionId,
                ID.unique(),
                {contant}
            );
        } catch (e) {
            console.log(e);
        } 
    }

    async getPosts(){
        try {
            // for getting all the posts
            return await this.database.listDocuments(
                conf.databaseId,
                conf.collectionId
            );
        } catch (e) {
            console.log(e);
        } 
    }
    async deletePost(postId){
        try {
            // will delete the post
            return await this.database.deleteDocument(
                conf.databaseId,
                conf.collectionId,
                postId
            )
        } catch (e) {
            console.log(e)
        }
    }
   // config.js

    async updateDocument(docid, data) {
        try {
            // FIX: Use 'this.databases' (plural) to match your initialization
            return await this.database.updateDocument(
                conf.databaseId, 
                conf.collectionId, 
                docid, 
                data
            );
        } catch (error) {
            console.log("Appwrite :: updateDocument :: error", error.message);
            throw error;
        }
    }


} 
const appWriteService = new AppWriteService()
export default appWriteService