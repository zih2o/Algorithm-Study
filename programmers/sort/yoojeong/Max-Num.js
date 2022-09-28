
function solution(numbers) {
    numbers= numbers.map(x=> x+''); // 스트링으로 변경
     var answer = numbers.sort((a,b)=>(b+a)-(a+b)).join(""); // 숫자처럼 연산이 가능해지므로 내림차순으로 정렬 후 join
     if(answer[0] == '0') {
         return '0'; // 배열 내 숫자가 전부 0일 경우
     } else return answer;
 }
