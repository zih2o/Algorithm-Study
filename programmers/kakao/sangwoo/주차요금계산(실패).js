//실패

function solution(fees, records) {
    const MAXTIME = 60*24-1
    console.log(MAXTIME);
    var answer = [];
    var list = {};
    var totalfee = {};
    records = records.map(v=>v.split(" ")).map(v=>{
        v[0]=v[0].split(":")[0]*60+v[0].split(":")[1]*1;
        if(!list[v[1]])
            list[v[1]]=-1;
        if(!totalfee[v[1]])
            totalfee[v[1]]=0;
        return v;
    })
    // console.log(list)
    
    for(let i =0; i<records.length;i++){
        if(records[i][2] == 'IN')
            list[records[i][1]] = records[i][0];
        
        if(records[i][2] == 'OUT'){
           let time = records[i][0] - list[records[i][1]]
            totalfee[records[i][1]] += time;
            list[records[i][1]] = 0;
        }     
    }
    
   console.log(list);
   
    
    for (let i in list){
        if(list[i] == -1){
             let time3 = MAXTIME - list[i]
             console.log(i +'이게 초기에 설정하고서 한번도 안 나간차');
            totalfee[i] += time3;
         }
        else if(list[i] != 0 ){
            let time2 = MAXTIME - list[i]
            totalfee[i] += time2;
            }
    }
    
    console.log(totalfee);
    
    // console.log(obj);
    // console.log(records);
    // console.log(totalfee)
    return answer;
}