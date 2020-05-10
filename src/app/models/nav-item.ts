export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  entity?:string;
  children?: NavItem[];
}
