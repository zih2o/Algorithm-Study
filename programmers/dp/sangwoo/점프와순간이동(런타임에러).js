function solution(n)
{
    var ans = 0;
    var dp = [0,1,1];
    
    for(let i = 3; i<=n;i++){
        if(i%2 == 0)
            dp [i] = dp[i/2]%123456789;
        else{
            dp [i] = (dp[Math.floor(i/2)]+1);
        }   
    }
      console.log(dp);
        
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    // console.log('Hello Javascript')

    return dp[n];
}