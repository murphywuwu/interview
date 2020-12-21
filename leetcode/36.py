class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
      self.n = len(board)
      self.boxes = [[0 for i in range(9)] for j in range(9)]

      return self.dfs(board, 0, True)      

    def dfs(self, board, row, is_valid):
      if not is_valid or row >= self.n:
        return is_valid

      for i in range(self.n):
        val = board[row][i] 

        if val == '.': continue

        # 每一行不能有重复的
        for j in range(i+1, self.n):
          if val == board[row][j]:
            return self.dfs(board, row+1, False)
        # 每一列不能有重复的
        for k in range(row+1, self.n):
          if val == board[k][i]:
            return self.dfs(board, row+1, False)
        
        # 每个3*3九宫格不能有重复的
        box_index = (row/3)*3 + i/3
        if val in self.boxes[box_index]:
          return self.dfs(board, row + 1, False) 

        self.boxes[box_index][i] = val

      return self.dfs(board, row+1, True)