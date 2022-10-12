function solution(fees, records) {
    const MAXTIME = 60*24-1
    console.log(MAXTIME);
    var answer = [];
    var list = {};
    var totalfee = {};
    var count = {};
    records = records.map(v=>v.split(" ")).map(v=>{
        v[0]=v[0].split(":")[0]*60+v[0].split(":")[1]*1;
        if(!list[v[1]]) list[v[1]]=0;
        if(!totalfee[v[1]]) totalfee[v[1]]=0;
        if(!count[v[1]]) count[v[1]]=0;
        return v;
    })
    // console.log(list)
    
    for(let i =0; i<records.length;i++){
        if(records[i][2] == 'IN'){
            list[records[i][1]] = records[i][0];
            count[records[i][1]]++;
        }    
        if(records[i][2] == 'OUT'){
           let time = records[i][0] - list[records[i][1]]
            totalfee[records[i][1]] += time;
            list[records[i][1]] = 0;
            count[records[i][1]]++;
        }     
    }
    
    for(let i in count){
        if(count[i] % 2 != 0){
          totalfee[i] += MAXTIME-list[i]
          count[i]++;
        }
    }
    
    for(let k in totalfee){
        if(totalfee[k] > fees[0])
            {
                totalfee[k] = fees[1] + Math.ceil((totalfee[k]-fees[0])/fees[2])*fees[3];
            }
        else
            totalfee[k] = fees[1]
    } 
    // console.log(totalfee);
    console.log(Object.entries(totalfee).sort((a,b)=>a[0]-b[0]).flat().reduce((acc,cur,idx)=>{
        if(idx%2 == 1)
         acc.push(cur);
        return acc;
    },[]))
   answer = Object.entries(totalfee).sort((a,b)=>a[0]-b[0]).flat().reduce((acc,cur,idx)=>{
        if(idx%2 == 1)
         acc.push(cur);
        return acc;
    },[])
    return answer;
}