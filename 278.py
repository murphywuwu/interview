def isBadVersion(version):
  if version >= 4:
    return True
  return False

def firstBadVersion(n):
  low = 0
  high = n

  if n == 1:
    return n

  if low <= high:
    mid = int((high - low)/2) + low

    if isBadVersion(mid):
      if not isBadVersion(mid - 1):
        return mid

      high = mid - 1
    else:
      low = mid + 1