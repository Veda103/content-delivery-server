const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res) => {
  fs.readFile('visits.log', 'utf-8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Log file not found' });
    const logs = data.trim().split('\n').map(line => {
      const [time, ip, reqLine] = line.split(' - ');
      return { time, ip, request: reqLine };
    });
    res.json(logs);
  });
});

module.exports = router;