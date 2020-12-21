var r = new Promise((resolve, rejct) => {
  console.log('a');
  resolve();
});

r.then(() => console.log('c'));

console.log('b');

// 调用顺序: a -> b -> c