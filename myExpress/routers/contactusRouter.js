const express = require('express');

const contactusRouter= express.Router();

const path= require('path');

const rootDir= require('../utils/pathUtils');

contactusRouter.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir,'views','contact-us.html'));
});

 contactusRouter.post("/contact-us",(req, res, next) => {
  res.sendFile(path.join(rootDir,'views','submit.html'));
});

module.exports= contactusRouter;