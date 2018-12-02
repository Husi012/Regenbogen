export class EventEmitter {
    constructor() {
        this.listeners = [];
    }
    get(name) {
        if (name in this.listeners) {
            return this.listeners[name];
        }
        else {
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
    constructor() {
        this.callbacks = [];
    }
    subscribe(callback) {
        this.callbacks.push(callback);
    }
    trigger() {
        let args = Array.prototype.slice.call(arguments, 1);
        this.callbacks.forEach((callback) => callback(...args));
    }
}
