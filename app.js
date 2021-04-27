var express = require("express"); // отдельная переменная для удобства
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//server modules
require("./scripts/socket.js")(io);
require("./scripts/routs.js")(app);

//server settings
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');

//server porting
http.listen(3001, () =>{
  console.log('listening on :3001');
});