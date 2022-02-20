const http = require("http");
const fs = require("fs");
const url = require("url");
var path = require('path')
server = http.createServer( function(req, res) {
    if (req.url.indexOf('css') !== -1) {
        res.writeHead(200, {'Content-type' : 'text/css'});
        var fileContents = fs.readFileSync(__dirname+'/css/bootstrap.min.css', {encoding: 'utf8'});
        res.write(fileContents);
        res.end();
    }
    var q = url.parse(req.url, true);
    let pat=q.pathname;
    let quer=q.query;
    if(! (Object.keys(quer).length === 0)){
        if(quer.role=="admin"){
            fs.readFile('admin.html', function(err, page) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(page);
            });
            
        }else{
            fs.readFile('login.html', function(err, page) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(page);
            });
        }
    }else
    {
        if( req.url== "/Home.html"){
            fs.readFile('Home.html', function(err, page) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(page);
            });
        }else if( req.url=="/blog.html"){
            fs.readFile('blog.html', function(err, page) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(page);
            });
        }
    }
      
       
});

server.listen(3000);