const http= require('http');

const UserRequestHandler= require("./Calculator");


const server= http.createServer(UserRequestHandler);
const PORT= 3005;
server.listen(PORT,() => {
  console.log('Server is live on Port Address: http://localhost:' + PORT);
});