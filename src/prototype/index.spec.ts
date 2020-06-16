import { Prototype } from './index';

describe('Prototype Implementation using TDD', () => {
  test('there should be an Prototype interface', () => {
    //
  });
  test('the Prototype interface should have a clone method', () => {
    const isPrototype = (object: any): object is Prototype => {
      return 'clone' in object;
    };

    const object = {
      clone(): any {},
    };

    expect(isPrototype(object)).toBe(true);
  });
  test('the Prototype interface should have a simple property that will be cloned', () => {
    const isPrototype = (object: any): object is Prototype => {
      return 'id' in object;
    };

    const object = {
      id: '',
    };

    expect(isPrototype(object)).toBe(true);
  });
  test('there should be an Concrete Prototype class that implements the Prototype interface', () => {
    //
  });
  test('the Concrete Prototype should have a clone method', () => {
    const concretePrototype = new ConcretePrototype();

    const isConcretePrototype = (object: any): object is ConcretePrototype => {
      return 'clone' in object;
    };

    const object = {
      clone(): any {},
    };

    expect(isConcretePrototype(object)).toBe(true);

    const concretePrototypeClone = concretePrototype.clone();

    expect(concretePrototypeClone).toBeDefined();
  });
  test('the Prototype interface clone method should return an instance of the Prototype interface', () => {
    const concretePrototype = new ConcretePrototype();
    const concretePrototypeClone = concretePrototype.clone();

    expect(concretePrototypeClone).toBeInstanceOf(ConcretePrototype);
  });
  test('after cloning, cloned object as well as the simple property should be the same between the original and cloned object', () => {
    const concretePrototype = new ConcretePrototype();
    const concretePrototypeClone = concretePrototype.clone();

    expect(concretePrototype).toEqual(concretePrototypeClone);
    expect(concretePrototype.id).toEqual(concretePrototypeClone.id);
  });
});
