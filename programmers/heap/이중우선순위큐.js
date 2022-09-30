function solution(operations) {
  var answer = [];
  const dpQ = [];
  let isSorted = false;

  for (let i = 0; i < operations.length; i++) {
    const [operation, number] = operations[i].split(" ");
    if (operation === "I") {
      dpQ.push(parseInt(number));
      isSorted = false;
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
  if (dpQ.length > 0) {
    answer = [dpQ[dpQ.length - 1], dpQ[0]];
  } else {
    answer = [0, 0];
  }
  return answer;
}
