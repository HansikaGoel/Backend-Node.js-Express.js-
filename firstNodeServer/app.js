const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  
  if(req.url === '/'){
    res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Complete deadlines</title></head>');
  res.write('<body><h3>Welcome to the home page</h3></body>');
  res.write('</html>');
  return res.end();
  }else if(req.url === '/about'){
    res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Complete deadlines</title></head>');
  res.write('<body><h3>Products are here.</h3></body>');
  res.write('</html>');
  return res.end();
  }
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Complete deadlines</title></head>');
  res.write('<body><h3>Complete node.js, GSOC and GSSoC 26, DSA</h3></body>');
  res.write('</html>');
  res.end();
});
const port= 3000;
server.listen(port,()=> {
  console.log(`Server is running on port http://localhost: ${port}`);

});