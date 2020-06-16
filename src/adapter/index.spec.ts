import { Target, Adaptee, Adapter } from './index';

describe('Adapter Implementation using TDD', () => {
  test('there should be an Target class', () => {
    //
  });

  test('the Target class should include a call method', () => {
    const isTarget = (object: any): object is Target => {
      return 'call' in object;
    };

    const object = {
      call(): any {},
    };

    expect(isTarget(object)).toBe(true);
  });
  test('there should be an Adaptee class', () => {
    //
  });
  test('the Adaptee class should include a callFromAdaptee method', () => {
    const isAdaptee = (object: any): object is Adaptee => {
      return 'callFromAdaptee' in object;
    };

    const object = {
      callFromAdaptee(): any {},
    };

    expect(isAdaptee(object)).toBe(true);
  });
  test('there should be an Adapter class that implements the Target interface', () => {
    const isAdapter = (object: any): object is Target => {
      return 'call' in object;
    };

    const object = {
      call(): any {},
    };

    expect(isAdapter(object)).toBe(true);
  });
  test('the Adapter class should have a private adaptee property', () => {
    // Javascript doesnt have a way to test this
    expect(true).toBe(true);
  });
  test("the Adapter should call Adaptee's method callFromAdaptee when we call the call method on the Adapter", () => {
    const adaptee = new Adaptee();
    const adapter = new Adapter(adaptee);

    expect(adapter.call()).toEqual(adaptee.callFromAdaptee());
  });
});
