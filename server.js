const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());

// Servir archivos estáticos desde el directorio 'build'
app.use(express.static(path.join(__dirname, 'build')));

// Manejar todas las solicitudes a través de React
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Iniciar servidor
app.listen(process.env.PORT || 8080);

