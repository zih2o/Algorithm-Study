function solution(people, limit) {
    var answer = 0;
    people = people.sort((a,b)=>b-a).map(v=>Number(v));
    
    for(let LN=0, RN = people.length -1;LN<=RN ; LN++){
        if(people[LN]+people[RN] <= limit) RN--;
        answer++;
    }
    console.log(answer);
    return answer;
}