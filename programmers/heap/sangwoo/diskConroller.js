// heap에 대한 자료구조를 활용하는 것에 대해서 접근이 되지 않아서 다른 이가 작성한 코드를 참고해서 문제해결
// heap이라는 자료구조는 이진탐색트리의 일종으로 가장 작은수, 가장 큰 수를 찾기에 최적의 이진트리
// 우선순위 큐를 구현하는데도 이 자료구조를 활용함

function solution(jobs) {
    var answer = 0;
    let j=0;
    let time = 0;
    let priorityQue = []; // 우선순위 리스트. 실제 heap 구조로 우선순위 queue를 구현한 건 X
    
    jobs.sort((a,b)=>a[0]-b[0]); // 작업이 들어온 시간별로 정렬
    
    while(j<jobs.length || priorityQue.length != 0){
        if(j<jobs.length && time >= jobs[j][0]){// 없는 데이터(undefined인 데이터에) 배열로 접근하려고 해서 발생. 
            // j<jobs.length라는 검증하는 조건을 같이 붙여줘야 비동기처리로 undefined일때 실행되는것을 막아줌
            priorityQue.push(jobs[j]); 
            priorityQue.sort((a,b)=>a[1]-b[1]); // 한 작업이 실행되는 time 안에서 들어오는 작업들 중에 작업시간이 짧은 순서로 재정렬
            j++;
            continue;
        }
        
        if(priorityQue.length != 0){
            time += priorityQue[0][1];
            answer += time - priorityQue[0][0];
            priorityQue.shift();
        }
        else
            time = jobs[j][0];
    }
    
    // console.log(jobs);
    
    
    
    
    
    
    return Math.floor(answer/jobs.length);
}