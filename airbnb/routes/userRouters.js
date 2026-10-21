const path= require('path');

const express= require("express");

const userRouters= express.Router();

const rootDir= require('../utils/pathUtils');

userRouters.get("/",(req, res, next) =>{
  res.sendFile(path.join(rootDir,'views', 'home.html'));
});

module.exports= userRouters;