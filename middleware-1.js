import express from 'express';

const app = express();

// SERIE of MIDDLEWARE FUNCTION:
// NORMAL ==> (req, res, next) => {}
// ERROR HANDLING MIDDLEWARE ==> (err, req, res, next) => {}
// #1 app.METHOD(PATH, MIDDLEWARE, ...MIDDLEWARE)
// GET /cars
// app.get(
//   '/cars',
//   (req, res, next) => {
//     // execute first
//     console.log('M1');
//     next();
//   },
//   (req, res, next) => {
//     // execute second
//     console.log('M2');
//   }
// );

// // #2 app.use(MIDDLEWARE, ...MIDDLEWARE)
// app.use(
//   (req, res, next, test) => {
//     // ERROR MIDDLEWARE
//     console.log('2M1');
//     res.json('END RESPOSNE #1');
//     next();
//   },
//   (req, res, next) => {
//     console.log('2M2');
//     res.json('END RESPOSNE #2');
//     next();
//   }
// );

// MIDDLEWARE: REDUCE REPEAT CODE, SEPERATION OF CONCERN

// // parsing string to object
app.use(express.json());
// app.post('/flights', (req, res, next) => {
//   console.log('body: ', req.body);
//   res.json('POST /flights');
// });

// middleware ==> authenticate middleware, rate limit middleware
// logging middleware
// app.use((req, res, next) => {
//   //
//   console.log(
//     `${req.method}: ${req.path}, ${new Date().toISOString()} ${req.protocol}`
//   );
//   next();
// });

// app.get('/books', (req, res, next) => {
//   // throw '199';
//   // const num = 9;
//   // num.toUpperCase();
//   next(2025); // throw 2025
//   // next();
// });

// app.post('/books', () => {});

// app.use((req, res, next) => {
//   console.log('BETWEEN');
// });

// app.use((err, req, res, next) => {
//   console.log('ERR1: ', err);
//   next();
// });

// app.use(
//   (err, req, res, next) => {
//     console.log('ERR2: ', err);
//   },
//   (req, res) => {
//     console.log('BEHIDE ERR2');
//   }
// );

// app.use((req, res, next) => {
//   console.log('LAST');
// });

// MATCH: GET /hospitals, POST: /hostpitals, ... ALL METHOD WITH /hospitals
// app.use('/hospitals', (req, res, next) => {
//   res.json(`${req.method} /hospitals`);
// });

app.post('/hospitals', (req, res, next) => {
  // CREATE hospitals (name, address, tel) ==> BODY
  // user forget to send hospiatls ==> sent error reponse to client
  // error logging
  res.status(400).json({ message: 'hospital name is required' });
  // res.json(`${req.method} /hospitals`);
});

app.put('/hospitals', (req, res, next) => {
  // UPDATE hospitals (name, address, tel) ==> BODY
  // user sent empty hospital name ==> sent error response to client
  if (req.body.name === '') {
    const err = new Error('hospital name is required');
    err.statusCode = 400;
    next(err);
  }
  // joi ==> Validation Error
  // error loging
  // res.status(400).json({ message: 'hospital name is required' });
});

app.use((err, req, res, next) => {
  // handle validation error
  // { name: ['must be a string', 'name is required'], tel: ['tel must a numeric string'] }
  // logic to format error message
  res.status(400).json({ message: 'Validation failed' });
});

app.use((err, req, res, next) => {
  // handle authentication error
  // jsonwebtoken ==> expired, invalid
  //  res.status(401).json({ message: 'Validation failed',  });
  createError('authentication falied', 401);
});

app.use((err, req, res, next) => {
  // error loggin
  res.status(err.statusCode).json({ message: err.message });
});

const PORT = '8002';
app.listen(PORT, error => {
  if (error) {
    console.log('err: ', error);
  } else {
    console.log(`server running on port: ${PORT}`);
  }
});
