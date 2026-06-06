import { z } from 'zod';

export type IMongoSchema = z.infer<typeof MongoSchema>;
export const MongoSchema = z.object({
  _id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type IQueryParams = z.infer<typeof QueryParamsSchema>;
export const QueryParamsSchema = z.object({
  page: z.number(),
  limit: z.number(),
  sort: z.string(),
  text: z.string(),
  userId: z.string().optional(),
});

export type IHome = z.infer<typeof HomeSchema>;
export const HomeSchema = z.object({
  environment: z.string(),
  checkFile: z.string(),
  apiDoc: z.string(),
  moduleName: z.string(),
});

export type IFileType = z.infer<typeof FileTypeSchema>;
export const FileTypeSchema = z.object({
  fieldname: z.string(),
  originalname: z.string(),
  encoding: z.string(),
  mimetype: z.string(),
  destination: z.string(),
  filename: z.string(),
  path: z.string(),
  size: z.number(),
});

export type IUpdateMongo = z.infer<typeof UpdateMongoSchema>;
export const UpdateMongoSchema = z.object({
  acknowledged: z.boolean(),
  modifiedCount: z.number(),
  upsertedId: z.string().nullable(),
  upsertedCount: z.number(),
  matchedCount: z.number(),
});

export type IDeleteMongo = z.infer<typeof DeleteMongoSchema>;
export const DeleteMongoSchema = z.object({
  acknowledged: z.boolean(),
  deletedCount: z.number(),
});

export type ISort = z.infer<typeof SortSchema>;
export const SortSchema = z.record(z.string(), z.union([z.literal(1), z.literal(-1)]));

export type IProxyItem = z.infer<typeof ProxyItemSchema>;
export const ProxyItemSchema = z.object({
  ip: z.string(),
  port: z.number(),
  https: z.boolean(),
});

export type ISelectedItem = z.infer<typeof SelectedItemSchema>;
export const SelectedItemSchema = z.enum([
  'downloadSelected',
  'downloadAll',
  'delete',
  'deleteSelected',
  'deleteAll',
  '',
]);

export const ApiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    success: z.object({ data: dataSchema, message: z.string() }).optional(),
    error: z.object({ message: z.string() }).optional(),
  });
export type IApiResponse<T> = {
  success?: { data: T; message: string };
  error?: { message: string };
};

// IDeepPartial recursive mapped type — Zod ile tam karşılığı yok, TypeScript tipi olarak kalır
export type IDeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? IDeepPartial<T[P]> : T[P];
};

export type ITableIndex = z.infer<typeof TableIndexSchema>;
export const TableIndexSchema = z.object({
  key: z.number(),
  checkbox: z.boolean(),
});

export type IDateButton = z.infer<typeof DateButtonSchema>;
export const DateButtonSchema = z.object({
  name: z.string(),
  showValue: z.string(),
  type: z.string(),
  current: z.boolean(),
});

export type IImageData = z.infer<typeof ImageDataSchema>;
export const ImageDataSchema = z.object({
  id: z.number(),
  image: z.string(),
  header: z.string(),
  title: z.string(),
  buttonTitle: z.string(),
  route: z.string(),
});

// IJSConfettiApi — constructor tipi Zod'da temsil edilemez, TypeScript tipi olarak kalır
export interface IJSConfettiApi {
  JSConfetti: { new (): { addConfetti: (options?: { emojis: string[] }) => void } };
}

export const DEFAULT_TABLE_INDEX: ITableIndex = {
  key: 0,
  checkbox: false,
};
