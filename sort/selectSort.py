#coding=utf-8

def selectSort(arr):
  
  n = len(arr);

  for i in range(n-2):
    end = arr[i]

    j = i+1
    k = j+1
    min = arr[j]
    pos = j
    while j < n-1 and k < n:
      if arr[k] < arr[j]:
        min = arr[k]
        pos = j = k
      k+=1

    if min < end:
      arr[i] = min
      arr[pos] = end


arr = [5,4,2,1,3];

selectSort(arr);

print(arr) # 1，2，3，4，5
    