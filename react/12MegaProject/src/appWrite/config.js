import conf from '../conf'
import { Account , ID, Client, TablesDB, Databases, Query } from 'appwrite'

export class AppConfig {
    client = new Client()
    database;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.apiUrl)
            .setProject(conf.projectId);
        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async createTable({contant,slug,title,UserId,status,featureImage}) {
        try {
            return await this.database.createDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
                { contant, title, UserId, status, featureImage }
            );
        } catch (error) {
            console.log("Error while creating table:", error);
            throw error;
        }
    }
    async updatePost(slug,{contant, title, status, featureImage }) {
        try {
            return await this.database.updateDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
                { contant, title, status, featureImage }
            );
        } catch (error) {
            console.log("Error while updating post:", error);
            throw error;
        }
    }
    async deletePost(slug) {
        try {
            await this.database.deleteDocument(
                conf.databaseId,
                conf.collectionId,
                slug
            );
            return true;
        } catch (error) {
            console.log("Error while deleting post:", error);
            return false;
        }

    }
    async getPost(slug) {
        try {
            return await this.database.getDocument(
                conf.databaseId,
                conf.collectionId,
                slug    
            )
        } catch (error) {
            console.log("error Appwriteservice getPost", error);
            throw error;
        }
    }
    async getPosts(quires = [Query.equal("status", "Active")]) {
        try {
            return await this.database.listDocuments(
                conf.databaseId,
                conf.collectionId,
                quires
            );
        } catch (error) {
            console.log("error Appwriteservice getPosts", error);
            throw error;
        }
    }
    //file upload
    async uploadFile(file) {
        try {
            return await this.bucket.storage.createFile(
                conf.bucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("error Appwriteservice uploadFile", error);
            throw error;
        }
    }
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.bucketId,
                fileId
            )
        } catch (error) {
            
            console.log("error Appwriteservice deleteFile", error);
            throw error;
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.bucketId,
            fileId
        )
    }
}
const appConfig = new AppConfig();
export default appConfig;
