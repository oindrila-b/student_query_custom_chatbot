let express = require('express'); // http requests 
let bodyParser = require('body-parser'); // parsing or scanning the required body 
let session = require('express-session'); // creating a session for dialogflow 
let cors = require('cors'); // helps withe the allowinf and restrictinf resources
let errorhandler = require('errorhandler'); // handles and prints the errors 
let mainRoute = require("./routes");
let dialogflowIndex = require("./routes/api"); // directs to dialogflow to make the api call

var isProduction = process.env.NODE_ENV === "production"; // if machine is not in production, start the process

var app = express();

app.use(cors());

app.use(require("morgan")("dev")); // morgan dev - request logger 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(require("method-override")());  // middleware for HTTPS requests
app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'conduit', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

if(!isProduction){
  app.use(errorhandler());
}

app.use("/", mainRoute);
app.use("/api", dialogflowIndex);

app.use(function(err, req, res, next){ 
  res.status(err.status || 500);
  res.json({'error': {
    message: err.message,
    error: {}
  }})
});

var server = app.listen(process.env.PORT || 3000, function(){
  console.log("Listening on port: " + server.address().port);
  console.log("GOOGLE PATH: ", process.env.GOOGLE_APPLICATION_CREDENTIALS);
});


