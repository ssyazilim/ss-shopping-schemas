export { registry } from './registry';

// schema definitions for OPENAPI producing
export * from './common';
export * from './auth/schema';
export * from './address/schema';
export * from './agreement/schema';
export * from './brand/schema';
export * from './card/schema';
export * from './cart/schema';
export * from './category/schema';
export * from './company/schema';
export * from './external/schema';
export * from './form/schema';
export * from './google/schema';
export * from './gsm/schema';
export * from './minio/bucket/schema';
export * from './minio/object/schema';
export * from './payment/schema';
export * from './post/schema';
export * from './product/schema';
export * from './product-variant/schema';
export * from './question/schema';
export * from './review/schema';
export * from './shipping/schema';
export * from './traffic/schema';
export * from './translation/schema';
export * from './user/schema';

// Validation defines using for backend and frontend validation middleware
export * from './address/validation';
export * from './agreement/validation';
export * from './auth/validation';
export * from './brand/validation';
export * from './card/validation';
export * from './category/validation';

// Path defines — only register for OPENAPI producing
import './auth/route';
import './address/route';
import './agreement/route';
import './brand/route';
import './card/route';
import './cart/route';
import './category/route';
import './company/route';
import './countries/route';
import './currency/route';
import './external/route';
import './form/route';
import './google/route';
import './gsm/route';
import './minio/bucket/route';
import './minio/object/route';
import './payment/route';
import './post/route';
import './product/route';
import './product-variant/route';
import './question/route';
import './review/route';
import './shipping/route';
import './traffic/route';
import './translation/route';
import './user/route';
