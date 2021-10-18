export interface FieldFactoryVisitor<T> {
  create(defaultFunc: (orderNumber: number, value?: T) => T, item?: T): void;
}
