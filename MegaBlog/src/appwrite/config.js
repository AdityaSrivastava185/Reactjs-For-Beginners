import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class service {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.projectid);
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async createpost({ title, slug, content, featuredImage, status, userID }) {
        try {
            return await this.databases.createDocument(
                conf.databaseid,
                conf.collectionid,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID
                })
        } catch (error) {
            throw error
        }
    }

    async updatepost(slug , {title , content , featuredImage , status}){
        try{
           return await this.databases.updateDocument(
                conf.databaseid,
                conf.collectionid,
                slug,{
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch(error){
            console.log("Appwrite serive :: updatepost :: error" , error)
        }

    }

    async deletepost({slug}){
        try {
            await this.databases.deleteDocument(
                conf.databaseid,
                conf.collectionid,
                slug,
            ) 
            return true;
        } catch (error) {
            console.log("Appwrite serive :: deletepost :: error" , error);
            return false;            
        }
    }

    async getpost({slug}){
        try {
            return await this.databases.getDocument(
                conf.databaseid,
                conf.collectionid,
                slug
            )
        } catch (error) {
            console.log("Appwrite serive :: getpost :: error" , error);
        }
    }

    async getallpost(queries = [Query.equal("status" , "active")]){
        try {
            return await this.databases(
                conf.databaseid,
                conf.collectionid,
                queries
            )
        } catch (error) {
            console.log("Appwrite serive :: getallpost :: error" , error)
        }
    }

    // file upload

    async uploadfile(file){
        try {
            return await this.bucket.createFile(
                conf.bucketid,
                ID.unique,
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadfile :: error" , error);
            return false;
        }
    }

    async deletefile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.bucketid,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite serive :: deletefile :: error" , error);
        }
    }

    getfilepreview(fileId){
        return this.bucket.getfilepreview(
            conf.bucketid,
            fileId
        )
    }
}

const services = new service();

export default services;