function majorityElement (arr) {
  let hash = {};
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let el = arr[i];
    if (el in hash) {
      hash[el] = ++hash[el];
    }
    else {
      hash[el] = 1;
    }
  }

  Object.keys(hash).forEach((key) => {
    let num = hash[key];

    if (num >= len/2) major = key;
  })

  return major;
}  

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));
