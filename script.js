function fetchLogs() {
    fetch('/logs')
      .then(res => res.json())
      .then(data => {
        const output = data.map(log =>
          `[${log.time}] ${log.ip} -> ${log.request}`
        ).join('\n');
        document.getElementById('log-output').textContent = output;
      })
      .catch(err => {
        document.getElementById('log-output').textContent = 'Error loading logs';
      });
  }  