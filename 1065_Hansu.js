// const fs = require('fs').readFileSync('/dev/stdin').toString()
// function Han(x) {
//   let A = x
//   let B = 0
//   let C = 0

//   B = Math.floor(A / 10) 첫번째, 두번째 자리수
//   C = A % 100 두번째, 세번째 자리수
//   A = B - C
//   if (Math.sign(A) < 0) { 부호에 따라 1,-1,0,-0 을 반환, B에서 C를 뺀 것이 마이너스가 된다면
//     A = A * -1 마이너스 없애주기
//   }
//   B = Math.floor(A / 10) 뺀것의 첫번째 자리수
//   C = A % 10 뺀것의 두번째 자리수

//   return B == C 그 두개가 같다면 한수
// }
// 첫번째와 두번째, 두번째와 세번째 의 숫자로 나누고 그 두개를 서로 빼면 두자리수가 나오고 그 두개의 숫자가 같으면 한수라고 생각했지만 반만 맞음. 160 같이 한수가 아니어도 서로 같은 두수의 두자리가 나오는 숫자가 존재했고 결국 검색을 하여 각 자리수를 따로 나눠주는 방식을 이용함.

const fs = require('fs').readFileSync('/dev/stdin').toString()
function Han(x) {
  let A = x
  let B = 0
  let C = 0

  C = Math.floor(A / 100) // 첫자리수
  B = Math.floor((A % 100) / 10) // 두번째자리수
  A = A % 10 // 세번째자리수
  C = C - B
  A = B - A

  return C == A // 첫번째 자리수와 두번째 자리수의 차와 , 두번째 자리수와 세번째 자리수가 같으면 한수
}

let C = 0
for (let i = 1; i <= fs; i++) {
  if (String(i).length < 3) {
    C++
  } else if (Han(i) == true) {
    C++
  }
}

console.log(C)
