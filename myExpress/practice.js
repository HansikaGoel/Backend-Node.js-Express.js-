const path = require('path');
const express = require("express");

const app = express();
const homeRouter= require('./routers/homeRouter');
const contactusRouter= require('./routers/contactusRouter');
const rootDir= require('./utils/pathUtils');

app.use(express.static(path.join(rootDir, "public")));

app.use(homeRouter);
app.use(contactusRouter);
app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', '404.html'));
})


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is live at http://localhost:${PORT}`);
});