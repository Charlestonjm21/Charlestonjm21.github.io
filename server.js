/* ============================================================
   COMP 322 - Assignment 6
   server.js
   Author: Charlestone Mayenga
   Purpose: Simple Node web server for my personal website.
            Uses only Node's built-in http module (no Express).
   ============================================================ */

// Built-in module for creating web servers. Nothing to install.
const http = require("http");

const PORT = 3000;

// createServer() takes a function that runs once per request.
// req holds what the browser asked for, res is how we answer.
const server = http.createServer(function (req, res) {

    // Log each request so the server window shows activity.
    // The assignment wants this window visible in screenshots.
    console.log(req.method + " " + req.url);

    // 200 means OK. The header tells the browser the content type.
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Server is running");
});

// Start listening for connections on port 3000
server.listen(PORT, function () {
    console.log("Server running at http://localhost:" + PORT);
});