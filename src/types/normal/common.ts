export interface IQueryParams {
  page: number;
  limit: number;
  sort: string;
  text: string;
  userId?: string;
}

export interface IHome {
  environment: string;
  checkFile: string;
  apiDoc: string;
  moduleName: string;
}

export interface IFileType {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

export interface IUpdateMongo {
  acknowledged: boolean;
  modifiedCount: number;
  upsertedId: string | null;
  upsertedCount: number;
  matchedCount: number;
}

export interface IDeleteMongo {
  acknowledged: boolean;
  deletedCount: number;
}

export interface ISort {
  [key: string]: 1 | -1;
}

export interface IProxyItem {
  ip: string;
  port: number;
  https: boolean;
}

export type ISelectedItem =
  | 'downloadSelected'
  | 'downloadAll'
  | 'delete'
  | 'deleteSelected'
  | 'deleteAll'
  | '';

export interface IApiResponse<T> {
  success?: { data: T; message: string };
  error?: { message: string };
}

export type IDeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? IDeepPartial<T[P]> : T[P];
};

export interface ITableIndex {
  key: number;
  checkbox: boolean;
}

export interface IDateButton {
  name: string;
  showValue: string;
  type: string;
  current: boolean;
}

export interface IImageData {
  id: number;
  image: string;
  header: string;
  title: string;
  buttonTitle: string;
  route: string;
}

export interface IJSConfettiApi {
  JSConfetti: { new (): { addConfetti: (options?: { emojis: string[] }) => void } };
}

export const DEFAULT_TABLE_INDEX: ITableIndex = {
  key: 0,
  checkbox: false,
};
