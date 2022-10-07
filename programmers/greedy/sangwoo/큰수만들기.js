// 그리디 알고리즘은 다시 공부를 해봐야 할 필요가 있음.
// 스택을 활용해서 앞 자리에 있는 값이 뒷 자리에 값보다 작으면 제거하는 방식으로 구현
function solution(number, k) {
    var answer = [];
   
    for(let i=0;i<number.length;i++){
        let num = number[i];
        while(k>0 && answer[answer.length-1] < num){
            answer.pop(num);
            k--;
        }
         answer.push(num);   
    }
    
    if(k){
       answer= answer.slice(0,answer.length-k);
    }
    // console.log(answer.join(''));
    return answer.join('');

}

/* 테스트 10번 시간초과 코드
function solution(number, k) {
    var answer = '';
    var arr = number.split("");
    for(let i =0;i<arr.length-1;i++){
       if(Number(arr[i])*(arr.length-i) <= Number(arr[i+1])*(arr.length-(i+1))){
           // console.log(arr[i], arr[i+1]);
        arr.splice(i,1);
        i=-1;
        k--;
        }
        if(k==0)
            break;
    }
   
    if(k){
      arr =  arr.slice(0,arr.length-k);
     
    }
    return String(arr.join(''));

}

*/