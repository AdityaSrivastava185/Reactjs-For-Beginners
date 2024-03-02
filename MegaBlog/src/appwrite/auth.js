import conf from "../conf/conf";
import {Client , Account , ID} from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.projectid);
        this.account = new Account(this.client);
    }

    async createaccount({email , password , name}){
        try{
            const useraccount = await this.account.create(ID.unique() , email , password , name)
            if(useraccount){
                return this.login({email , password})
            } else{
                return useraccount
            }
        } catch(error){
            throw error;
        }
    }
    async login({email , password}){
        try{
          return await this.account.createEmailSession(email , password)
        } catch (error){
            throw error;
        }
       
    }
    async getcurrentuser(){
        try{
            await this.account.get();
        } catch (error){
            throw error;
        }

        return null;
    }
    async logout(){
        try{
            await this.account.deleteSessions();
        } catch(error){
            throw error;
        }
    }
}
const authservice = new AuthService();

export default authservice;

