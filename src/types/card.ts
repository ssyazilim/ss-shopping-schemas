import { z } from 'zod';
import { MongoSchema } from './common';

/*************************
 *        TYPES          *
 *************************/
export type ICardToken = z.infer<typeof CardTokenSchema>;
export const CardTokenSchema = z.object({
  cardUserKey: z.string(),
  cardToken: z.string(),
});

export type ICard = z.infer<typeof CardSchema>;
export const CardSchema = z
  .object({
    userId: z.string(),
    email: z.string(),
    card: CardTokenSchema,
  })
  .extend(MongoSchema.shape);

export type IDetailType = z.infer<typeof DetailTypeSchema>;
export const DetailTypeSchema = z.object({ locale: z.string(), cardUserKey: z.string() });

export type ISaveIyzico = z.infer<typeof SaveIyzicoSchema>;
export const SaveIyzicoSchema = z.object({
  userId: z.string(),
  email: z.string(),
  card: CardTokenSchema,
});

export type IDeleteIyzico = z.infer<typeof DeleteIyzicoSchema>;
export const DeleteIyzicoSchema = z.object({
  locale: z.string(),
  cardUserKey: z.string(),
  cardToken: z.string(),
});

export type ICardType = z.infer<typeof CardTypeSchema>;
export const CardTypeSchema = z.object({
  status: z.string(),
  errorCode: z.string(),
  errorMessage: z.string(),
  errorGroup: z.string(),
  locale: z.string(),
  systemTime: z.number(),
  conversationId: z.string(),
  cardUserKey: z.string(),
  binNumber: z.string(),
  cardType: z.string(),
  cardAssociation: z.string(),
  cardFamily: z.string(),
  cardBankName: z.string(),
  cardBankCode: z.string(),
  cardToken: z.string(),
  cardAlias: z.string(),
});

export type ISaveCardType = z.infer<typeof SaveCardTypeSchema>;
export const SaveCardTypeSchema = z.object({
  status: z.string(),
  errorCode: z.string(),
  errorMessage: z.string(),
  errorGroup: z.string(),
  locale: z.string(),
  systemTime: z.number(),
  conversationId: z.string(),
  binNumber: z.string(),
  cardType: z.string(),
  cardAssociation: z.string(),
  cardFamily: z.string(),
  cardBankName: z.string(),
  cardBankCode: z.number(),
  email: z.string(),
  cardUserKey: z.string(),
  cardToken: z.string(),
  cardAlias: z.string(),
});

export type IDeleteCardType = z.infer<typeof DeleteCardTypeSchema>;
export const DeleteCardTypeSchema = z.object({
  status: z.string(),
  errorCode: z.string(),
  errorMessage: z.string(),
  errorGroup: z.string(),
  locale: z.string(),
  systemTime: z.number(),
  conversationId: z.string(),
});

export type ICardForm = z.infer<typeof CardFormSchema>;
export const CardFormSchema = z.object({
  cardAlias: z.string(),
  name: z.string(),
  surname: z.string(),
  cardNumber: z.string(),
  expireMonth: z.string(),
  expireYear: z.string(),
  cvc: z.string(),
});

export type ICardPaymentAuth = ICardToken;
export const CardPaymentAuthSchema = CardTokenSchema;

export type ICardPayment = z.infer<typeof CardPaymentSchema>;
export const CardPaymentSchema = z.object({
  name: z.string(),
  surname: z.string(),
  cardNumber: z.string().optional(),
  expireMonth: z.string().optional(),
  expireYear: z.string().optional(),
  cvc: z.string().optional(),
  installment: z.number().optional(),
  registerCard: z.number().optional(),
});

export type IInstallmentPrice = z.infer<typeof InstallmentPriceSchema>;
export const InstallmentPriceSchema = z.object({
  installmentPrice: z.string(),
  totalPrice: z.string(),
  installmentNumber: z.string(),
});

export type IInstallmentDetails = z.infer<typeof InstallmentDetailsSchema>;
export const InstallmentDetailsSchema = z.object({
  binNumber: z.string(),
  price: z.number(),
  cardType: z.string(),
  cardAssociation: z.string(),
  cardFamilyName: z.string(),
  force3ds: z.number(),
  bankCode: z.number(),
  bankName: z.string(),
  forceCvc: z.number(),
  commercial: z.number(),
  dccEnabled: z.number(),
  agriculturalEnabled: z.number(),
  installmentPrices: z.array(InstallmentPriceSchema),
});

export type IInstallmentCard = z.infer<typeof InstallmentCardSchema>;
export const InstallmentCardSchema = z.object({
  status: z.string(),
  locale: z.string(),
  systemTime: z.date(),
  conversationId: z.string(),
  installmentDetails: z.array(InstallmentDetailsSchema),
});

export type ICardDetails = z.infer<typeof CardDetailsSchema>;
export const CardDetailsSchema = z.object({
  cardToken: z.string(),
  cardAlias: z.string(),
  binNumber: z.string(),
  lastFourDigits: z.string(),
  cardType: z.string(),
  cardAssociation: z.string(),
  cardFamily: z.string(),
  cardBankCode: z.number(),
  cardBankName: z.string(),
});

export type ICardsFromService = z.infer<typeof CardsFromServiceSchema>;
export const CardsFromServiceSchema = z.object({
  status: z.string(),
  locale: z.string(),
  systemTime: z.date(),
  cardUserKey: z.string(),
  cardDetails: z.array(CardDetailsSchema),
});
