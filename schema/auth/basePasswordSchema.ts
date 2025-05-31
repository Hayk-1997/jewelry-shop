import { z } from 'zod';

export const basePasswordSchema = z.string().min(1, { message: 'This field has to be filled.' });
