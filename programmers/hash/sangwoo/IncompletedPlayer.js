// 문제에서 요구하는 것은 completion에 들어가지 못하는 participant 내에 하나의 Data
// participant와 completion이 순서가 정렬이 되어 있다면 비교 연산만으로도 한번 순환을 거치면 바로 도출이 가능
// n개의 participant이고 n-1개의 participant로 구성된 completion이므로 정렬을 하게 되면 하나의 요소를 제외하고서는 순서가 동일
function solution(participant, completion) {
    participant = participant.sort();
    completion = completion.sort();
    var answer = '';

    for(let i=0;i<completion.length;i++)
        if(participant[i]!=completion[i])
            return participant[i];
            // 즉 같은 인덱스에서 비교했을때 서로 값이 다르다면 그 때의 participant[i]가 incompleted player. 

    return participant[participant.length-1];
    //n-1개의 인덱스에서 모두 값이 같다면 participant의 맨 마지막 요소가 incompleted player

}