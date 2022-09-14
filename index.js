const http = require("http");
const fs = require("fs");

fs.writeFile('index.html','<h1>Hello World</h1>\n<p>this is {your name}... </p>',()=>{})

const server = http.createServer((req, res) => {
    //const rstream = fs.createReadStream("index.html", "utf-8");
    
    // rstream.on("error", () => {
    //     res.end("File not found");
    // })

    // rstream.pipe(res);

    fs.readFile('index.html',(err,data)=>{
        res.end(data)
    })

})

server.listen(5000, () => console.log("server started"));