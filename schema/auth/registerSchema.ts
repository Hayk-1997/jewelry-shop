import * as z from 'zod';
import { baseEmailSchema } from '@/schema/baseEmailSchema';

export const registerSchema = z
  .object({
    firstName: z.string().min(1, { message: 'This field has to be filled.' }),
    lastName: z.string().min(1, { message: 'This field has to be filled.' }),
    email: baseEmailSchema,
    password: z.string().min(1, { message: 'This field has to be filled.' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match.',
    path: ['confirmPassword'],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
