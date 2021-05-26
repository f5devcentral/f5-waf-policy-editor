export interface FieldFactoryVisitor<T> {
  create(props: T): void;
}
