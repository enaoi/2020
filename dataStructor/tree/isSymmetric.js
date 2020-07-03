const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3
    },
    right: {
      val: 4
    }
  },
  right: {
    val: 2,
    left: {
      val: 4
    },
    right: {
      val: 3
    }
  }
}
var isSymmetric = function (root) {
  return check(root, root)
}

// 递归
var check = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return p.val === q.val && check(p.left, q.right) && check(p.right, q.left)
}

// 迭代
var check = function (u, v) {
  const q = []
  q.push(u), q.push(v)

  while (q.length) {
    u = q.shift()
    v = q.shift()

    if (!u && !v) continue;
    if ((!u || !v) || (u.val !== v.val)) return false;

    q.push(u.left)
    q.push(v.right)
    q.push(u.right)
    q.push(v.left)
  }
  return true
}


console.log(isSymmetric(root))




