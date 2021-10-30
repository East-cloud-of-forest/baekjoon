let fs = require('fs').readFileSync('/dev/stdin')
//주머니
let A = 0
while (true) {
  // 남은 수가 5의 배수라면
  if (fs % 5 == 0) {
    // 5로 나눈 수에 주머니 수를 더해서 출력
    console.log(fs / 5 + A)
    break
    // 남은수가 마이너스가 되면
  } else if (fs < 0) {
    // -1 출력
    console.log('-1')
    break
  }
  // 남은 수가 마이너스가 아닌데 5의 배수가 아니면 3을 빼고 주머니를 하나 올려줌
  fs = fs - 3
  A++
}
