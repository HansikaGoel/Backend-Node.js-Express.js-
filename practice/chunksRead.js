const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Input</title></head>");
    res.write("<body><h1>Welcome to our website</h1>");
    res.write('<form action="/submit" method= "POST">');
    res.write('<label for="Username">Username:</label>');
    res.write(
      '<input type="text" id="username" name="Username" placeholder="Enter your name"></><br>',
    );
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male"</>');
    res.write('<label for="female">Female</label>');
    res.write(
      '<input type ="radio" id="female" name="gender" value="female"<br>',
    );
    res.write("<br><button>Submit</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/submit" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      // const bodyObject = {};
      // for (const [key, val] of params.entries()) {
      //   bodyObject[key] = val;
      // }
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);

      fs.writeFileSync("detail.txt", JSON.stringify(bodyObject));
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});

const PORT = 3999;
server.listen(PORT, () => {
  console.log(`Server is live at port http://localhost:${PORT}`);
});
