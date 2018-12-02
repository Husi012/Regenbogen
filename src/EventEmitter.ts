
export class EventEmitter {
  private listeners: EventListener[] = [];

  constructor() {
  }

  get(name) {
    if (name in this.listeners) {
      return this.listeners[name];
    } else {
      return this.listeners[name] = new EventListener();
    }
  }
  subscribe(name, callback) {
    let event = this.get(name);
    event.subscribe(callback);
  }
  trigger(name) {
    let event = this.get(name);
    event.trigger();
  }

  
}

export class EventListener {
  private callbacks: Function[] = [];

  constructor() {
  }

  subscribe(callback) {
    this.callbacks.push(callback);
  }
  trigger() {
    let args = Array.prototype.slice.call(arguments, 1);
    this.callbacks.forEach((callback) => callback(...args));
  }
}