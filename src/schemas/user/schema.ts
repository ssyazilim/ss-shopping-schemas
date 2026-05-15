import { registry } from '../registry';
import { EDIT_USER, DELETE_USER, CUSTOMER, ADD_CUSTOMERS, UPDATE_CUSTOMER } from './validation';

export const EditUserSchema = registry.register('editUser', EDIT_USER());

export const DeleteUserSchema = registry.register('deleteUser', DELETE_USER());

export const CustomerSchema = registry.register('customer', CUSTOMER());

export const AddCustomersSchema = registry.register('addCustomers', ADD_CUSTOMERS());

export const UpdateCustomerSchema = registry.register('updateCustomer', UPDATE_CUSTOMER());
