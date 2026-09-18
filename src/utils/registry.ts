import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import type { RouteConfig } from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';
import type { ITag } from './tags';

// Zod'a .openapi() metodunu ekler — tüm schema dosyalarından önce çalışmalı
extendZodWithOpenApi(z);

export const registry = new OpenAPIRegistry();

/**
 * `tags` alanını daraltır: OpenAPI'nin kendi tipinde `string[]` olduğu için
 * uydurma ya da yanlış yazılmış bir tag sessizce geçerdi. Burada en az bir
 * tag zorunlu ve her biri API_TAGS/SERVICE_TAGS içinden gelmek zorunda.
 */
export type RouteInput = Omit<RouteConfig, 'tags'> & { tags: [ITag, ...ITag[]] };

export const registerRoute = (route: RouteInput): void => registry.registerPath(route);
