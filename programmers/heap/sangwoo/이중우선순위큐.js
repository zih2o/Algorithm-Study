// 문제에서 요구하는대로 문자를 분해하고 조립하면서 연산하면 풀이 가능
function solution(operations) {
    var answer = [];
    let priorityQue = []; // 우선순위 큐를 구현한 것이 아니라 리스트로 대체
    console.log(operations);
    
    for(let i =0; i<operations.length;i++){
        let value = operations[i].split(" "); 
        if(value[0] == 'I')
        {
            priorityQue.push(value[1]);
            priorityQue.sort((a,b)=>a-b);
        }    
        else if(value[0] == 'D'){
            if(priorityQue.length == 0);
            else if(value[1] == "1")
                priorityQue.pop();
            else
                priorityQue.shift();
        } 
            
    }
    
    if(priorityQue.length == 0)
        answer = [0,0];
    else
        answer = [Number(priorityQue[priorityQue.length-1]),Number(priorityQue[0])];
    return answer;
}