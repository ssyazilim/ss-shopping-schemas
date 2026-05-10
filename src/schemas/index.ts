export { registry } from './registry';
export * from './common';
export * from './auth/schema';

// Path tanımları — yalnızca OpenAPI üretimi için register edilir
import './auth/route';
