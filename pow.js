var myPow = function(x, n) {
  if (n == 0) return 1;

  if (n == 1) return x;
      
  if (n < 0) {
      n = Math.abs(n);
      
      let num = x * myPow(x, n-1);
      return 1/ num;
  }
         
  return x * myPow(x, n-1);
};


console.log(myPow(2.00000, 10), 1024);
console.log(myPow(2.10000, 3), 9.26100);
console.log(myPow(2.00000, -2), 0.25000);