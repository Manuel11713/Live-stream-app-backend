import app from './app';




//Init app
const port =  process.env.PORT || 5000;

app.listen(port,()=>console.log("Sever on port: ",port))