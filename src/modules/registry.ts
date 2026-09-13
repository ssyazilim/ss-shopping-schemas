import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';

// Zod'a .openapi() metodunu ekler — tüm schema dosyalarından önce çalışmalı
extendZodWithOpenApi(z);

export const registry = new OpenAPIRegistry();
