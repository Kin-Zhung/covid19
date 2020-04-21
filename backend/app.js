const express = require('express');
const path = require('path')
const app = express();
const request = require("request");
// // Serve static files....
// app.use(express.static(__dirname + '/dist/Covid19'));

// // Send all requests to index.html
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname + '/dist/Covid19/index.html'));
// });
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.setHeader('Access-Control-Allow-Header',"Origin, X-Requested-with, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods',"GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.use('/api' ,(req,res,next)=>{

    var options = {
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/statistics',
        headers: {
            'x-rapidapi-host': 'covid-193.p.rapidapi.com',
            'x-rapidapi-key': '67238ba9a5msh92dd86d0c03b206p127490jsnf552b5cec39d'
        }
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        var content = JSON.parse(body);
        
        console.log(content);
        res.status(200).send(content.response)
    });

});

module.exports =app;