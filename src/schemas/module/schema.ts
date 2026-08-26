import { registry } from '../registry';
import { ADD_MODULE } from './validation';

export const AddModuleSchema = registry.register('addModule', ADD_MODULE());
export const UpdateModuleSchema = registry.register('updateModule', ADD_MODULE().partial());
