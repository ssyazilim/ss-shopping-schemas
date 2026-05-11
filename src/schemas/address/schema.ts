import { registry } from '../registry';
import { ADD_ADDRESS } from './validation';

export const AddAddressSchema = registry.register('addAddress', ADD_ADDRESS());

export const UpdateAddressSchema = registry.register('updateAddress', AddAddressSchema.partial());
