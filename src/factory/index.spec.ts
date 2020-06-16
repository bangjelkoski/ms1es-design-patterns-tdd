import { Creator, ConcreteCreator, Product } from './index';

describe('Factory Implementation using TDD', () => {
  test('there should be an Creator class', () => {
    //
  });

  test('the Creator class should have a abstract factoryMethod', () => {
    const isCreator = (object: any): object is Creator => {
      return 'factoryMethod' in object;
    };

    const object = {
      factoryMethod(): any {},
    };

    expect(isCreator(object)).toBe(true);
  });

  test('the Creator class can have a other functionalities as well', () => {
    const isCreator = (object: any): object is Creator => {
      return 'factoryMethod' in object && 'otherMethod' in object;
    };

    const object = {
      factoryMethod(): any {},
      otherMethod(): any {},
    };

    expect(isCreator(object)).toBe(true);
  });

  test('there should be an Concrete Creator class that implements the Creator class', () => {
    //
  });

  test('the Concrete Creator class that should implement at least the abstract factoryMethod', () => {
    const concreteCreator = new ConcreteCreator();

    const isConcreteCreator = (object: any): object is ConcreteCreator => {
      return 'factoryMethod' in object;
    };

    const object = {
      factoryMethod(): any {},
    };

    expect(isConcreteCreator(object)).toBe(true);

    const concreteProduct = concreteCreator.factoryMethod();

    expect(concreteProduct).toBeDefined();
  });

  test('there should be a Product interface', () => {
    //
  });

  test('the Product interface should implement some simple method', () => {
    const isProduct = (object: any): object is Product => {
      return 'operation' in object;
    };

    const object = {
      operation(): any {},
    };

    expect(isProduct(object)).toBe(true);
  });

  test('there should be a Concrete Product class that implements the Product Interface', () => {
    const isConcreteProduct = (object: any): object is ConcreteProduct => {
      return 'operation' in object;
    };

    const object = {
      operation(): any {},
    };

    expect(isConcreteProduct(object)).toBe(true);
  });

  test('the Concrete Product class should return ms1es when calling its simple method', () => {
    const concreteProduct = new ConcreteProduct();
    const result = concreteProduct.operation();

    expect(result).toEqual('ms1es');
  });

  test('the Concrete Creator class factoryMethod should return a ConcreteProduct instance', () => {
    const concreteCreator = new ConcreteCreator();
    const concreteProduct = concreteCreator.factoryMethod();

    expect(concreteProduct).toBeInstanceOf(ConcreteProduct);
  });

  test('it should return ms1pki after we make a Concrete Creator instance and get a Concrete Product instance using the factoryMethod on the Concrete Creator class', () => {
    const concreteCreator = new ConcreteCreator();
    const concreteProduct = concreteCreator.factoryMethod();

    const result = concreteProduct.operation();

    expect(result).toEqual('ms1es');
  });
});
