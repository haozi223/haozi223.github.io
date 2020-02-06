const app = require("./app.js");
const server = require("http").createServer(app);
const SocketServer = new (require("ws").Server)({
  server
});

SocketServer.on("connection", ws => {
  console.log("客户端websocket已连接"); //已和某个客户端链接
  ws.on("message", message => {
    console.log("消息" + message); //收到某个消息
    SocketServer.clients.forEach(
      item => item.send(message, error => (error ? console.log(error) : null)) //广播消息给各个已连接客户端
    );
  });
});

server.listen(5500);
