# 查找
def find(data, tree):
  node = tree

  while node is not None:
    if data > node.data: node = p.right
    elif data < node.data: node = p.left 
    else: return node

  return node

# 插入
def insert(data, tree):
  node = tree

  # 未考虑，data和树中节点值相同的情况
  while node is not None:
    if data > node.data:
      if node.right is None: 
        return node.right = Node(data)
      node = node.right
    elif data < node.data:
      if node.left is None:
        return node.left = Node(data)
      node = node.left;

# 删除
def del(data, tree):
  p = tree
  pp

  # 找到要删除的节点以及其父节点
  while p is not None && p.data != data:
    pp = p
    if data > p.data:
      p = p.right;
    elif:
      p = p.left

  # 要删除的节点不存在
  if p == null: return

  # 要删除的节点右两个子节点
  while (p.right != null && p.left != null):
    minP = p.right;
    minPP = p;

    while minP is not None:
      minPP = minP;
      minP = minP.left;
    p.data = minP.data
    p = minP
    pp = minPP
  
  # 找到要删除节点的子节点
  if p.left is not None:  
    child = p.left
  elif p.right is not None:
    child = p.right
  else:
    child = None

  # 删除的是根节点
  if pp is None: 
    tree = child
  elif pp.left == p: 
    pp.left = child
  else pp.right == p:
    pp.right = child



      