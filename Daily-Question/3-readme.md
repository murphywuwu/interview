## 介绍下`Set、Map、WeakSet、WeakMap`的区别？

### Map
**Map和object的区别: map允许任何类型的键**
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

**特别是：map运行使用object作为key。对于字符串键，Object可以很好用，但不能用户对象键**
```
let john = { name: 'John' };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the for the map
visitsCountMap.set(john, 123);
alert(visitsCountMap.get(john)); // 123
```

```
let john = { name: "John" };

let visitsCountObj = {}; // try to use an object

visitsCountObj[john] = 123; // try to use john object as the key

alert( visitsCountObj["[object Object]"] ); // 123
```
![image](https://user-images.githubusercontent.com/12481194/64231027-0833e580-cf21-11e9-876b-aa7195cfd1d4.png)

**链式调用**

```
map.set('1', 'str1')
   .set(1, 'num1')
   .set(true, 'bool1')
```

**迭代map**

- `map.keys()`
- `map.values()`
- `map.entries()/for..of`

```
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50]
])

for (let vegetable of recipeMap.keys()) {
  console.log(vegetable)
}

for (let amount of recipeMap.values() ) {
  console.log(amount)
}

for (let entry of recipeMap) {
  console.log(entry)
}

// Besides that, `Map` has a built-in `forEach` method, similar to `Array`:
recipeMap.forEach( (value, key, map) => {
  alert(`${key}: ${value}`); // cucumber: 500 etc
});
```
![image](https://user-images.githubusercontent.com/12481194/64231620-bbe9a500-cf22-11e9-80d0-dc4e78f101d3.png)

object->map
```
let obj = {
  name: "John",
  age: 30
};
let map = new Map(Object.entries(obj));
alert( map.get('name') ); // John
```

```
let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

// now prices = { banana: 1, orange: 2, meat: 4 }
alert(prices.orange); // 2
```

map->object
```
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries()); 

// done!
// obj = { banana: 1, orange: 2, meat: 4 }
alert(obj.orange); // 2
```

### Set
> Set是一种特殊的类型集合-""set of values" (without keys)", 其中每个值只能出现一次
- `new Set([iterable])` -- creates the set, with optional `iterable` (e.g. array) of values for initialization.

```
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}
```
![image](https://user-images.githubusercontent.com/12481194/64233578-20a6fe80-cf27-11e9-8b0f-6e92544e5186.png)

```
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  alert(value);
});
```