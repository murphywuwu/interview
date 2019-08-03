#coding=utf-8

def quickSort(arr, start, end):
  n = len(arr)
  
  if start >= end:
    return arr;

  i = partion(arr, start, end)

  quickSort(arr, start, i-1) 
  quickSort(arr, i+1, len(arr) - 1)

def partion (arr, start, end):

  pivot = arr[end]

  i = start
  j = i

  while j < end:
    if arr[j] < pivot:
      tmp = arr[j]
      arr[j] = arr[i]
      arr[i] = tmp
      i+=1

    j+=1
  
  arr[end] = arr[i]
  arr[i] = pivot

  return i

arr = [5,4,2,1,3]
quickSort(arr, 0 , len(arr)-1)

print(arr) # 1，2，3，4，5