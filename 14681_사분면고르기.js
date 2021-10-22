const [A, B] = require('fs').readFileSync(0).toString().split('\n') // '/dev/stdin' 이 아닌 0으로 해야함.
if (A > 0 && B > 0) {
  console.log('1')
} else if (A < 0 && B > 0) {
  console.log('2')
} else if (A > 0 && B < 0) {
  console.log('4')
} else {
  console.log('3')
}
