import { registry } from '../registry';
import {
  ADD_CARD_IYZICO,
  ADD_PAYMENT_CARD,
  ADD_PAYMENT_IYZICO_NON_3D,
  ADD_PAYMENT_IYZICO,
  COMPLETE_PAYMENT_3D,
  CHECK_INSTALLMENT,
  CANCEL_PAYMENT,
} from './validation';

registry.register('paymentCard', ADD_PAYMENT_CARD());

export const AddCardSchema = registry.register('AddCard', ADD_CARD_IYZICO());

export const AddPaymentSchema = registry.register('addPayment', ADD_PAYMENT_IYZICO_NON_3D());

export const CheckHTMLForIyzicoSchema = registry.register(
  'checkHTMLForIyzico',
  ADD_PAYMENT_IYZICO(),
);

export const CompletePayment3DSchema = registry.register(
  'completePayment3D',
  COMPLETE_PAYMENT_3D(),
);

export const CheckInstallmentSchema = registry.register('checkInstallment', CHECK_INSTALLMENT());

export const CancelPaymentSchema = registry.register('cancelPayment', CANCEL_PAYMENT());
