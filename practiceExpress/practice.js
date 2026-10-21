const express = require ('express');

const app= express();

app.use((req, res, next)=>{
  console.log("This is first Dummy Middleware", req.url, req.method);
  next();
})

app.use((req, res, next) =>{
  console.log("This is Second Dummy Middleware", req.url, req.method);
  next();
})

app.get("/",(req, res, next) =>{
  console.log("this is third Middleware");
  res.send('<h1>I will be Full Stack Developer now</h1>');
})

app.get("/contact-us",(req, res, next) =>{
  console.log("Handling /contact-us for GET");
  res.send(`<h1>Enter your details</h1>
    <form action="/contact-us" method="POST">
      <label for="username">Username</label>
      <input type="text" id="username" name="name" placeholder='Enter your name'</input>
      <button type="submit">Submit</button>
    </form>`);
})

app.post("/contact-us",(req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method);
  res.send("<h1> Thank you!!</h1>");
});

const PORT= 8080;
app.listen(PORT, () =>{
  console.log(`Server is live at PORT http://localhost:${PORT}`);
});