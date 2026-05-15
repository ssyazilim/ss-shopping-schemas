export type IgV = { [key: string]: string[] };
export type IActionItem = { name: string; variants: string[] };
export type IAction = 'helper' | 'table';
export type ISellPrice = { sellDefault: number; sell: number; discount: number };
export type IFields = 'stockQuantity' | 'sku' | 'desi' | 'selectedLabel' | 'gtin';
export type IInputValue = { index: number; field: string; value: 'stockQuantity' | 'sku' | 'desi' };
