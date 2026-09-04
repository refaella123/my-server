const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello, World! This is my first server.');
});

app.get('/about', (req, res) => {
  res.send('thank u.');
});

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'Guest'; // שליפת הפרמטר מה-Query String
  res.send(`hi ${name}`);                 // שימוש ב-Template Literals
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get('/api/time', (req, res) => {
  res.json({
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString()
  });
});

