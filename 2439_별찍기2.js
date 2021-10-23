const fs = require('fs').readFileSync('/dev/stdin').toString()

let Star = ''
let f = fs

for (let i = 1; i <= fs; ++i) { // 받아온 숫자만큼 순회
  Star += '*' // 순회 할때마다 별 추가
  f = fs - i // 순회 할때마다 1씩 감소
  let Null = '' // 공백 갯수 초기화
  for (let n = 1; n <= f; ++n) { // 받아온 숫자의 감소된 만큼 순회
    Null += ' ' // 순회한 만큼 공백 추가
  }
  console.log(Null + Star)
}