import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z
    .string()
    .min(1, 'E-posta zorunludur')
    .email('Geçerli bir e-posta adresi giriniz'),
  password: z
    .string()
    .min(8, 'Şifre en az 8 karakter olmalıdır')
    .max(64, 'Şifre en fazla 64 karakter olabilir'),
});

export const RegisterFormSchema = z
  .object({
    email: z
      .string()
      .min(1, 'E-posta zorunludur')
      .email('Geçerli bir e-posta adresi giriniz'),
    password: z
      .string()
      .min(8, 'Şifre en az 8 karakter olmalıdır')
      .max(64, 'Şifre en fazla 64 karakter olabilir')
      .regex(/[A-Z]/, 'En az bir büyük harf içermelidir')
      .regex(/[0-9]/, 'En az bir rakam içermelidir'),
    passwordConfirm: z.string().min(1, 'Şifre tekrarı zorunludur'),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'Şifreler eşleşmiyor',
    path: ['passwordConfirm'],
  });
