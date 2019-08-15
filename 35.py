def searchInsert(nums, target):
  low = 0
  high = n = len(nums) - 1

  while low <= high:
    mid = int((high - low)/2) + low

    if target == nums[mid]:
      return mid
    elif target < nums[mid]:
      
      if mid == 0 or target > nums[mid - 1]:
        return mid
      high = mid - 1
    else:
      if mid == n or target < nums[mid + 1]:
        return mid + 1

      low = mid + 1
      