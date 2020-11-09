import express from 'express';
import cors from 'cors';

const app = express();

//Middlewares

//app.use(cors);

//Routes
app.get('/',(req,res)=>{
    res.send('holi')
})


export default app;