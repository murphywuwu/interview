/**
 * @jest-environment jsdom
 */

import bind from "../bind";

describe("myApply", () => {
  test("fn", () => {
    const obj = Object.create(Function.prototype);
    expect(obj.myBind()).toThrow();
  });

  describe("context", () => {
    test("string", () => {
      function play() {
        return this;
      }

      expect(play.myBind("")()).toEqual(new String(""));
    });

    test("number", () => {
      function play() {
        return this;
      }

      expect(play.myBind(2)()).toEqual(new Number(2));
    });

    test("boolean", () => {
      function play() {
        return this;
      }

      expect(play.myBind(false)()).toEqual(new Boolean(false));
    });

    test("null, undefined for node enviroment", () => {
      function play() {
        return this;
      }

      expect(play.myBind(null)()).toEqual(global);
      expect(play.myBind(undefined)()).toEqual(global);
    });

    test("null, undefined for browser enviroment", () => {
      function play() {
        return this;
      }

      expect(play.myBind(null)()).toEqual(window);
      expect(play.myBind(undefined)()).toEqual(window);
    });
  });

  test("with args", () => {
    function Product(name, price) {
      this.name = name;
      this.price = price;
    }

    function Food(name, price) {
      Product.myBind(this, name, price)();
      this.category = "food";
    }

    expect(new Food("cheese", 5).name).toBe("cheese");
  });
});
