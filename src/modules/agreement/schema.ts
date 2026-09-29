import { z } from 'zod';
import { ADD_AGREEMENT } from './validation';
import { MongoSchema } from '../../types/common';
import { getDefaultsForSchema } from '../../utils/getDefaultsForSchema';

/*************************
 *       TYPES           *
 *************************/

export type IAgreement = z.infer<typeof AgreementSchema>;
export const AgreementSchema = ADD_AGREEMENT().extend(MongoSchema.shape).meta({ id: 'Agreement' });

/*************************
 *       CONSTANTS       *
 *************************/

export const DEFAULT_AGREEMENT: IAgreement = getDefaultsForSchema(AgreementSchema);
