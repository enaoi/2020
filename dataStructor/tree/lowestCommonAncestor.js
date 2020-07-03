// var lowestCommonAncestor = function (root, p, q) {
//   let ans;
//   const dfs = (root, p, q) => {
//     if (root === null) return false;
//     const lson = dfs(root.left, p, q)
//     const rson = dfs(root.right, p, q)
//     if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
//       ans = root
//     }
//     return lson || rson || (root.val === p.val || root.val === q.val)
//   }
//   dfs(root, p, q)
//   return ans;
// }

const TREE = {
  val: 3,
  left: {
    val: 5,
    left: {
      val: 6
    },
    right: {
      val: 2,
      left: {
        val: 7
      },
      right: {
        val: 4
      }
    }
  },
  right: {
    val: 1,
    left: {
      val: 0
    },
    right: {
      val: 8
    }
  }
}

var lowestCommonAncestor = function (root, p, q) {
  let parent = new Map()
  let visited = new Set()
  let findP = false;
  let findQ = false
  const dfs = function (root) {
    if (root.val === p.val) {
      findP = true
    }
    if (root.val === q.val) {
      findQ = true
    }
    if (findP && findQ) return;
    if (root.left) {
      parent.set(root.left.val, root)
      dfs(root.left)
    }
    if (root.right) {
      parent.set(root.right.val, root)
      dfs(root.right)
    }
  }

  dfs(root)
  while (p) {
    visited.add(p.val)
    p = parent.get(p.val)
  }

  console.log(visited)
  while (q) {
    if (visited.has(q.val)) {
      return q;
    }
    q = parent.get(q.val)
  }
  return null;

}


console.log(lowestCommonAncestor(TREE, { val: 5 }, { val: 1 }))