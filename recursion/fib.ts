const ORDER = 40 

function fibRecursion(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibRecursion(n - 1) + fibRecursion(n - 2);
}

console.time('fib')
const result = fibRecursion(ORDER)
console.timeEnd('fib')
console.log(result)

function fibIteration(n: number): number {
  if (n === 0) return 0
  if (n === 1) return 1

  let pp = 0
  let p = 1
  let result = 0

  for (let i = 2; i<n; i++) {
    result += p + pp
    pp = p
    p = result
  }

  return result
}

console.time('fib2')
const result2 = fibIteration(ORDER)
console.timeEnd('fib2')
console.log(result)
