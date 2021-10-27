class EventEmitter {
  constructor() {
    this._events = {};
    this._eventsCount = 0;
    this.__maxListeners = undefined;
  }

  addListener(type, listener) {
    if (typeof listener !== "function")
      throw new TypeError('The "listener" argument must be of type function');

    const events = this._events;
    let remains = events[type];

    if (!remains) {
      events[type] = listener;
    }

    if (typeof remains == "function") {
      events[type] = [remains, listener];
    }

    if (Array.isArray(remains)) {
      events[type] = [...remains, listener];
    }

    this._eventsCount += 1;
    return this;
  }

  removeListener(type, listener) {
    if (typeof listener !== "function")
      throw new TypeError('The "listener" argument must be of type function');

    const events = this._events;

    const remains = events[type];

    if (typeof remains == "function") {
      if (remains == listener) {
        delete events[type];
        this._eventsCount -= 1;
      }
    }

    if (Array.isArray(remains)) {
      const i = remains.indexOf(listener);

      if (i !== -1) {
        remains.splice(i, 1);
        this._eventsCount -= 1;
      }
    }

    return this;
  }

  setMaxListeners() {}

  once(type, listener) {
    if (typeof listener !== "function")
      throw new TypeError('The "listener" argument must be of type function');

    const events = this._events;
    let remains = events[type];

    const only = function (...args) {
      listener.apply(this, args);
    };

    if (!remains) {
      events[type] = only;
      this._eventsCount += 1;
    }

    if (typeof remains == "function") {
      events[type] = [remains, only];
    }

    if (Array.isArray(remains)) {
      events[type] = [...remains, only];
    }

    return this;
  }

  emit(type, ...args) {
    const events = this._events;
    const remains = events[type];

    if (remains) {
      if (typeof remains == "function") {
        remains.apply(this, args);
      }

      if (Array.isArray(remains)) {
        remains.forEach((func) => {
          func.apply(this, args);
        });
      }

      return true;
    }

    return false;
  }
}

export default EventEmitter;
