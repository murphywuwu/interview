/**
 * @jest-environment jsdom
 */

import call from "../call";

describe("myCall", () => {
  test("fn", () => {
    // Function.prototype
    const obj = Object.create(Function.prototype);
    expect(obj.myCall).toThrow();
  });

  describe("context", () => {
    test("string", () => {
      function play() {
        return this;
      }

      expect(play.myCall("")).toEqual(new String(""));
    });

    test("number", () => {
      function play() {
        return this;
      }

      expect(play.myCall(2)).toEqual(new Number(2));
    });

    test("boolean", () => {
      function play() {
        return this;
      }

      expect(play.myCall(false)).toEqual(new Boolean(false));
    });

    test("null, undefined for node enviroment", () => {
      function play() {
        return this;
      }

      expect(play.myCall(null)).toEqual(global);
      expect(play.myCall(undefined)).toEqual(global);
    });

    test("null, undefined for browser enviroment", () => {
      function play() {
        return this;
      }

      expect(play.myCall(null)).toEqual(window);
      expect(play.myCall(undefined)).toEqual(window);
    });
  });

  test("with args", () => {
    function Product(name, price) {
      this.name = name;
      this.price = price;
    }

    function Food(name, price) {
      Product.myCall(this, name, price);
      this.category = "food";
    }

    expect(new Food("cheese", 5).name).toBe("cheese");
  });
});
