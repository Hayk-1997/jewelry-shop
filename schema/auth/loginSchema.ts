import * as z from 'zod';
import { basePasswordSchema } from '@/schema/auth/basePasswordSchema';
import { baseEmailSchema } from '@/schema/baseEmailSchema';

export const loginSchema = z.object({
  email: baseEmailSchema,
  password: basePasswordSchema,
});

export type LoginSchema = z.infer<typeof loginSchema>;
