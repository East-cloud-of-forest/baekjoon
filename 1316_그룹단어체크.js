let fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let C = 0
// 처음에 주어지는 문자열 갯수만큼 반복
for (let i = 1; i <= fs[0]; ++i) {
  // 객체들로 각 문자별 숫자로 정리 {문자 : 갯수}
  let A = fs[i].split('').reduce((x, y) => {
    x[y] = ++x[y] || 1
    return x
  }, {})
  // 문자의 종류 수 만큼 반복
  x: for (let f = 0; f < Object.values(A).length; ++f) {
    // 문자의 갯수가 2개 이상일때만
    if (Object.values(A)[f] >= 2) {
      let B = []
      // 문자열 만큼 반복하면서
      for (let n = 0; n < fs[i].length; ++n) {
        // 문자열에서 문자를 찾지 못할때 까지 문자열의 자리수를 하나씩 줄여가며 문자의 자리수를 B에 push
        if (Number(fs[i].indexOf(Object.keys(A)[f], n)) != -1) {
          B.push(fs[i].indexOf(Object.keys(A)[f], n))
        }
      }
      // 배열을 초기화 하여 중복되는 숫자를 제거
      B = Array.from(new Set(B))
      // 배열에 있는 숫자가 연속되어 있는지 검증, 마지막 수를 비교할때 없는 배열과 비교하지 않도록 for 조건에 + 1
      for (let m = 0; m + 1 < B.length; ++m) {
        // 배열의 수와 그 다음수가 1개 차이가 아니라면 그룹단어 아니니 그룹단어가 아닌 카운트 C에 수를 누적
        if (B[m] + 1 != B[m + 1]) {
          C++
          //한번이라도 배열의 수가 연속되지 않으면 더이상의 검증은 필요 없기 때문에 break 하고 다음 문자열로 넘어감
          break x // 다중 for 문에서 원하는 for 문을 break 시키는 label 문
        }
      }
    }
  }
}
// 단어 갯수에서 그룹단어가 아닌 카운트 C를 빼, 그룹단어의 숫자를 출력
console.log(fs[0] - C)
