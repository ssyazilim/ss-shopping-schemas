import { z } from 'zod';
import { registry } from '../registry';
import { ADD_AGREEMENT, ADD_AGREEMENTS } from './validation';

export const AddAgreementSchema = registry.register('Agreement', ADD_AGREEMENT());

export const UpdateAgreementSchema = registry.register(
  'UpdateAgreement',
  ADD_AGREEMENT().partial(),
);

export const AddAgreementsSchema = registry.register('AddAgreements', ADD_AGREEMENTS());
