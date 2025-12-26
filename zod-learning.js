import { z } from 'zod';

// zod define schema (same: joi, yup)
// data structure: { name: string, price: number, expired: date, isOutOfStock: boolean }
// request body, request params, request query, ...
// GET /products?page=10&per_page=25 ==> { page: '3456', per_page: '25' }
const createProductSchema = z.object({
  name: z.string().trim().min(1),
  price: z.coerce.number().positive(),
  expired: z.iso.date().transform(value => new Date(value)),
  isOutOfStock: z.boolean(),
  // port: z.int().nonnegative().max(65535)
  category: z.array(z.string())
});

// const input = null;
const input = {
  name: '        ssss                                ',
  price: true,
  expired: '2020-02-28',
  isOutOfStock: false,
  category: []
};

// method to validate, parse, safeParse
const result = createProductSchema.safeParse(input);
console.log(result); // { success: boolean, error: Error, data: input after validate  }
// CASE VALIDATE FAILE ==> success: false, error: ZodError(error detail), data: undefined
// CASE SUCCESS VALIDATION ==> success: true, error: undefined, data: output from validation
