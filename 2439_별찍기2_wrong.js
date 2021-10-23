const fs = require('fs').readFileSync('/dev/stdin').toString()

let Star = ''
let N = '     ' // 착각하여 공백의 수를 예제만큼 미리 설정
for (let i = 1; i <= fs; ++i) {
  Star += '*'
  let m = N.slice(i) // 하나씩 잘라주기
  console.log(m + Star)
}
