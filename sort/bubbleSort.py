#coding=utf-8

def bubbleSort(arr):
  n = len(arr)

  for i in range(n):
    flag = False
    for j in range(n-1):
      if arr[j] > arr[j+1]:
        val = arr[j+1]
        arr[j+1] =arr[j]
        arr[j] = val
        flag = True
    if not flag: 
      break

    
arr = [5,4,2,1,3]
bubbleSort(arr)

print(arr) # 1，2，3，4，5
    