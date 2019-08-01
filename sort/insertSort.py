def insertSort (arr):
  n = len(arr)

  for i in range (1, n):
    val = arr[i]
    j = i - 1;

    while j >= 0 and val < arr[j]:
      arr[j+1] = arr[j]
      j-=1
    
    arr[j+1] = val
    
arr = [5,4,2,1,3];

insertSort(arr);

print(arr) # 1，2，3，4，5

