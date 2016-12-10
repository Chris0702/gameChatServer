var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var webRouter = require("./lib/web_router");
var userRestApi = require("./lib/rest_api/user");
var chatSocket = require("./lib/chat_socket");
var port = 3000;
// var io = require('socket.io')(app);
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json 
app.use(bodyParser.json());
webRouter.on(app);
userRestApi.on(app);
var server = require('http').createServer(app);
app.socketIO=require('socket.io')(server);
chatSocket.on(app);


// //getQueryStrings/Chris/09123456789
// app.get('/getQueryStrings/:name/:tel', function(req, res) {
//     console.log(req.params.name);
//     console.log(req.params.tel);
//     res.send("success");

// });

// //getQueryStrings?name=fred&tel=0926xxx572
// app.get('/getQueryStrings', function(req, res) {
//     console.log("第一個參數 name");
//     console.log(req.query.name);
//     console.log("第二個參數 tel");
//     console.log(req.query.tel);
//     res.send("success you request "+req.query.name +"    "+req.query.tel);
// });


// app.post('/postTest', function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//   var user_name=req.body.user;
//   var password=req.body.password;
//   console.log("User name = "+user_name+", password is "+password);
//   res.write(user_name+'<BR>');
//   res.write(password+'<HR>');
//   res.end("yes");
// });



// var io = require('socket.io')(server);
// io.on('connection', function(socket) {
//     socket.emit('news', { hello: 'world' });
//     socket.on('my other event', function(data) {
//         console.log(data);
//     });
// });
server.listen(port);
console.log("現在使用" + port + "port");
