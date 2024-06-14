const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url == '/'){
        res.write('<h1> Hello,Node js!</h1>')
    }

    res.end();


});

server.listen(5000);
console.log('The server running on port number 5000');