import * as z from 'zod';
import { baseEmailSchema } from '@/schema/baseEmailSchema';

export const loginSchema = z.object({
  email: baseEmailSchema,
  password: z.string(),
});

export type LoginSchema = z.infer<typeof loginSchema>;
