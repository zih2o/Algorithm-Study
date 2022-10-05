function solution(operations) {
  var answer = [];
  //1.이중우선순위큐가 될 배열을 선언한다.
  const dpQ = [];
  let isSorted = false;
  //2.연산 명령어를 순회하며 삽입 명령과 삭제 명령을 수행한다.
  for (let i = 0; i < operations.length; i++) {
    const [operation, number] = operations[i].split(" ");
    //2-1. 삽입 명령 시, 배열에 값을 추가한다.
    if (operation === "I") {
      dpQ.push(parseInt(number));
      isSorted = false;
      //2-2. 삭제 명령 시, 배열을 정렬하여 최대값 or 최소값을 삭제한다.
    } else {
      if (!isSorted) {
        dpQ.sort((a, b) => a - b);
      }
      if (number === "1") {
        dpQ.pop();
      } else {
        dpQ.shift();
      }
    }
  }
  if (!isSorted) {
    dpQ.sort((a, b) => a - b);
  }
  //3. 모든 명령어를 수행한 이중우서순위큐의 결과를 반환한다.
  if (dpQ.length > 0) {
    answer = [dpQ[dpQ.length - 1], dpQ[0]];
  } else {
    answer = [0, 0];
  }
  return answer;
}
