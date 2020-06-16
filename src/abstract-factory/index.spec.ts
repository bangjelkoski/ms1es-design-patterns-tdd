import { AbstractFactory, ConcreteFactory, AbstractProduct } from './index';

describe('Abstract Factory Implementation using TDD', () => {
  test('there should be an AbstractFactory interface', () => {
    //
  });

  test('the AbstractFactory interface should include a method that creates an abstract product', () => {
    const isAbstractFactory = (object: any): object is AbstractFactory => {
      return 'createProduct' in object;
    };

    const object = {
      createProduct(): any {},
    };

    expect(isAbstractFactory(object)).toBe(true);
  });

  test('there should be an ConcreteFactory class that implements the AbstractFactory', () => {});

  test('the ConcreteFactory should have a method that creates an returns concrete product', () => {
    const concreteFactory = new ConcreteFactory();

    const isConcreteFactory = (object: any): object is ConcreteFactory => {
      return 'createProduct' in object;
    };

    const object = {
      createProduct(): any {},
    };

    expect(isConcreteFactory(object)).toBe(true);

    const concreteProduct = concreteFactory.createProduct();

    expect(concreteProduct).toBeDefined();
  });

  test('there should be a abstract ConcreteProduct interface', () => {});

  test('the ConcreteProduct interface should contain at least one method', () => {
    const isAbstractProduct = (object: any): object is AbstractProduct => {
      return 'usefulMethod' in object;
    };

    const object = {
      usefulMethod(): any {},
    };

    expect(isAbstractProduct(object)).toBe(true);
  });
});
