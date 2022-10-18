// 엄청난 양의 배열을 다 만들다보니 런타임 오류 발생하는 것으로 추정
function solution(n, left, right) {
    var answer = [];
    let count = 0;    
    let level =1;
  
    while(level<=n){
    while(count < level){
        answer.push(level);
        count++;
    }
    if(level != n)
    for(let i = level+1; i<=n;i++)
    answer.push(i);
        
    count = 0;
    level++;    
    }
   
    // console.log(answer);
    return [1];
}