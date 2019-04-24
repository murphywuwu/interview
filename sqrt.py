
""" 解法1:暴力解法 """
def sqrt(x):
  if x == 0 or x == 1: return x
  if x == 2: return x - 1

  for i in range(x):
    res = i * i;
    if res == x:
      return i
    elif res > x:
      return i - 1 

""" 解法2:二分查找 """