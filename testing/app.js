// //core Module
// const http = require("http");

//external Module
const express= require('express');

// //local Module
const userRequestHandler= require('./practiceChunks.js');

const app= express();

app.use((req, res, next) =>{
  console.log("Came in first middleware", req.url, req.method);
  next();
});

app.use((req, res, next)=>{
  console.log("Came in second middleware", req.url, req.method);
  res.send("<p>Running using Express.js</p>");
});

// const server = http.createServer(app);

const PORT = 3040;
app.listen(PORT, () => {
  console.log(`Server is live at port http://localhost:${PORT}`);
});