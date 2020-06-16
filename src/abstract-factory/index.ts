export interface AbstractFactory {
  createProduct(): any;
}

export class ConcreteFactory implements AbstractFactory {
  public createProduct(): any {
    return {};
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
