const http= require('http');
const server= http.createServer((req,res) =>{
  console.log(req.url, req.method, req.headers);
if(req.url=== '/'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<body>');
  res.write('<h1>I am a coder,</h1>');
  res.write('<a href="/myself">next</a>');
  res.write('</body>');
  res.write('</html>');
  return res.end();
}
else if(req.url.toLowerCase() ==='/myself'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<body>');
  res.write('<h1>White hat hacker,</h1>');
  res.write('<a href="/my">next</a>');
  res.write('</body>');
  res.write('</html>');
  return res.end();
}
else{  
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<body>');
  res.write('<h1>Enterprener</h1>');
  res.write('</body>');
  res.write('</html>');
  return res.end();
}
});
const PORT= 3010;
server.listen(PORT, () =>{
  console.log(`Server is live on host address: http://localhost: ${PORT}`);
});