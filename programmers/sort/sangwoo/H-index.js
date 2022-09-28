// 개념이 어려운 문제.
// H-index : 연구자의 연구성과를 평가하기 위한 지표
/*
h-index 산출 방법(출처 : https://hanyang-kr.libguides.com/c.php?g=717952)
1. 해당 연구자의 발표 논문을 피인용횟수가 많은 순으로 정렬합니다. 피인용횟수가 높은 순으로 번호를 부여합니다.

2. 논문의 번호(No)와 피인용횟수를 비교하여 피인용횟수가 논문의 번호(No)보다 같거나 큰 번호(No)가 연구자의 h-index가 됩니다. 
No | 논문명  | 인용횟수
1  |  논문A  |   53
2  |  논문B  |   26
3  |  논문C  |   20
4  |  논문D  |   13
5  |  논문E  |   10
6  |  논문F  |   4
7  |  논문G  |   2

3. 위 예에서 번호(No)보다 피인용횟수가 낮아지는 6순위 바로 위의 5순위가 h-index가 됩니다.

4. 이 값의 의미는, 해당 저자가 발표한 논문 중 5개의 논문이 적어도 각 5번 인용되었다는 의미입니다.
*/
function solution(citations) {
    var arr = citations.sort((a,b)=>{
        if(a>b)return -1;
        if(a==b)return 0;
        if(a<b)return 1;
    }); // reverse()를 안해도 되도록 내림차순정렬
    console.log(arr);
    var count =0;
    var answer = 0;
    for(let i=0;i<arr.length;i++){// index가 0부터 시작하는 부분이어서 위 원리에서 혼동할 수 있으니 유의!
        if(arr[i]>=i+1) // i+1은 위에 No를 표기해주기위해서 표시한 것.
            answer++;
    }
    
    
    return answer;
}
/* test Code
arr=[53,26,20,13,10,6,2];
console.log(solution(arr)+"가 index 값입니다");
*/