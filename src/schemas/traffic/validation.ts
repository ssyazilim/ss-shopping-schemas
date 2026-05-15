import { z } from 'zod';

export const ANALYZE = () =>
  z.object({
    visitorId: z.string().meta({ examples: ['959fb518-e843-47a5-86eb-710d86db90ad'] }),
    userAgent: z.string().meta({ examples: ['Mozilla/5.0 (iPhone; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3'] }),
    referrer: z.string().meta({ examples: ['http://localhost:3000/tr?srsltid=AfmBOoo0ByDscd-aEqKSqpEaAfb0XzuQAn2jJ3O27Yj5T6n2iADl6vjp'] }),
  });
