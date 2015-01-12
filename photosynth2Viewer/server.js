var http = require('http'),
    fs = require('fs'),
    url = require('url'),   
    mime = require('./mime');
    path = require('path');

var port = 3000;

function processStatic(request, response){
    //get path from request's url
    var urldata = url.parse(request.url,true);
    var urlpath = urldata.pathname;
    var urlquery = urldata.query;
    //console.log(urldata);
    //map the path to server path
    if(urlpath == '/')
    	urlpath = '/index.html';

    var absPath = __dirname + "/" + urlpath;
    //console.log(absPath);

    //test whether the file is exists first
    path.exists(absPath, function(exists) {
        if(exists) {
            //if ok
            var ext = path.extname(urlpath);
	        ext = ext ? ext.slice(1) : 'unknown';
	        var contentType = mime.types[ext] || "text/plain";	            
	        response.writeHead(200,{'Content-Type':contentType});
	          
            var r = fs.createReadStream(absPath);
			r.pipe(response);

        } else {
            response.end('404 File not found.');
        }

    });
};


function processQuery(request, response){
    //get path from request's url
    var urldata = url.parse(request.url,true);
    var urlpath = urldata.pathname;
    var urlquery = urldata.query;
    console.log(urlpath);
    processStatic(request,response);
   
};


var server =http.createServer();
server.listen(port);
server.on('request',processQuery);

console.log('Server running at http://127.0.0.1:3000/');