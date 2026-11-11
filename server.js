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

// Pretty URLs required by the assignment
const routes = {
    "/": "index.html",
    "/index": "index.html",
    "/introduction": "introduction.html"
};

// Which file types we are willing to send, and the Content-Type
// header the browser needs for each one
const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon"
};

// Files that live in the project folder but must never be sent
const blockedFiles = ["server.js", "package.json", "package-lock.json"];

// Sends a short plain-text response (used for errors)
function sendText(res, status, message) {
    res.writeHead(status, { "Content-Type": "text/plain" });
    res.end(message);
}

const server = http.createServer(function (req, res) {

    // Log each request so the server window shows activity
    console.log(req.method + " " + req.url);

    // Take just the path, dropping any ?query part, and decode
    // things like %20 back into spaces
    let urlPath = decodeURIComponent(new URL(req.url, "http://localhost").pathname);

    // Use the pretty-URL table first; otherwise treat the URL
    // as a file path, like /img/img1.jpg or /style.css
    let relativePath = routes[urlPath] || urlPath;

    // Build the full path, then make sure it is still inside this
    // folder. This stops URLs like /../../etc/passwd from escaping.
    const filePath = path.join(__dirname, path.normalize(relativePath));
    if (!filePath.startsWith(__dirname + path.sep)) {
        sendText(res, 403, "403 - Forbidden");
        return;
    }

    // Only send allowed file types, and never the server's own code
    const ext = path.extname(filePath).toLowerCase();
    if (!mimeTypes[ext] || blockedFiles.includes(path.basename(filePath))) {
        sendText(res, 404, "404 - Page not found");
        return;
    }

    fs.readFile(filePath, function (err, data) {
        if (err) {
            // Most likely the file does not exist
            sendText(res, 404, "404 - Page not found");
            return;
        }

        res.writeHead(200, { "Content-Type": mimeTypes[ext] });
        res.end(data);
    });
});

server.listen(PORT, function () {
    console.log("Server running at http://localhost:" + PORT);
});