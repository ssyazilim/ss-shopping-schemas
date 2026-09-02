import { z } from 'zod';
import { registry } from '../registry';
import { responses } from '../common';

// GET /public/card
registry.registerPath({
  method: 'get',
  path: '/public/card',
  tags: ['API-card'],
  summary: 'Get a user card tokens in the system',
  operationId: 'getCard',
  security: [{ JWT: [] }],
  request: { params: z.object({ userKey: z.string() }) },
  responses,
});

// GET /admin/cards
registry.registerPath({
  method: 'get',
  path: '/admin/cards',
  tags: ['API-card'],
  summary: 'Get all cards for the user',
  operationId: 'getCards',
  security: [{ JWT: [] }],
  responses,
});
