import { z } from 'zod';
import { getDefaultsForSchema } from 'zod-defaults';
import { MongoSchema } from './common';

/*************************
 *       TYPES           *
 *************************/
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

export type IVisitorSchema = z.infer<typeof VisitorSchema>;
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

export type IVisitorStatisticsSchema = z.infer<typeof VisitorStatisticsSchema>;
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
