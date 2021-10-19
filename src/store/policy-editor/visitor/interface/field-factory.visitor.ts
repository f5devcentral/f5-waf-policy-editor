export interface FieldFactoryVisitor<T> {
  create(item?: T): void;
  callDefault(order?: number, item?: T): T;
}
