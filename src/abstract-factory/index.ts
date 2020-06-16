export interface AbstractFactory {
  createProduct(): any;
}

export class ConcreteFactory implements AbstractFactory {
  public createProduct(): any {
    return {};
  }
}
