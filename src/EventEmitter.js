

class EventEmitter {
  constructor() {
    this.listeners = {};
  }
  get(name) {
    if (name in this.listeners) {
      return this.listeners[name];
    } else {
      return this.listeners[name] = new EventEmitter.Event();
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

EventEmitter.Event = class {
  constructor() {
    this.listeners = [];
  }
  subscribe(callback) {
    this.listeners.push(callback);
  }
  trigger() {
    listeners.forEach((listener) => listener(...Array.prototype.slice.call(arguments, 1)));
  }
}
