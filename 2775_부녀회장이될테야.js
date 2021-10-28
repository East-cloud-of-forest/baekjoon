let fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let fs = qqq.toString().trim().split('\n')
for (let i = 0; i < fs[0]; ++i) {
  let [F, R] = [+fs[i * 2 + 1], +fs[i * 2 + 2]]
  let H = Array(F + 1) //층이 0부터 시작하기 때문에 +1
    .fill()
    .map((x) => Array(R).fill(0)) //Array를 중첩해서 사용하면 배열 안에 배열
  for (let f = 0; f <= F; ++f) {
    for (let n = 0; n < R; ++n) {
      if (f > 0 && n > 0) break //0층일때 1씩 늘어나는 수를 0층에 채워주고, 1층 이상일때 0번째 자리에만 1을 채워줌
      H[f][n] = n + 1
    }
  }
  for (let f = 1; f <= F; ++f) {
    for (let n = 1; n < R; ++n) {
      H[f][n] = H[f - 1][n] + H[f][n - 1]
    }
  }
  console.log(H[F][R - 1])
}
