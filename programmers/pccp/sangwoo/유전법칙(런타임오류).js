function solution(queries) {
    var answer = [];
    var arr = ['Rr',['RR','Rr','Rr','rr']];
    var list = [];
    for(let i =2;i<4;i++){
        arr[i-1].forEach(v=>{
            if(v == 'RR')
                for(let j=0;j<4;j++)
                    list.push('RR')
            if(v == 'Rr')
                {
                    list.push('RR')
                    list.push('Rr')
                    list.push('Rr')
                    list.push('rr')
                }
            if(v == 'rr')
                for(let j =0;j<4;j++)
                    list.push('rr');
    })
        arr.push(list);
        list=[];
    }
    
    for(let i =0; i<queries.length;i++){
        console.log(arr[queries[i][0] -1][queries[i][1] -1])
      answer.push(arr[queries[i][0] -1][queries[i][1] -1])
    }
    
    return answer;
}