const http= require('http');
const fs= require('fs');

const server= http.createServer((req,res) =>{
  console.log(req.url, req.method);
  if(req.url=== '/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Linux</title></head>');
    res.write('<body>');
    res.write('<form action="/submit-details" method="POST"');
    res.write('<label for="name">Username:</label>');
    res.write('<input type="text" id="name" name="Username" placeholder="Enter your name"');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  else if(req.method== 'POST' && req.url.toLowerCase()=== '/submit-details'){
    res.setHeader('Content-Type','text/html'); 
    res.write('<html>');
    res.write('<head><title>form submission</head></title>');
    res.write('<body><h3>Hello! form submitted successfully.</h3></body>');
    res.write('</html>');
    const body=[];
    req.on('data',(chunk)=> {
      console.log(chunk);
      body.push(chunk); 
    });
    
    req.on('end',() =>{
      const fullbody= Buffer.concat(body).toString();
      console.log(fullbody);
      const params= new URLSearchParams(fullbody);
      const ObjectBody= Object.fromEntries(params);
      console.log(ObjectBody);
      fs.writeFileSync('name.txt', JSON.stringify(ObjectBody));
    });
      return res.end();
  };
});

const PORT= 4000;
server.listen(PORT,() => {
  console.log(`server is live at address: http://localhost:${PORT}`);
});