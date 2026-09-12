import { registry } from '../registry';
import { PageSchema, PageListItemSchema } from '../../types/page';
import { ADD_PAGE, ADD_PAGES, UPDATE_PAGE } from './validation';

export const AddPageSchema = registry.register('AddPage', ADD_PAGE());

export const AddPagesSchema = registry.register('AddPages', ADD_PAGES());

export const UpdatePageSchema = registry.register('UpdatePage', UPDATE_PAGE());

export const PageModel = registry.register('Page', PageSchema);

export const PageListItemModel = registry.register('PageListItem', PageListItemSchema);
