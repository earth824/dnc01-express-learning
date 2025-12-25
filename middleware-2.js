import express from 'express';
import { productRouter } from './routers/product-router.js';

const app = express();
// GET /products
app.use('/products', productRouter);

// GET ALL CART
app.get('/carts', (req, res, next) => {});

// CREATE CART
app.post('/carts', (req, res, next) => {});

// UPDATE CART
app.put('/carts', (req, res, next) => {});

// DELETE CART
app.delete('/carts', (req, res, next) => {});

app.use((err, req, res, next) => {});

const PORT = 8003;
app.listen(PORT, err => {
  if (err) return console.log(err);
  console.log(`server running on port: ${PORT}`);
});
// app.listen(PORT, err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`server running on port: ${PORT}`);
//   }
// });
