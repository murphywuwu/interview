/**
 * @jest-environment jsdom
 */

import apply from "../apply";

describe("myApply", () => {
  test("fn", () => {
    const obj = Object.create(Function.prototype);
    expect(obj.myApply).toThrow();
  });

  describe("context", () => {
    test("string", () => {
      function play() {
        return this;
      }

      expect(play.myApply("")).toEqual(new String(""));
    });

    test("number", () => {
      function play() {
        return this;
      }

      expect(play.myApply(2)).toEqual(new Number(2));
    });

    test("boolean", () => {
      function play() {
        return this;
      }

      expect(play.myApply(false)).toEqual(new Boolean(false));
    });

    test("null, undefined for node enviroment", () => {
      function play() {
        return this;
      }

      expect(play.myApply(null)).toEqual(global);
      expect(play.myApply(undefined)).toEqual(global);
    });

    test("null, undefined for browser enviroment", () => {
      function play() {
        return this;
      }

      expect(play.myApply(null)).toEqual(window);
      expect(play.myApply(undefined)).toEqual(window);
    });
  });

  test("with args", () => {
    function Product(name, price) {
      this.name = name;
      this.price = price;
    }

    function Food(name, price) {
      Product.myApply(this, [name, price]);
      this.category = "food";
    }

    expect(new Food("cheese", 5).name).toBe("cheese");
  });
});
