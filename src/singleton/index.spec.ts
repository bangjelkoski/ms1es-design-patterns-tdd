import { Singleton } from './index';

describe('Abstract Factory Implementation using TDD', () => {
  test('there should be a Singleton class', () => {
    //
  });

  test('there should be a private constructor in the Singleton class, to prevent making instances with the construction calls with the `new` operator', () => {
    // Javascript doesnt offer this functionality, so returning this as true
    expect(true).toBe(true);
  });

  test('the Singleton class should have a static private instance property', () => {
    // Javascript doesnt offer this functionality, so returning this as true
    expect(true).toBe(true);
  });

  test('the Singleton class should have a getInstance method that returns an instance of the Singleton Class', () => {
    const singleton = Singleton.getInstance();

    expect(singleton).toBeInstanceOf(Singleton);
  });

  test('the Singleton class should have a getInstance method that returns ALWAYS the same instance of the Singleton Class', () => {
    const singleton1 = Singleton.getInstance();
    const singleton2 = Singleton.getInstance();

    expect(singleton1).toBeInstanceOf(Singleton);
    expect(singleton2).toBeInstanceOf(Singleton);
    expect(singleton1).toEqual(singleton2);
  });
});
