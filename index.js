const http=require('http');

// const server=http.createServer((req,res)=>{
//     if(req.url == '/'){
//         res.write('<h1> Hello,Node js!</h1>')
//     }
    
//     res.end();
    
    
// });

// server.listen(5000);
// console.log('The server running on port number 5000');

const port=3022;
const hostname='localhost';
const server=http.createServer((req,res)=>{

    res.statusCode=500;
    res.setHeader('content-type','application json');


    res.end(JSON.stringify({error:"server error"}));



});

server.listen(port,()=>{

    console.log('server running at the ${hostname}:${port}');

});






