/* ============================================================
   COMP 322 - Assignment 6
   server.js
   Author: Charlestone Mayenga
   Purpose: Simple Node web server for my personal website.
            Uses only Node's built-in modules (no Express).
   ============================================================ */

// Built-in modules. Nothing to install.
const http = require("http");
const fs = require("fs");     // reads files from disk
const path = require("path"); // builds file paths safely

const PORT = 3000;

// Maps each URL the assignment requires to the file it should show
const routes = {
    "/": "index.html",
    "/index": "index.html",
    "/introduction": "introduction.html"
};

const server = http.createServer(function (req, res) {

    // Log each request so the server window shows activity
    console.log(req.method + " " + req.url);

    // Look up which file this URL maps to
    const fileName = routes[req.url];

    if (fileName === undefined) {
        // No route matches: tell the browser the page wasn't found
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 - Page not found");
        return;
    }

    // __dirname is the folder server.js lives in, so this works
    // no matter where you launch node from
    const filePath = path.join(__dirname, fileName);

    fs.readFile(filePath, function (err, data) {
        if (err) {
            // The file exists in our routes but couldn't be read
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("500 - Server error");
            return;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
});

server.listen(PORT, function () {
    console.log("Server running at http://localhost:" + PORT);
});