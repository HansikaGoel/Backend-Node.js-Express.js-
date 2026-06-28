const http = require('http');
const fs= require('fs');

const server= http.createServer((req, res) => {
  console.log(req.url, req.method);

  if(req.url === '/'){ 
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Myntra</title></head>');
    res.write('<body><nav>');
    res.write('<span><a href="/home">Home</a></span><br>');
    res.write('<span><a href="/men">Men</a></span><br>');
    res.write('<span><a href="/women">Women</a></span><br>');
    res.write('<span><a href="/kids">Kids</a></span><br>');
    res.write('<span><a href="/cart">Cart</a></span><br>');
    res.write('<button><a href="/login" method="POST">Login</a></button>');
    res.write('</body></nav>');
    res.write('</html>');
    return res.end();
}else if(req.url.toLowerCase() === '/home'){
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Myntra</title></head>');
  res.write('<body><p>Welcome to Home Page</p></body>');
  res.write('</html>');
  return res.end();
}else if(req.url.toLowerCase() === '/men'){
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Myntra</title></head>');
  res.write('<body><p>Welcome to Men Page</p></body>');
  res.write('</html>');
  return res.end();
}else if(req.url.toLowerCase() === '/women'){
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Myntra</title></head>');
  res.write('<body><p>Welcome to Women Page</p></body>');
  res.write('</html>');
  return res.end();
}else if(req.url.toLowerCase()   === '/kids'){
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Myntra</title></head>');
  res.write('<body><p>Welcome to Kids Page</p></body>');
  res.write('</html>');
  return res.end();
}else if(req.url.toLowerCase() === '/cart'){
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Myntra</title></head>');
  res.write('<body><p>Welcome to Cart Page</p></body>');
  res.write('</html>');
  return res.end();
}else if(req.url.toLowerCase() === '/login' && req.method === 'POST'){
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Login Page</title></head>');
  res.write('<form>');
  res.write('<body><h1>Enter login credential</h1>');
  res.write('<input type="text" name="Username placeholder="Enter your name" required></input>">');
  res.write('<input type="submit" value="Submit"></input>');
  res.write('</form>');
  res.write('</body>');
  res.write('</html>');
    const body=[];
    req.on('data',(chunk) =>{
      console.log(chunk);
      body.push(chunk);
    });

  req.on('end',() =>{
    res.statusCode=302;
    const fullbody= Buffer.concat(body).toString();
    console.log(fullbody);
    const params= new URLServerParams(fullbody);
    const BodyObject= Object.fromEntries(params);
    console.log(BodyObject);
    fs.writeFileSync('login.txt', JSON.stringify(BodyObject));
  });
  return res.end();
};

  // res.setHeader('Content-Type','text/html');
  // res.write('<html>');
  // res.write('<head><title>Myntra</title></head>');
  // res.write('<body><p>Wrong Page</p></body>');
  // res.write('</html>');
  // return res.end();
});

const PORT= 3000;
server.listen(PORT, () =>{
  console.log(`Server is live at port: http://localhost: ${PORT}`);
});
