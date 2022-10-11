// idx만 따로 보관하는 리스트(indexlist)를 만들어서 priorities[]가 계속 움직일때 같이 움직이도록 하면 직관적으로 문제해결이 가능.
// 우선순위가 높은 순서대로 stack에 보관하게 됨.
function solution(priorities, location) {
    var answer = 0;
    let stack = [];
    let indexlist = [];
    // index를 담은 리스트 초기화
    for(let a in priorities)
        indexlist.push(Number(a));

    let MaxPriority = Math.max(...priorities);
    
    while(priorities.length){
        let doc = priorities.shift(); // forward item get
        let idx = indexlist.shift(); // forward item get
        if(doc == MaxPriority){ 
            stack.push(idx);
            MaxPriority = Math.max(...priorities);
            // idx 값을 스택에 넣어서 몇번째 idx값이 들어갔는지 정리
        }
        else{ // item을 맨뒤로 push
            priorities.push(doc);
            indexlist.push(idx);
        }
    }
    //console.log(stack);
answer=stack.indexOf(location)+1; // stack의 idx는 0부터 시작하므로 + 1
    return answer;
}