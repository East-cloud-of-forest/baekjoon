let fs = require('fs').readFileSync('/dev/stdin').toString().split('\n')
for (let i = 0; i < fs[0]; ++i) {
  // 도착 거리에서 시작 거리를 빼주어 거리를 구함
  let D = fs[i + 1].split(' ').reduce((x, v) => +v - +x)
  // 거리의 소수점 없는 제곱근 = 소수점 없는 최대 이동 거리
  let M = ~~Math.sqrt(D)
  // 만약 최대 이동거리가 소수점이 없다면
  if (M == Math.sqrt(D)) {
    // 간 거리는 최대 이동거리의 두배에서 1을 뺀 수
    console.log(2 * M - 1)
    // 거리가 최대 이동에 최대 이동보다 1 높은수 의 이상일 경우
  } else if (D <= M * (M + 1)) {
    // 간 거리는 최대 이동거리의 두배
    console.log(2 * M)
  } else {
    // 나머지는 최대 이동거리 두배에서 1을 뺀 수
    console.log(2 * M + 1)
  }
}

// 알고리즘 참고
// https://st-lab.tistory.com/79
