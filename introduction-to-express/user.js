
const fs= require('fs');

const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === '/'){
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>User Details</title></head>');
  res.write('<body><h3>Enter your Detials</h3>');
  res.write('<body><form action="/submit-details" method="POST">');
  res.write('<input type =" text" name= "Username" placeholder= "Enter your name"<br><br>');
  res.write('<label for ="male">Male</label>')
  res.write('<input type= "radio" id="male" name="gender" value="male">')
  res.write('<label for= "female">Female</label>')
  res.write('<input type= "radio" id="female" name="gender" value="female">')
  res.write('<br><input type= submit value="Submit">');
  res.write('</form></body>');
  // res.write('');
  res.write('</html>');
  return res.end();
  }
  else if(req.url.toLowerCase() === '/submit-details' && req.method =="POST"){
      res.setHeader('Content-Type','text/html'); 
      res.write('<html>');
      res.write('<head><title>form submission</head></title>');
      res.write('<body><h3>Hello! form submitted successfully.</h3></body>');
      res.write('</html>');
    const body =[];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on('end',() =>{
      res.statusCode= 302;
      const fullbody = Buffer.concat(body).toString();
      console.log(fullbody);
      const params= new URLSearchParams(fullbody);
      const bodyObject= Object.fromEntries(params);
      console.log(bodyObject);
      fs.writeFile('user.txt', JSON.stringify(bodyObject));
    });
    return res.end();
  };
};

module.exports = userRequestHandler;