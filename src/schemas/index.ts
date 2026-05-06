export { registry } from './registry.js';
export * from './common.js';
export * from './product.js';

// Path tanımları — yalnızca OpenAPI üretimi için register edilir
import './product.paths.js';
