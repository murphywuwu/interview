function sleep(duration) {
  return new Promise((resolve, reject) => {
    console.log('b');
    
    setTimeout(resolve, duration);
  });
}

console.log('a');

sleep(5000).then(() => console.log('c'));

// 结果期望输出顺序
// a -> b -> c


function sleep(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}

async function foo(name) {
  await sleep(2000);
  console.log(name);
}

async function foo2() {
  await foo('a');
  await foo('b');
}