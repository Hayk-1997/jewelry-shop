import { z } from 'zod';

export const baseEmailSchema = z
  .string()
  .min(1, { message: 'This field has to be filled.' })
  .email('This is not a valid email.');
