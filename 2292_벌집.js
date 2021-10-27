const fs = require('fs').readFileSync('/dev/stdin').toString()
let i = 1 // 층수
let f = 1 // 층에 있는 숫자의 수
// 층에 있는 숫자가 부여받은 숫자에 도달할 때 까지 반복
while (f < +fs) {
  // 층이 올라갈때 마다 숫자의 갯수는 6의 배수로 올라감
  f += 6 * i
  // 층 수 상승
  ++i
}
// 층에 있는 숫자가 부여받은 숫자에 도달하면 상승한 층을 출력
console.log(i)
