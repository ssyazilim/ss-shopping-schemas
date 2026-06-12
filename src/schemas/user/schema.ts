import { registry } from '../registry';
import { DELETE_USER, ADD_CUSTOMER, ADD_CUSTOMERS, UPDATE_CUSTOMER } from './validation';

export const EditUserSchema = registry.register('editUser', UPDATE_CUSTOMER());

export const DeleteUserSchema = registry.register('deleteUser', DELETE_USER());

export const CustomerSchema = registry.register('customer', ADD_CUSTOMER());

export const AddCustomersSchema = registry.register('addCustomers', ADD_CUSTOMERS());

export const UpdateCustomerSchema = registry.register('updateCustomer', UPDATE_CUSTOMER());
