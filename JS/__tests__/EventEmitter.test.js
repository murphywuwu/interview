import EventEmitter from "../EventEmitter";

describe("EventEmitter", () => {
  let myEmitter;

  const listener1 = function listener1() {
    console.log("监听器listner1 执行");
  };

  const listener2 = function listener2(arg1, arg2) {
    console.log("监听器listener2 执行");
  };

  const listener3 = function listener3(...args) {
    console.log("监听器listener3 执行");
  };

  beforeEach(() => {
    myEmitter = new EventEmitter();
  });

  describe("addListener", () => {
    test("add one listener", () => {
      const type = "connection";
      myEmitter = myEmitter.addListener(type, listener1);
      expect(typeof myEmitter._events[type]).toBe("function");
      expect(myEmitter._eventsCount).toBe(1);
    });

    test("add two listeners", () => {
      const type = "connection";
      myEmitter = myEmitter.addListener(type, listener1);
      myEmitter = myEmitter.addListener(type, listener2);

      expect(myEmitter._events[type].length).toBe(2);
      expect(myEmitter._eventsCount).toBe(2);
    });

    test("add three listeners", () => {
      const type = "connection";
      myEmitter = myEmitter.addListener(type, listener1);
      myEmitter = myEmitter.addListener(type, listener2);
      myEmitter = myEmitter.addListener(type, listener3);

      expect(myEmitter._events[type].length).toBe(3);
      expect(myEmitter._eventsCount).toBe(3);
    });

    test("add listener type not equal to function", () => {
      expect(() => myEmitter.addListener("connection", 1)).toThrow();
      expect(() => myEmitter.addListener("connection", false)).toThrow();
      expect(() => myEmitter.addListener("connection", "")).toThrow();
      expect(() => myEmitter.addListener("connection", null)).toThrow();
      expect(() => myEmitter.addListener("connection", undefined)).toThrow();
      expect(() => myEmitter.addListener("connection", {})).toThrow();
      expect(() => myEmitter.addListener("connection", [])).toThrow();
    });
  });

  describe("removeListener", () => {
    test("remove one listener", () => {
      const type = "connection";
      myEmitter = myEmitter.addListener(type, listener1);
      myEmitter = myEmitter.removeListener(type, listener1);

      expect(myEmitter._events[type]).toBe(undefined);
      expect(myEmitter._eventsCount).toBe(0);
    });

    describe("remove two listener", () => {
      test("remove two different listener", () => {
        const type = "connection";
        myEmitter = myEmitter.addListener(type, listener1);
        myEmitter = myEmitter.addListener(type, listener2);
        myEmitter = myEmitter.addListener(type, listener3);
        myEmitter = myEmitter.removeListener(type, listener2);
        myEmitter = myEmitter.removeListener(type, listener3);

        expect(myEmitter._events[type].length).toBe(1);
        expect(myEmitter._eventsCount).toBe(1);
      });

      test("remove two same listener", () => {
        const type = "connection";
        myEmitter = myEmitter.addListener(type, listener1);
        myEmitter = myEmitter.addListener(type, listener1);
        myEmitter = myEmitter.removeListener(type, listener1);

        expect(myEmitter._events[type].length).toBe(1);
        expect(myEmitter._eventsCount).toBe(1);
      });
    });

    test("remove listener type not equal to function", () => {
      expect(() => myEmitter.removeListener("connection", 1)).toThrow();
      expect(() => myEmitter.removeListener("connection", false)).toThrow();
      expect(() => myEmitter.removeListener("connection", "")).toThrow();
      expect(() => myEmitter.removeListener("connection", null)).toThrow();
      expect(() => myEmitter.removeListener("connection", undefined)).toThrow();
      expect(() => myEmitter.removeListener("connection", {})).toThrow();
      expect(() => myEmitter.removeListener("connection", [])).toThrow();
    });

    test("remove event type not exits", () => {
      const type = "connection";
      myEmitter = myEmitter.addListener(type, listener1);
      myEmitter = myEmitter.addListener(type, listener2);
      myEmitter = myEmitter.removeListener("", listener1);

      expect(myEmitter._events[type].length).toBe(2);
      expect(myEmitter._eventsCount).toBe(2);
    });
  });

  describe("removeAllListeners", () => {
    test("all", () => {});

    describe("specific event", () => {
      test("event exits", () => {});

      test("event not exits", () => {});
    });
  });

  test("setMaxListeners", () => {});

  describe("emit", () => {
    test("one listener", () => {
      const mockListener1 = jest.fn(listener1);
      myEmitter.addListener("connection", mockListener1);

      const result = myEmitter.emit("connection");

      expect(mockListener1).toHaveBeenCalled();
      expect(result).toBe(true);
    });

    test("two listener", () => {
      const mockListener1 = jest.fn(listener1);
      const mockListener2 = jest.fn(listener2);
      myEmitter.addListener("connection", mockListener1);
      myEmitter.addListener("connection", mockListener2);

      const result = myEmitter.emit("connection", "hello", "world");

      expect(mockListener1).toHaveBeenCalled();
      expect(mockListener2).toHaveBeenCalled();
      expect(mockListener1).toHaveBeenCalledWith("hello", "world");
      expect(mockListener2).toHaveBeenCalledWith("hello", "world");
      expect(result).toBe(true);
    });

    test("event not exit", () => {
      myEmitter.addListener("connection", listener1);

      const result = myEmitter.emit("connet");

      expect(result).toBe(false);
    });
  });

  describe("once", () => {
    describe("add listener", () => {
      test("add one listener", () => {
        myEmitter = myEmitter.once("connection", listener1);

        expect(myEmitter._eventsCount).toBe(1);
      });

      test("add two listener", () => {
        myEmitter = myEmitter.once("connection", listener1);
        myEmitter = myEmitter.once("connection", listener2);

        expect(myEmitter._events["connection"].length).toBe(2);
        expect(myEmitter._eventsCount).toBe(1);
      });

      test("add three listener", () => {
        myEmitter = myEmitter.once("connection", listener1);
        myEmitter = myEmitter.once("connection", listener2);
        myEmitter = myEmitter.once("connection", listener3);

        expect(myEmitter._events["connection"].length).toBe(3);
        expect(myEmitter._eventsCount).toBe(1);
      });
    });

    describe("emit listener", () => {
      test("one", () => {
        const mockListener1 = jest.fn(listener1);
        myEmitter = myEmitter.once("connection", mockListener1);

        myEmitter.emit("connection");

        expect(mockListener1).toHaveBeenCalled();
        expect(myEmitter._events["connection"]).toBe(undefined);
      });

      test("two", () => {
        const mockListener1 = jest.fn(listener1);
        const mockListener2 = jest.fn(listener2);
        myEmitter.once("connection", mockListener1);
        myEmitter.once("connection", mockListener2);

        myEmitter.emit("connection");

        expect(mockListener1).toHaveBeenCalled();
        expect(mockListener2).toHaveBeenCalled();
        expect(myEmitter._events["connection"]).toBe(undefined);
      });
    });

    test("add listener type not equal to function", () => {
      expect(() => myEmitter.once("connection", 1)).toThrow();
      expect(() => myEmitter.once("connection", false)).toThrow();
      expect(() => myEmitter.once("connection", "")).toThrow();
      expect(() => myEmitter.once("connection", null)).toThrow();
      expect(() => myEmitter.once("connection", undefined)).toThrow();
      expect(() => myEmitter.once("connection", {})).toThrow();
      expect(() => myEmitter.once("connection", [])).toThrow();
    });
  });
});
