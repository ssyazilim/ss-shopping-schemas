import { z } from 'zod';
import { registry } from '../registry';

export const AgreementSchema = registry.register(
  'Agreement',
  z.object({
    locale: z.string().meta({ examples: ['en'] }),
    name: z.string().meta({ examples: ['Test'] }),
    content: z.string().meta({ examples: ['<p>Test</p>'] }),
  }),
);

export const AddAgreementsSchema = registry.register('AddAgreements', z.array(AgreementSchema));

export const UpdateAgreementSchema = registry.register(
  'UpdateAgreement',
  AgreementSchema.partial(),
);
