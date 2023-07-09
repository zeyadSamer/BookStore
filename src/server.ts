import express from 'express';
import bodyParser from 'express';
import cors from 'cors';
import authorsRouter from './routes/authors';
import booksRouter from './routes/books';








const port=3000;

const app=express();
app.use(express.json())
app.use(bodyParser.json());
app.use(cors({origin:'*'}));
app.use('/bookStore/authors',authorsRouter);
app.use('/bookStore/books',booksRouter)

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

