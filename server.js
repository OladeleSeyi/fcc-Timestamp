// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.send(req.body);
});
app.get("/api/timestamp/", (req, res )=>{
    
  
   let date = new Date();
    let resObj = {unix: date.getTime(), utc: date.toUTCString()}
   res.send(resObj)
  
})
app.get("/api/timestamp/:date_string", (req, res )=>{
  let timestamp = req.params.date_string;
  let checker = parseInt(timestamp*1);
  let resObj = null; 
  if(isNaN(checker)){
    let date = new Date(timestamp);
  
    resObj = {unix: Date.parse(timestamp),
                  utc: date.toUTCString()} 
  } else {
    let date = new Date (timestamp)
    resObj = {unix: date.getTime(), utc: date.toUTCString()}
  }
  
  res.send(resObj);
  
})



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});