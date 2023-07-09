import util from 'util';
import mysql from 'mysql';
import { Book } from './book';
import { DatabaseStorage } from './databaseStorage';



export class BooksStorage extends DatabaseStorage{

   //private connection:mysql.Connection;
   //private query:any;

    constructor(connection:mysql.Connection){
      super(connection);
        // this.connection=connection;

        // this.query=util.promisify(this.connection.query).bind(this.connection);
       
        
     
    }



    public async addBook(book:Book):Promise<boolean>{

      try{

        //first add author
          
      let result=await this.query('insert into books(title,imageUrl,info,authorId) values(?,?,?,?)',[book.title,book.imageUrl,book.info,book.authorId]);
      return true;

      }catch(err){
        
        throw err;
        
      }



    
    }

    public async updateBook(id:number,data:Book):Promise<boolean>{

      try{


        let result=await this.query('update books set title=?,info=?,imageUrl=? where id=?;',[data.title,data.info,data.imageUrl,id]);


       console.log(result);
        return true;

      }catch(err){
 
        throw err;
      }

      


      
    }

    public async deleteBook(id:number):Promise<boolean>{
      try{


      const deletedBook=await this.query('delete from books where id=?  ; ',[id]);
      

      return true;
      }catch(err){
 
        throw err;
      }

    } 


    public async getBooks():Promise<Book[]>{

      try{


      const books:Book[]=await this.query('select * from books;')




      return books ;

      }catch(err){

        throw err;
      }


    } 

    public async getAuthorBooks(authorId:number){
      try {
        const result=await this.query('select * from books where authorId=?',[authorId]);
        return result;
      } catch (err) {
        throw err;
        
      }

    

    }

  

    public async  getBook(id:number):Promise<Book> {
      try{

      const rows=await this.query('select * from books where id=?',[id]);
      
      const book:Book=rows[0];
      console.log(rows[0]);
      return book;
      
    
    }catch(err){
      throw err;
    }




    }




















}

