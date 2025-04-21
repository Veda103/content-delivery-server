const express = require('express');
const fs = require('fs');
const path = require('path');
const logsRouter = require('./routes/logs');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Log IP, time, and request
app.use((req, res, next) => {
  const log = `${new Date().toISOString()} - ${req.ip} - ${req.method} ${req.url}\n`;
  fs.appendFileSync('visits.log', log);
  next();
});

// Routes
app.use('/logs', logsRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});