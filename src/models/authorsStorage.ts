import { Connection } from "mysql";
import { DatabaseStorage } from "./databaseStorage";
import { Author } from "./author";

export class AuthorsStorage extends DatabaseStorage{

    constructor(connection:Connection){
        super(connection);
       

        
       
        
     
    }

    public async getAuthors(){


        try{
      const result= await this.query('select * from authors;');
      return result;
        }catch(err){


            throw err;

        }
      


    }


    public async addAuthor(author:Author):Promise<boolean>{

   try {
    const result=await this.query('insert into authors(email,fullName,bio) values(?,?,?)',[author.email,author.fullName,author.bio]); 

    return true;

      
   } catch (err) {
    return false;
    throw err;
   }
    }

 

    public async deleteAuthor(authorId:number):Promise<boolean>{


        try {
            let result=await this.query('delete from authors where id=?',[authorId])
   
            return true;
        } catch (error) {
           return false; 
        }
        
   
   
    }

    public async updateAuthor(id:number,data:Author):Promise<boolean>{

        try {

            

            let result=await this.query('update authors set email=?,fullName=?,bio=? where id=?',[data.email,data.fullName,data.bio,id])
            return true;
        } catch (error) {
          
            return false;
        }
    }




















}