介绍下`Set、Map、WeakSet、WeakMap`的区别？

Map和object的区别: map允许任何类型的键
```
let map = new Map();
map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');
map.set({}, 'obj1')

for ([key, value] of map) {
  console.log(typeof key) //  string, number, boolean
}

let obj = {}
obj['1'] = str1
obj[1] = 'num1'
obj[true] = 'bool1'
obj[{}] = 'obj1'

for (let key in obj) {
  // key全部转换成了string类型的值
  console.log(typeof key); // string, string, string
}
```
