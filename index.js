import express from 'express';
import path from 'path';

// build HTTP web server object (applicatiopn object)
const app = express();

// BASIC ROUTING
// HTTP REQUEST METHOD: GET, PUT, POST, PATCH, DELETE
// HTTP REQUEST PATH: /, /index, /blabla, etc...

app.get('/blabla', (req, res) => {
  console.log(req.headers);
  console.log('runnnnnnnnnnnnnnnnnnn');
  // res.status(201).send('Response coming back');
  // res.status(200).send(`
  //   <html>
  //     <body>
  //       <h1 style="color: red">Hello</h1>
  //     </body>
  //   </html>
  //   `);
  // console.log(path.resolve('.', 'index.html'));
  res.sendFile(path.resolve('.', 'index.html'));
}); // callback execute when incoming request  method is get and path is /blabla

// GET /login
// ?test=50 called query parameter (req.query)
app.get('/login', (req, res) => {
  console.log(req.query);
  res.sendFile(path.resolve('.', 'login.html'));
});

// POST /post-login
app.use(express.urlencoded()); // application/x-www-form-urlencoded: string ==> object
app.use(express.json()); // application/json: string ==> object

app.post('/post-login', (req, res) => {
  console.log(req.headers['content-type']);
  console.log(req.body);
  // check user email and password (email and password store in database)
  // if email or password incorrect
  // 400 Bad Request
  // 401 Unauthenticated
  // 403 Forbidden
  // 404 Not Found
  // 409 Conflict

  res.status(401).json('invalid email or password');
  // res.sendFile(path.resolve('.', 'login-fail.html'));
  // if login sucees
  // redirect success.html
});

// server listen for request at port 8000
app
  .listen(8001, () => console.log('server running on port 8001'))
  .on('error', err => console.log(err));

// computer port 0 - 65535
// live server => 5500
