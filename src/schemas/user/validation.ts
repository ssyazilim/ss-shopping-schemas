import { z } from 'zod';

export const EDIT_USER = () =>
  z.object({
    name: z
      .string()
      .optional()
      .meta({ examples: ['Mahmut'] }),
  });

export const DELETE_USER = () =>
  z.object({
    password: z.string(),
  });

export const CUSTOMER = () =>
  z.object({
    name: z.string().meta({ examples: ['Adem'] }),
    surname: z.string().meta({ examples: ['Şenocak'] }),
    email: z.email().meta({ examples: ['senocak-a@hotmail.com'] }),
    phoneNumber: z.string().meta({ examples: ['905425496142'] }),
    password: z.string().meta({ examples: ['Passw0rd'] }),
    role: z.array(z.string()).meta({ examples: [['ROLE_USER']] }),
    isActivated: z.boolean().meta({ examples: [true] }),
  });

export const ADD_CUSTOMERS = () => z.array(CUSTOMER());

export const UPDATE_CUSTOMER = () => CUSTOMER().partial();
