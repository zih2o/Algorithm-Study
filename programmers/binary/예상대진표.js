function solution(n,a,b)
{
    var answer = 0;
    while(b != a){
        b= Math.ceil(b/2);
        a=Math.ceil(a/2);
        answer++;
    }

    return answer;
}