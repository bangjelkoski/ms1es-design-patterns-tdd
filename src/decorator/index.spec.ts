describe('Decorator Implementation using TDD', () => {
  test('there should be a Component interface', () => {
    //
  });
  test('the Component interface should include a method', () => {
    const isComponent = (object: any): object is Component => {
      return 'operation' in object;
    };

    const object = {
      operation(): any {},
    };

    expect(isComponent(object)).toBe(true);
  });
  test('there should be a ConcreteComponent class', () => {
    //
  });
  test('the ConcreteComponent should have a method operation that creates an returns a string [for simplicity]', () => {
    const concreteFactory = new ConcreteComponent();

    const isConcreteComponent = (object: any): object is ConcreteComponent => {
      return 'operation' in object;
    };

    const object = {
      operation(): any {},
    };

    expect(isConcreteComponent(object)).toBe(true);

    const result = concreteFactory.operation();

    expect(result).toBeDefined();
  });
  test('there should be a Decorator class', () => {
    //
  });
  test("the Decorator should have a method operation, and that method delegates the call to the component property's operation method", () => {
    const concreteComponent = new ConcreteComponent();
    const decorator = new Decorator(concreteComponent);

    const isConcreteComponent = (object: any): object is ConcreteComponent => {
      return 'operation' in object;
    };

    expect(isConcreteComponent(decorator)).toBe(true);

    const result = decorator.operation();

    expect(result).toBeDefined();
    expect(result).toEqual('ms1es');
  });
  test('there should be a Concrete Decorator class', () => {
    //
  });
  test('the Concrete Decorator class should include a operation method', () => {
    const isDecorator = (object: any): object is Decorator => {
      return 'operation' in object;
    };

    const object = {
      operation(): any {},
    };

    expect(isDecorator(object)).toBe(true);
  });
  test('it returns decorated string with prefix when we call the operation method on the Concrete Decorator class', () => {
    const concreteComponent = new ConcreteComponent();
    const concreteDecorator = new ConcreteDecorator(concreteComponent);

    const resultFromComponent = concreteComponent.operation();
    const resultFromConcreteDecorator = concreteDecorator.operation();

    expect(resultFromComponent).toBeDefined();
    expect(resultFromComponent).toEqual('ms1es');
    expect(resultFromConcreteDecorator).toBeDefined();
    expect(resultFromConcreteDecorator).toEqual('etf-ms1es');
  });
});
