import express from 'express';
import path from 'node:path';

const app = express();

app.get('/register', (req, res) => {
  const registerPath = path.resolve('.', 'register.html');
  res.sendFile(registerPath);
});

// GET /register.js

app.listen(8004, () => console.log('server running'));
