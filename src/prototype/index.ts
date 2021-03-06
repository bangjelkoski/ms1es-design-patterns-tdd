/**
 * Prototype is a creational design pattern that allows cloning objects,
 * even complex ones, without coupling to their specific classes.
 */
export interface Prototype {
  id: string;
  clone(): Prototype;
}

export class ConcretePrototype implements Prototype {
  id = 'ms1es';

  clone(): Prototype {
    return new ConcretePrototype();
  }
}
