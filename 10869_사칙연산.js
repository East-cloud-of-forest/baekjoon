a = require('fs').readFileSync('/dev/stdin').toString().split(' ')

console.log(+a[0] + +a[1])
console.log(+a[0] - +a[1])
console.log(+a[0] * +a[1])
console.log(~~(+a[0] / +a[1])) // "~~" 로 소수점을 없을 수 있다.
console.log(+a[0] % +a[1])
