const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase() // clean url

    switch(path){
        case "":
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("Michael's home");
            break;
        case "/about":
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("About: Michael is a CS student and is amazing!");
            break;
        default:
            res.writeHead(404, {"Content-Type": "text/plain"});
            res.end("Error 404: page not found");
            break;
    }
})

server.listen(port, () => {console.log(`Server started on port ${port}`)});