import express from 'express';
import path from 'node:path';

const app = express();

// built in middleware
app.use('/public', express.static('public'));
// relative path ==> relative to file that start node.js ==> c:\\User\...\express-learning\public
// GET http://localhost:8004/public/css/style.css
// GET http://localhost:8004/public/js/register.js

app.get('/register', (req, res) => {
  const registerPath = path.resolve('.', 'register.html');
  res.sendFile(registerPath); // absolute path ex. c:\\User\...\express-learning\register.html, /usr/home/.../register.html
});

// public file, static file, assets
// GET /style.css
// GET /register.js

app.listen(8004, () => console.log('server running'));
