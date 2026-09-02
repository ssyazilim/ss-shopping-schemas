import { z } from 'zod';
import { getDefaultsForSchema } from '../utils/getDefaultsForSchema';
import { MongoSchema } from './common';

export type ISocketVisitor = z.infer<typeof SocketVisitorSchema>;
export const SocketVisitorSchema = z.object({
  socketId: z.string(),
  userAgent: z.string(),
  ip: z.string(),
  startedAt: z.string(),
});

export type IAgentDetails = z.infer<typeof AgentDetailsSSchema>;
export const AgentDetailsSSchema = z.object({
  socketId: z.string(),
  browser: z.string(),
  engine: z.string(),
  os: z.string(),
  device: z.string(),
  cpu: z.string(),
});

export type IGeographic = z.infer<typeof GeographicDetails>;
export const GeographicDetails = z.object({
  socketId: z.string(),
  ip: z.string(),
  isp: z.string(),
  country: z.string(),
  country_flag: z.string(),
  city: z.string(),
});

export type IIpDetails = z.infer<typeof IpDetailsSchema>;
export const IpDetailsSchema = z.object({
  geographic: GeographicDetails.nullable(),
  localIp: z.union([
    z.string(),
    z.object({
      Ethernet: z.tuple([z.string()]),
    }),
  ]),
});

export type IVisitor = z.infer<typeof VisitorSchema>;
export const VisitorSchema = z
  .object({
    visitorId: z.string(),
    staticIp: z.string(),
    userAgent: z.string(),
    agentDetails: AgentDetailsSSchema,
    referrer: z.string(),
    ipDetails: IpDetailsSchema,
  })
  .extend(MongoSchema.shape);

export type ITopItem = z.infer<typeof TopItemSchema>;
export const TopItemSchema = z.object({
  value: z.string(),
  count: z.number(),
});

export type IVisitorStatistics = z.infer<typeof VisitorStatisticsSchema>;
export const VisitorStatisticsSchema = z.object({
  _id: z.string(),
  date: z.string(),
  totalRequests: z.number(),
  referrerRequests: z.number(),
  directRequests: z.number(),
  botRequests: z.number(),
  topBrowsers: z.array(TopItemSchema),
  topCities: z.array(TopItemSchema),
  topDevices: z.array(TopItemSchema),
});

/*************************
 *       CONSTANTS       *
 *************************/
export const DEFAULT_IP_ADDRESS: IIpDetails = getDefaultsForSchema(IpDetailsSchema);
export const DEFAULT_VISITOR = { totalReferrer: 0, totalDirect: 0, totalBot: 0, total: 0 };
export const GOOGLE_BOT_IP_RANGES = [
  '209.85.238.0/24',
  '66.249.64.0/19',
  '64.233.160.0/19',
  '72.14.192.0/18',
  '74.125.0.0/16',
  '216.239.32.0/19',
];
