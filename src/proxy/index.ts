/**
 * Proxy is a structural design pattern that provides an object that acts as a substitute
 * for a real service object used by a client. A proxy receives client requests, does some work (access control, caching, etc.)
 * and then passes the request to a service object.
 *
 * The proxy object has the same interface as a service,
 * which makes it interchangeable with a real object when passed to a client.
 */
export interface Subject {
  operation(): string;
}

export class RealSubject implements Subject {
  public operation(): string {
    return 'ms1es';
  }
}

export class Proxy implements Subject {
  private realSubject: RealSubject;
  private permissions: boolean = true;

  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject;
  }

  public operation(): string {
    if (this.hasPermissions()) {
      return this.realSubject.operation();
    }

    return 'etf-ms1es';
  }

  public setPermissions(permission) {
    this.permissions = permission;

    return this;
  }

  private hasPermissions(): boolean {
    return this.permissions;
  }
}
