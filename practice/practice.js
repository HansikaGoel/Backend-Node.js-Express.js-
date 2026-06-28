const http= require('http');

const server= http.createServer((req, res) =>{
  console.log(req.url, req.method);

if( req.url=== '/'){
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title></title></head>');
  res.write('<body>');
  res.write('<h1>Welcome to Page</h1>');
  res.write('</body>');
  res.write('</html>');
  return res.end();
}
else if(req.url === '/products'){
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title></title></head>');
  res.write('<body>');
  res.write('<h1>2nd page</h1>');
  res.write('</body>');
  res.write('</html>');
  return res.end();
}
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title></title></head>');
  res.write('<body>');
  res.write('<h1>default page</h1>');
  res.write('</body>');
  res.write('</html>');
  return res.end();
});

const PORT= 8080;
server.listen(PORT,() => {
  console.log(`Server is live at port http://localhost:${PORT}`);
});