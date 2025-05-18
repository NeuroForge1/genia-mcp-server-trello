// Versión simplificada del servidor MCP para Trello
// Esta es una solución alternativa para el despliegue en Render

const http = require('http');

const port = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('OK');
    return;
  }
  
  if (req.url === '/api/v1/status') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      status: 'online',
      version: '1.0.0',
      service: 'trello-mcp'
    }));
    return;
  }
  
  // Ruta por defecto
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Trello MCP Server funcionando correctamente</h1>');
});

server.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
