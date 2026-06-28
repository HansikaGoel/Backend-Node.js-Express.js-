const http= require('http');

const server= http.createServer((req, res) =>{
  console.log(req);
});


const port= 3500;
server.listen(port, () => {
  console.log(`Server is live on port http://localhost: ${port}`);
});
