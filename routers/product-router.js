import express from 'express';

// ROUTER LEVEL MIDDLEWARE
export const productRouter = express.Router();
productRouter.use((req, res, next) => {
  console.log('ALL PRODUCT APPLIED');
});

productRouter.get('/', (req, res, next) => {
  console.log('GET PRODUCTS');
}); // GET /products

productRouter.post('/', (req, res, next) => {
  console.log('POST PRODUCTS');
}); // POST /products

productRouter.put('/', (req, res, next) => {
  console.log('PUT PRODUCTS');
}); // PUT /products

productRouter.delete('/:productName', (req, res, next) => {
  console.log('DELETE PRODUCTS');
}); // DELETE /products/:productName
