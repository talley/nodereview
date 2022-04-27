git slet http=require('http');
let fs=require('fs');
let port=8082;

let server=http.createServer((req,res)=>{
   res.writeHead(200,{'Content-Type':'text/html'});
   res.end('Simple Http Server');
})
server.listen(port);
console.log(`Server is running on :${port}`);