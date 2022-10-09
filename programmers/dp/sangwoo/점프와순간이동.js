function solution(n)
{
    var ans = 0;
    var dp = [0,1,1];
    
    while(n>2){
            if(n%2 ==0)
                n/=2;
            else{
                ans++;
                n = Math.floor(n/2);
            }
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    // console.log('Hello Javascript')

    return ans+1;
}