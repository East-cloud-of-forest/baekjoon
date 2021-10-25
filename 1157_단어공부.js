let fs = require('fs').readFileSync('/dev/stdin')
fs.toString()
  .toUpperCase()
  .split('')
  .reduce((x, y) => {
    x[y] = ++x[y] || 1 // 왼쪽에 객체의 키 값이 들어가면 밸류가 비어있기 때문에 false 로 오른쪽 초기값이 삽입, 왼쪽에 들어간 키 값의 벨류가 숫자가 있으면 true로 인식되어 ++로 인해 누적상승 {문자 : 갯수} 로 반환
    return x
  }, {})
let A = ''
for (let i = 0; i < Object.values(fs).length; ++i) {
  for (let f = 0; f < 10; ++f) {
    if (Object.keys(fs)[i] == f) {
      delete fs[f] // delete 의 경우 keys 값이 문자열이면 object.keys 로도 되나 숫자일 경우 object[keys] 로 해야 됨 + 문자열인데 띄어쓰기 들어갈때도
    }
  }
  if (Object.values(fs)[i] == Math.max.apply(null, Object.values(fs))) {
    A += Object.keys(fs)[i]
  }
}
if (A.length == 1) {
  console.log(A)
} else {
  console.log('?')
}
