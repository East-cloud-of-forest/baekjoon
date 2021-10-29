let [A, B] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map(BigInt)
console.log((A + B).toString()) // 큰수의 경우 출력에서 toString을 붙여주어야 함
