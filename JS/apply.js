Function.prototype.myApply = function (context, args) {
  args = args || [];

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

  let result;
  try {
    result = context[fn](...args);
  } catch (err) {
    throw err;
  }

  delete context[fn];

  return result;
};
