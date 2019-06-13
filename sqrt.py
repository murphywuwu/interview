
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
def sqrt(x: int):
  low = 0
  high = x

  if x == 1 or x == 0:
    return x

  while low <= high:
    mid = int((high - low)/2) + low
    res = mid * mid

    if res > x:
      high = mid - 1
    else:
      if x == res or (mid + 1) * (mid + 1) > x:
        return mid
      low = mid + 1
