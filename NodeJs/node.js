var http = require("http");
http
  .createServer(function (req, res) {
    res.write(" Hello World");
    res.end();
  })
  .listen(8080);

var http = require("http");
var dt = require("./myModule");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The date and time are currently: " + dt.myDate());
    res.end();
  })
  .listen(8080);

  