//code Module
import http from 'http'; 
//External Module
import express from 'express';
//local Module
const RequestHandler= require('./user');

const app= express();

app.use((req,res,next)=>{
  console.log("Came in first middleware",req.url, req.method);
  next();
});

app.use((req,res,next)=>{
  console.log("Came in Second middleware",req.url, req.method);
});

const server= http.createServer(app);


const PORT= 3000;
server.listen(PORT, () => {
  console.log(`Server is live on port http://localhost: ${PORT}`);
});