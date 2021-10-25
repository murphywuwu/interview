Function.prototype.myBind = function (context, ...args_0) {
  const map = {
    number: function (context) {
      return new Number(context);
    },
    string: function (context) {
      return new String(context);
    },
    boolean: function (context) {
      return new Boolean(context);
    },
    undefined: global || window,
    null: global || window,
  };

  context =
    map[context] ||
    (map[typeof context] && map[typeof context](context)) ||
    context;

  const fn = Symbol();
  context[fn] = this;

  return function (...args_1) {
    let result;
    try {
      result = context[fn](...args_0, ...args_1);
    } catch (err) {
      throw err;
    }

    return result;
  };
};
