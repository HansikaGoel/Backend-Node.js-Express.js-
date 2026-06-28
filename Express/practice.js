const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("First middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second middleware", req.url, req.method);
  next();
});

app.get("/", (req, res,next) => {
  console.log("Handling / for GET");
  res.send("<h1>Welcome Everyone</h1>");
});

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET");

  res.send(`
    <h1>Please enter your details</h1>
    <form action="/contact-us" method="POST">
      <label>Username</label>
      <input type="text" name="username" placeholder="Enter your name">
      <button type="submit">Submit</button>
    </form>
  `);
});

  app.post("/contact-us",(req, res, next) => {
  console.log("handling / for post", req.url, req.method);
  res.send("<h1>Thank you for your time!</h1>");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is live at http://localhost:${PORT}`);
});

// process.env.PORT || status(404).