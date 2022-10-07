function solution(n, lost, reserve) {
  var answer = 0;

  lost.sort((a, b) => a - b);

  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i])) {
      reserve.splice(reserve.indexOf(lost[i]), 1);
      lost.splice(i, 1);
      i--;
    }
  }
  for (let i = 0; i < lost.length; i++) {
    if (lost.length == 0) break;
    if (reserve.includes(lost[i] - 1) || reserve.includes(lost[i] + 1)) {
      if (reserve.includes(lost[i] - 1)) {
        reserve.splice(reserve.indexOf(lost[i] - 1), 1);
      } else {
        reserve.splice(reserve.indexOf(lost[i] + 1), 1);
      }
      lost.splice(i, 1);
      i--;
    }
  }
  answer = n - lost.length;

  return answer;
}
