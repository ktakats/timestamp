'use strict';

var express=require("express");
var fs=require("fs");


var app=express();

app.get('/(:id)?', function(req, res){
    var out={};
    var id=req.params.id;
    if(id==undefined){res.sendFile(process.cwd() + '/index.html')}
    else{
    var date=new Date();
    if(!isNaN(Date.parse(id))){
    date.setTime(Date.parse(id))}
    else{date.setTime(id);}
    console.log(date);
    if(date!="Invalid Date"){
        out["unix"]=date.getTime();
        var options = {year: 'numeric', month: 'long', day: 'numeric' };
        out["natural"]=date.toLocaleDateString('en-US', options);
    }
    else{
        out["unix"]=null;
        out["natural"]=null;
    }
    res.json(out);
    res.end();}
   // res.sendFile(process.cwd() + '/index.html');
});

var port = 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});