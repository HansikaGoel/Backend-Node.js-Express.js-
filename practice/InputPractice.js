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
    res.write('<input type ="radio" id="female" name="gender" value="female"');
    res.write("<br><button>Submit</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/submit" && req.method === "POST") {
    fs.writeFileSync("detail.txt", "Hansika");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});

const PORT = 3999;
server.listen(PORT, () => {
  console.log(`Server is live at port http://localhost:${PORT}`);
});
