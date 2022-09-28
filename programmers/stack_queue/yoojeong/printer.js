function solution(priorities, location) {
  let temp = [...priorities];
  let max = 0;
  let answer = 0;
  while (temp.length > 0) {
    max = Math.max(...temp);
    if (temp[0] !== max) {
      temp.push(temp.shift());
      location > 0 ? location-- : (location = temp.length - 1);
    } else {
      temp.shift();
      answer++;
      if (location === 0) return answer;
      location > 0 ? location-- : (location = temp.length - 1);
    }
  }
}
