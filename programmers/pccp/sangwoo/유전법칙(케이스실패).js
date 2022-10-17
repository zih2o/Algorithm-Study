function solution(queries) {
    var answer = [];
    var arr = [];
    queries.forEach(v=>{
        if(v[0]==1)
            answer.push('Rr');
        else {arr.push(Math.pow(4,v[0]-2))
             let firstnum = arr[0];
              while(firstnum != 1){
                  arr.push(firstnum/=4);
              }
              arr.push(2);
              arr.push(1);
              let arrlen = arr.length-1;
              while(arr.len <=Math.pow(4,v[0]-2)){
              let reversed = arr.reverse().substr(0,arrlen);
              arr.push(reversed);}
              arr.push(v[0]);
              let count = 0;
              arr.reduce((acc,cur)=>{
                  if(acc <= v[1]-1){
                      count++;
                      return acc+cur;
                      }
                  return acc;
              },arr[0])
              console.log(count,' 몇번을 호출했나');
              switch(count % 4){
                  case 0: answer.push("RR");
                      break;
                  case 1: answer.push("Rr");
                      break;
                  case 2: answer.push("Rr");
                      break;
                  case 3: answer.push("rr");
                      break;
              }              
         }
        arr=[];
        
     })
    
    return answer;
}