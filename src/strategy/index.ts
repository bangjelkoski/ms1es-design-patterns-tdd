/**
 * Strategy is a behavioral design pattern that turns a set of behaviors
 * into objects and makes them interchangeable inside original context object.
 *
 * The original object, called context, holds a reference to a strategy object and delegates it executing the behavior.
 * In order to change the way the context performs its work, other
 * objects may replace the currently linked strategy object with another one.
 */
export class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public operation(numbers: any): any {
    return this.strategy.operation(numbers);
  }
}

export interface Strategy {
  operation(numbers: any): any;
}

export class ConcreteStrategy1 implements Strategy {
  public operation(numbers: any): any {
    return [...numbers].sort(function (a: number, b: number) {
      return a > b ? 1 : -1;
    });
  }
}

export class ConcreteStrategy2 implements Strategy {
  public operation(numbers: any): any {
    return numbers.sort(function (a: number, b: number) {
      return a < b ? 1 : -1;
    });
  }
}
