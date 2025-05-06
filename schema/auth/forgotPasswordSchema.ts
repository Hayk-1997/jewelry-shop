import * as z from 'zod';
import { baseEmailSchema } from '@/schema/baseEmailSchema';

export const forgotPasswordSchema = z.object({
  email: baseEmailSchema,
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
