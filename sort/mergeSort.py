#coding=utf-8

def mergeSort(arr):
  n = len(arr);
  mid = int(n/2)

  if n <= 1:
    return arr

  left = mergeSort(arr[0:mid])
  right = mergeSort(arr[mid:n])
  
  return merge(left, right)

def merge(left, right):
  tmp = []

  i = 0
  j = 0

  n1 = len(left)
  n2 = len(right)

  while i < n1 and j < n2:
    if left[i] > right[j]:
      tmp.append(right[j])
      j+=1
    else:
      tmp.append(left[i])
      i+=1

  tmp+=left[i:]
  tmp+=right[j:]

  return tmp

arr = [5,4,2,1,3]
data = mergeSort(arr)

print(data) # 1，2，3，4，5