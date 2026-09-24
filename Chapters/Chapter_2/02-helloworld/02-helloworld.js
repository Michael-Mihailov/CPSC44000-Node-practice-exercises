const http = require("http");
const fs = require("fs");
const port = 3000;


function serveStatic(res, path, contentType, responseCode = 200) {
    fs.readFile(__dirname + path, (err, data) => {
        if (err) {
            res.writeHead(500, {"Content-Type":"text/plain"});
            res.end("Error 500");
            return;
        }
        res.writeHead(responseCode, {"Content-Type":contentType});
        res.end(data);
    });
}


const server = http.createServer((req, res) => {
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase(); // clean url

    switch(path){
        case "":
            serveStatic(res, "/public/home.html", "text/html");
            break;
        case "/about":
            serveStatic(res, "/public/about.html", "text/html");
            break;
        case "/images/larry.jpg":
            serveStatic(res, "/public/images/larry.jpg", "image/jpg");
            break
        default:
            serveStatic(res, "/public/404.html", "text/html", 404);
            break;
    }
});

server.listen(port, () => {console.log(`Server started on port ${port}`)});