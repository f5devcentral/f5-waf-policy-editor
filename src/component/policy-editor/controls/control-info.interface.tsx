export interface IControlInfo {
  createControl: (props?: any) => JSX.Element;
  createCell: (children: JSX.Element, props?: any) => JSX.Element;
}
