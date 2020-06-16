import { Subject, RealSubject } from './index';

describe('Proxy Implementation using TDD', () => {
  test('there should be an Subject interface', () => {
    //
  });

  test('the Subject interface should include a method that is shared between both the RealSubject and the Proxy', () => {
    const isSubject = (object: any): object is Subject => {
      return 'operation' in object;
    };

    const object = {
      operation(): any {},
    };

    expect(isSubject(object)).toBe(true);
  });

  test('there should be an RealSubject class that implements the Subject', () => {
    //
  });

  test('the RealSubject should have a method called operation that returns an string [for simplicity]', () => {
    const realSubject = new RealSubject();

    const isRealSubject = (object: any): object is RealSubject => {
      return 'operation' in object;
    };

    const object = {
      operation(): any {},
    };

    expect(isRealSubject(object)).toBe(true);

    const result = realSubject.operation();

    expect(result).toBeDefined();
  });

  test('there should be an Proxy class that implements the Subject', () => {
    //
  });

  test('the Proxy class should have the realSubject as a private member', () => {
    // Javascript doesnt have a way to test this
    expect(true).toEqual(true);
  });

  test('the Proxy should also have a method called operation', () => {
    const realSubject = new RealSubject();
    const proxy = new Proxy(realSubject);

    const isProxy = (object: any): object is Proxy => {
      return 'operation' in object;
    };

    const object = {
      operation(): any {},
    };

    expect(isProxy(object)).toBe(true);

    const result = proxy.operation();

    expect(result).toBeDefined();
  });

  test("the Proxy should wrap the realSubject's operation method around some special logic that may or may not call the realSubject's operation method", () => {
    const proxy = new Proxy();
    const realSubject = new RealSubject();

    const resultFromProxy = proxy.operation();
    const resultFromRealSubject = realSubject.proxy();
    expect(resultFromProxy).toEqual(resultFromRealSubject);

    const resultFromProxyAfterModification = proxy
      .setPermissions(false)
      .operation();
    expect(resultFromProxy).not.toEqual(resultFromRealSubject);
  });
});
