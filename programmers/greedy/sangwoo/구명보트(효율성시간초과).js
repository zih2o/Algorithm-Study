// 효율성 시간초과 발생 코드 
function solution(people, limit) {
    var answer = 0;
    people = people.sort((a,b)=>a-b).map(v=>Number(v));
    // console.log(people);
    let totalWeight = 0;
    // let stack = [];
    
   while(people.length){
       let index = -1;
        // console.log(people, " people리스트");
    let DefaultN = people.shift();
       answer++;
       // console.log(people, "people pop 이후 리스트 변화 보기");
    for(let i =0; i < people.length ; i++){
        if(DefaultN + people[i] > limit){
             // console.log(index + "위치의 원소와 pop 진행");
            people = remove(i-1,people);
            break;
            }
        else index = i;
        
        if(i== people.length -1){
            people.pop();
            // answer++;
            }
        }
    }
    return answer;
    
      
function remove(idx,arr){
    if(idx == -1){
        // answer++;
        return arr;
    }
    if (idx == arr.length -1){
    arr.pop();
    // answer++;
    return arr;
    }
  
    if(idx == 0){
        arr.shift();
        // answer++;
        return arr;
    }
    
    if(idx != arr.length -1){
    arr = arr.slice(0,idx).concat(...arr.slice(idx+1));
    // answer++;
    return arr;
        }
    }
    
}

 
    