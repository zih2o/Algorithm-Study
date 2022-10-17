function solution(ability) {
    var diff = [];
    var cols=[];
    var col = [];
    const Athletes = ability[0].length;
    const people = ability.length;
    var answer =[];
    let count = 0;
    
    while(count != Athletes){
    for(let i =0;i<Athletes;i++){
        for(let j =0; j<people;j++){
            col.push(ability[j][i]);
        }
      let l = col.reduce((acc,cur)=>{
          acc.push(cur);
          return acc;
      },[]).sort((a,b)=>b-a);
        console.log(l[l.length-1] + 'l의 맨 마지막 값');
         diff.push(l[0]-l[1] + l[0]-l[l.length-1]);
        // console.log(l);
        cols.push(col);
        col =[];
    }
    let posy = (diff.indexOf(Math.max(...diff)));
    
    answer[posy] = (Math.max(...cols[posy]));
    count++;
    let posx = cols[posy].indexOf(Math.max(...cols[posy]));
    for(let i=0;i<Athletes;i++){
        ability[posx][i] = 0;
    }
    for(let i =0; i<people;i++){
        ability[i][posy] = 0;
    }
        cols=[];
        diff=[];
    }
        answer = answer.reduce((acc,cur)=>acc+=cur,0)
    return answer;
}
  