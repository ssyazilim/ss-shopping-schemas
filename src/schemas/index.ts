export { registry } from './registry';
export * from './common';
export * from './auth/schema';
export * from './address/schema';

// Path tanımları — yalnızca OpenAPI üretimi için register edilir
import './auth/route';
import './address/route';
