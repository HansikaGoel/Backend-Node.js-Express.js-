const path= require('path');

//External Module
const express= require("express");

//local Module
const userRouters= require("./routes/userRouters");
const hostRouter= require("./routes/hostRouter");
const rootDir= require('./utils/pathUtils');

const app = express();
app.set('view engine', 'ejs');

app.use(express.urlencoded());
app.use(userRouters);
app.use("/host",hostRouter);
app.use(express.static(path.join(rootDir, 'public')));
app.use((req, res, next)=>{
  res.status(404).sendFile(path.join(rootDir, 'views','404.html'));
})

const PORT= 3999;
app.listen(PORT, () =>{
  console.log(`Server is live on port: http://localhost:${PORT}`);
}); 