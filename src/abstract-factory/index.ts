export interface AbstractFactory {
  createProduct(): ConcreteProduct;
}

export class ConcreteFactory implements AbstractFactory {
  public createProduct(): ConcreteProduct {
    return new ConcreteProduct();
  }
}

export interface AbstractProduct {
  usefulMethod(): string;
}

export class ConcreteProduct implements AbstractProduct {
  public usefulMethod(): string {
    return 'ms1es';
  }
}
