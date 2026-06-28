const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Myntra</title></head>");
    res.write("<body>");
    res.write('<a href="/home">Home</a><br>');
    res.write('<a href="/men">Men</a><br>');
    res.write('<a href="/women">Women</a><br>');
    res.write('<a href="/kids">Kids</a><br>');
    res.write('<a href="/cart">Cart</a>');
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Home</title></head>");
    res.write("<body>");
    res.write("<h1>Home</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/men") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Men</title></head>");
    res.write("<body>");
    res.write("<h1>MEN</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/women") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Women</title></head>");
    res.write("<body>");
    res.write("<h1>WOMEN</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/kids") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Kids</title></head>");
    res.write("<body>");
    res.write("<h1>KIDS</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/cart") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>cart</title></head>");
    res.write("<body>");
    res.write("<h1>CART</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else {
    res.statusCode = 302;
    res.setHeader("location", "/");
    return res.end();
  }
});

const PORT = 3030;
server.listen(PORT, () => {
  console.log(`Server is live at port http://localhost:${PORT}`);
});
