import { z } from 'zod';
import { registry } from '../registry';

export const AnalyzeTrafficSchema = registry.register(
  'AnalyzeTraffic',
  z.object({
    visitorId: z.string().meta({ examples: ['959fb518-e843-47a5-86eb-710d86db90ad'] }),
    userAgent: z
      .string()
      .meta({ examples: ['Mozilla/5.0 (iPhone; CPU iPhone OS 5_0_1 like Mac OS X)'] }),
    referrer: z.string().meta({ examples: ['http://localhost:3000/tr'] }),
  }),
);
