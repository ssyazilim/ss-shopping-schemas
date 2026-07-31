import { z } from 'zod';

export type IPaymentCard = z.infer<typeof PaymentCardSchema>;
export const PaymentCardSchema = z.object({
  cardHolderName: z.string(),
  cardNumber: z.string(),
  expireMonth: z.string(),
  expireYear: z.string(),
  cvc: z.string(),
  registerCard: z.union([z.literal(0), z.literal(1)]).optional(),
});

export type IRefundV2Request = z.infer<typeof RefundV2RequestSchema>;
export const RefundV2RequestSchema = z.object({
  locale: z.enum(['tr', 'en']).optional(),
  conversationId: z.string().optional(),
  paymentId: z.string(),
  price: z.union([z.number(), z.string()]),
  currency: z.enum(['TRY', 'EUR', 'USD', 'GBP', 'NOK', 'CHF']).optional(),
  ip: z.string().optional(),
});
