// 이 문제를 접근 할 때에는 남은 작업량(rest_Progresses)에 대해서 작업이 마무리 되는 일수(spended_Days)을 파악하고서 그 리스트 안에서 
// idx 에 들어있는 값이 큰 것이 앞에 있으면 그 뒤따르는 idx에 들어있는 값들은 
// 더 큰 idx에 들어있는 값이 오기 전까지는 count 한다고 접근하면 된다. 

// 문제 접근법
// 1. 각 작업에 드는 시간소요를 리스트로 만든다.
// 2. 시간소요 리스트를 처음부터 끝가지 돌면서 앞에 있는 것보다 
// 3. 큰 것이 오기전까지 item에 대해서 count를 증가 
// 가지고 있던 값보다 더 큰 값을 만나게 되면 쌓였던 count값을 answer에 push.
// 4. 마지막에 count는 되었지만 리스트의 끝까지 가버려서 이후 비교연산 작업이 없어서 끝날 수 있다.
// 작업이 끝나는 경우에 대한 경우에는 쌓인 count를 answer에 push

function solution(progresses, speeds) {
    var answer = [];
    let rest_Progresses = progresses.map(value=>100-value); // 남은 작업량
    let spended_Days = speeds.map((value,idx)=>{ 
        // speed와 progresses는 상호보완적인 리스트, 같은 인덱스에 대해서 관련된 정보를 담고있으므로 speeds의 idx로 그에 대응하는 progresses에 item에 접근가능 
        if(rest_Progresses[idx]%value == 0) 
            return rest_Progresses[idx]/value;
        else // 위 speed로 남은 작업 완료 시 하루 더 소요
            return Math.floor(rest_Progresses[idx]/value)+1; 
    });
    // console.log(rest_Progresses);
    console.log(spended_Days);
    let Max = spended_Days[0];
    let count =1;
    for(let i =1;i<spended_Days.length;i++){
        if(spended_Days[i]<=Max){
            count++;
        }
        else{
            answer.push(count);
            Max = spended_Days[i];
            count = 1;
        } 
    }
    if(count != 0)
        answer.push(count);
    //for문 종료 이후 쌓여있던 count 값 push
    return answer;
}


// ** testCase **
// progresses = [95,90,99,99,80,99];
// speeds = [1,1,1,1,1,1];
// let val = solution(progresses,speeds);
// console.log(val);