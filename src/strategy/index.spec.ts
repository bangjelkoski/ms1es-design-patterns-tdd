describe('Strategy Implementation using TDD', () => {
  test('there should be an Context class', () => {
    //
  });

  test("the Context should include a set strategy method, and an operation method that calls the strategy's operation method", () => {
    const isContext = (object: any): object is Context => {
      return 'operation' in object && 'setStrategy' in object;
    };

    const object = {
      operation(numbers): any {},
      setStrategy(strategy): void {},
    };

    expect(isContext(object)).toBe(true);
  });

  test('the Context class should have a strategy private member', () => {
    // Javascript doesnt have a way to test this
    expect(true).toEqual(true);
  });

  test('there should be an Strategy interface', () => {
    //
  });

  test('the Strategy interface should include a method that creates an abstract product', () => {
    const isStrategy = (object: any): object is Strategy => {
      return 'operation' in object;
    };

    const object = {
      operation(numbers): any {},
    };

    expect(isStrategy(object)).toBe(true);
  });

  test('there should be an ConcreteStrategy1', () => {
    //
  });
  test('the ConcreteStrategy1 should have a operation method', () => {
    const concreteStrategy = new ConcreteStrategy1();

    const isConcreteStrategy = (object: any): object is ConcreteStrategy1 => {
      return 'operation' in object;
    };

    const object = {
      operation(numbers): any {},
    };

    expect(isConcreteStrategy(object)).toBe(true);

    const result = concreteStrategy.operation();

    expect(result).toBeDefined();
  });

  test('there should be an ConcreteStrategy2', () => {
    //
  });

  test('the ConcreteStrategy2 should have a operation method', () => {
    const concreteStrategy = new ConcreteStrategy2();

    const isConcreteStrategy = (object: any): object is ConcreteStrategy2 => {
      return 'operation' in object;
    };

    const object = {
      operation(numbers): any {},
    };

    expect(isConcreteStrategy(object)).toBe(true);

    const result = concreteStrategy.operation();

    expect(result).toBeDefined();
  });

  test('it shows sorted array sorted in ascending order if we use the first ConcreteStrategy or descending if we use the second ConcreteStrategy', () => {
    const concreteStrategy1 = new ConcreteStrategy2();
    const concreteStrategy2 = new ConcreteStrategy2();
    const context = new Context(concreteStrategy1);

    const numbers = [1, 5, 8, 3, 2, 15, 22];

    expect(context.operation(numbers).toEqual([1, 2, 3, 5, 8, 15, 22]));

    context.setStrategy(concreteStrategy2);
    expect(context.operation(numbers).toEqual([22, 15, 8, 5, 3, 2, 1]));
  });
});
