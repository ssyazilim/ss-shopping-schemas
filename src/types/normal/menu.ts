export type IPreset =
  | 'today'
  | 'yesterday'
  | 'week'
  | 'lastWeek'
  | 'month'
  | 'lastMonth'
  | 'year'
  | 'lastYear'; // prettier-ignore

export interface IPreset2 {
  yesterday: string;
  week: string;
  month: string;
  year: string;
  today: string;
}

export interface IMenuItem {
  title: string;
  path: string;
}

export interface IRoute {
  create: IMenuItem;
  edit?: IMenuItem;
}

export interface IClient {
  _id: number;
  name: string;
  description: string;
  icon: string;
  routes: IRoute;
}

export interface ISecondaryNavigation {
  name: string;
  to: string;
  icon: any;
}

export interface INavigation {
  name: string;
  to: string | { path: string };
  icon: any;
  current: boolean;
  subItems: ISecondaryNavigation[];
}

export interface ITopNavigation {
  name: string;
  key: string;
  to: string;
  children: {
    name: string;
    key: string;
    to: string;
  }[];
}

export interface ICheckoutSteps {
  id: number;
  name: string;
  description: string;
  status: 'complete' | 'current' | 'upcoming';
}

export interface ILink {
  name: string;
  description: string;
  to: string;
  icon: any;
}
