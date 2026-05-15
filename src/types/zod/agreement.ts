import { z } from 'zod';
import { getDefaultsForSchema } from '../../utils/getDefaultsForSchema';
import { MongoSchema } from './common';
import { ADD_AGREEMENT } from '../../schemas';

/*************************
 *        TYPES          *
 *************************/
export type IAgreement = z.infer<typeof AgreementSchema>;
export const AgreementSchema = ADD_AGREEMENT().extend(MongoSchema.shape);

/*************************
 *      CONSTANTS        *
 *************************/
export const DEFAULT_AGREEMENT: IAgreement = getDefaultsForSchema(AgreementSchema);
