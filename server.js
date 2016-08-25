var express = require('express');
var app = express();
var useragent = require('express-useragent');
var port = 8080;

app.enable('trust proxy');
app.use(useragent.express());

app.get('/', function(req, res){
    var m_ipaddress = req.ip;
    var m_language = req.headers["accept-language"];
    var m_software = req.useragent.os;
        
    // Selecting the main language:
    var language = m_language.split(',');
    language = language[0];
  
    console.log('The ip address is: ' + m_ipaddress);
    console.log('The language is: ' + language);
    console.log('The operating system is: ' + m_software);

    res.json({
        ipaddress: m_ipaddress,
        language: language,
        software: m_software
    }); 
});

app.listen(process.env.PORT || port, function(){
    console.log("App listening on port: " + port);
});