function solution(n, k) {
    /*
   var arr= [];
    
      for (let i =0; i<= n+1 ; i++){
        arr.push(true);
    }
    
    for(let i = 2; i*i <=n ; i++){
        if(arr[i]){
            for(let j = i*i; j<=n; j+=i){
                arr[j] = false;
            }
        }
    }
    arr.splice(0,2,false,false);
   */
    
    var answer = 0;
   n.toString(k).split('0').reduce((acc,cur)=>{
       if(cur != '' && cur != '1')
           acc.push(cur);
       return acc;
   },[]).map(v => Number(v)).forEach(v => {
       // if(arr[v])
          if(isPrime(v))
           answer++;
       return v;
   });
    return answer;
}
/* 이 경우는 테스트 1번에서 시간초과 발생.. 테스트 1번이 확실히 값이 커서 계산하는데 오래 걸림.
function isPrime(n){
     if(n <= 1)
        return false;
    
     if(n == 2){
        return true;
        }
    
    for(let i =2;i<n;i++)
    {  
        if(n%i == 0)  return false;
        if(i == n-1) return true;    
    }
}
*/




function isPrime(num){
    if(num <= 1)
        return false;
    
    for(let i = 2; i<=Math.sqrt(num);i++)
        if(num % i == 0)
            return false;

    return true;
}



  
