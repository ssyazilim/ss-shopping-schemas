import { z } from 'zod';

export const ANALYZE = () =>
  z.object({
    visitorId: z.string(),
    userAgent: z.string(),
    referrer: z.string(),
  });
