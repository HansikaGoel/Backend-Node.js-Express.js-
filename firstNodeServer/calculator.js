const UserRequestServer =((req,res) => {
  console.log(req.url, req.method, req.headers);

if(req.url === '/'){
  res.setHeader('Content-Type','text.html');
  res.write('<html>');
  res.write('<body><h1> WELCOME TO CALCULATOR</h1>');
  res.write('<button><a href= "/calculator">Click for calculator</a></button>');
  res.write('</body>');
  res.write('</html>');
  return res.end();
}
else if(req.url=== '/calculator'){
  res.setHeader('Content-Type','text.html');
  res.write('<body><h1>Calculator</h1>');
  res.write('<form action="/calculate-result" method="POST"');
  res.write('<input type="number" placeholder="Enter first number"</input><br>');
  res.write('<input type="number" placeholder="Enter Second number"</input>');
  res.write('<input type="submit"></input>');
  res.write('</form>');
  res.write('</body>');
  res.write('</html>');
  return res.end();
}
});
module.exports= UserRequestServer;