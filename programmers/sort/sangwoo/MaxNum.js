//sorting함수에 콜백함수 내에서 두 개의 문자열을 산술연산하여 순서를 정하는 방식으로 구현
// 예를 들면 a=10, b=1이 있다면 문자열을  a+b = '101', b+a = '110'이다
//  (b+a) - (a+b)을 하게 되면 숫자로 구성된 문자열은 숫자처럼 연산이 가능해진다.
//  따라서 9라는 계산을 한다.
// 위 원리를 활용해서 해결가능

function solution(numbers) {
    numbers= numbers.map(v=> v+'');
     var answer = numbers.sort((a,b)=>(b+a)-(a+b)).join(""); 
     // (a+b) - (b+a) : 오름차순 정렬 | (b+a) - (a+b) : 내림차순정렬 
     // (a+b) - (b+a)로 할것이라면 .join앞에 .reverse()를 붙여서 정렬을 한번 뒤집는 것이 필요
     if(answer[0] == '0') 
         return '0';
         //answer[0]=='0'이라는 경우를 반영한 이유는 만약에 0, 0 , 0 으로 구성된 경우 아무리 정렬을 해도 앞자리 가장 큰 수는 0이므로 답은 0이 되어야 한다.
         //특이한 경우를 대비한 비교연산처리 
     else
     return answer;
 }