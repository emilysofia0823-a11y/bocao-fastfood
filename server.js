// Servidor estático simple para Boca'o. Reemplaza el hosting estático automático
// de Railway para poder mandar Cache-Control: no-store en las páginas .html,
// así el navegador siempre pide la versión más reciente (sin necesitar ?v=N).
var http = require('http');
var fs = require('fs');
var path = require('path');

var PORT = process.env.PORT || 3000;
var ROOT = path.resolve(__dirname);

var MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.ico': 'image/x-icon'
};

function sendFile(res, filePath, data) {
  var ext = path.extname(filePath).toLowerCase();
  var type = MIME[ext] || 'application/octet-stream';
  var headers = { 'Content-Type': type };
  if (ext === '.html' || ext === '') {
    headers['Cache-Control'] = 'no-store, no-cache, must-revalidate';
    headers['Pragma'] = 'no-cache';
    headers['Expires'] = '0';
  } else {
    headers['Cache-Control'] = 'public, max-age=3600';
  }
  res.writeHead(200, headers);
  res.end(data);
}

http.createServer(function (req, res) {
  var urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/') urlPath = '/index.html';
  var filePath = path.resolve(ROOT, '.' + urlPath);

  // Evitar salir de la carpeta raíz del proyecto
  if (filePath !== ROOT && !filePath.startsWith(ROOT + path.sep)) {
    res.writeHead(403); res.end('Forbidden'); return;
  }

  fs.readFile(filePath, function (err, data) {
    if (err) {
      fs.readFile(filePath + '.html', function (err2, data2) {
        if (err2) { res.writeHead(404); res.end('Not found'); return; }
        sendFile(res, filePath + '.html', data2);
      });
      return;
    }
    sendFile(res, filePath, data);
  });
}).listen(PORT, function () {
  console.log("Boca'o servidor corriendo en puerto " + PORT);
});
