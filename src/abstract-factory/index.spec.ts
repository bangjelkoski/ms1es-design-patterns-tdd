import { AbstractFactory } from './index';

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
});
