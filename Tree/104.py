""" 解法1:广度优先搜索 """
class Solution: 
  def maxDepth(self, root: TreeNode) -> int:
    if not root: return 0

    queue = collections.deque()
    queue.append(root)
    
    depth = 0

    while queue:
      depth+=1
      level_size = len(queue)

      for i in range(level_size):
        # 队列在动态变化，所以不能通过索引i来访问节点
        node = queue.popleft()
        if node.right: queue.append(node.right)
        if node.left: queue.append(node.left)              

    return depth

""" 解法2:深度优先搜索 """
class Solution:
  def maxDepth(self, root: TreeNode) -> int:
    if not root: return 0

    return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))