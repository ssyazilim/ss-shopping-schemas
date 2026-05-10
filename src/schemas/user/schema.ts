import { z } from 'zod';
import { registry } from '../registry';

export const EditUserSchema = registry.register(
  'EditUser',
  z.object({
    name: z
      .string()
      .optional()
      .meta({ examples: ['Mahmut'] }),
  }),
);

export const DeleteUserSchema = registry.register(
  'DeleteUser',
  z.object({
    password: z.string(),
  }),
);

export const CustomerSchema = registry.register(
  'Customer',
  z.object({
    name: z.string().meta({ examples: ['Adem'] }),
    surname: z.string().meta({ examples: ['Şenocak'] }),
    email: z.email().meta({ examples: ['senocak-a@hotmail.com'] }),
    phoneNumber: z.string().meta({ examples: ['905425496142'] }),
    password: z.string().meta({ examples: ['Passw0rd'] }),
    role: z.array(z.string()).meta({ examples: [['ROLE_USER']] }),
    isActivated: z.boolean().meta({ examples: [true] }),
  }),
);

export const AddCustomersSchema = registry.register('AddCustomers', z.array(CustomerSchema));

export const UpdateCustomerSchema = registry.register(
  'UpdateCustomer',
  z.object({
    name: z
      .string()
      .optional()
      .meta({ examples: ['Mustafa Gökay'] }),
  }),
);
