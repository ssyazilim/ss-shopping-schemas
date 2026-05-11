import { z } from 'zod';
import { registry } from '../registry';
import { ADD_AGREEMENT } from './validation';

export const AddAgreementSchema = registry.register('Agreement', ADD_AGREEMENT());

export const AddAgreementsSchema = registry.register('AddAgreements', z.array(AddAgreementSchema));

export const UpdateAgreementSchema = registry.register(
  'UpdateAgreement',
  AddAgreementSchema.partial(),
);
