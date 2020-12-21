setTimeout(() => console.log('d'), 0);

var r = new Promise((resolve, reject) => {
  resolve();
});

r.then(() => {
  var begin = Date.now();
  while(Date.now() - begin < 1000);
  console.log('c1');

  new Promise((resolve, reject) => {
    resolve();
  }).then(() => console.log('c2'));
});

// 结果期望输出顺序
// c1 -> c2 -> d
