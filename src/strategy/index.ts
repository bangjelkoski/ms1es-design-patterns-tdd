/**
 * Strategy is a behavioral design pattern that turns a set of behaviors
 * into objects and makes them interchangeable inside original context object.
 *
 * The original object, called context, holds a reference to a strategy object and delegates it executing the behavior.
 * In order to change the way the context performs its work, other
 * objects may replace the currently linked strategy object with another one.
 */
export class Context {
  private strategy;

  constructor(strategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy) {
    this.strategy = strategy;
  }

  public operation(...args): any {
    return this.strategy.operation(...args);
  }
}

export interface Strategy {
  operation(args: any): any;
}

export class ConcreteStrategy1 implements Strategy {
  public operation(numbers: any): any {
    return numbers.sort((a: number, b: number) => a - b);
  }
}

export class ConcreteStrategy2 implements Strategy {
  public operation(numbers: any): any {
    return numbers.sort((a: number, b: number) => b - a);
  }
}
