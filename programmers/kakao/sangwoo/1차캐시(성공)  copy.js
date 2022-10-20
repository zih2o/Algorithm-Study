function solution(cacheSize, cities) {
    var answer = 0;
    var citiarr = [];
    for(let i =0; i< cities.length;i++){
        let current = cities[i].toLowerCase();
     const TorF= citiarr.find(v=>v === current)
     if(!TorF){//만약 배열에 존재하지않는다면
           citiarr.push(current);
        if(citiarr.length > cacheSize) // cachesize가 0일때 여기서는 일단 넣어주고서 빼주는 방식을 활용 
            citiarr.shift();
         
         answer+=5;
     }
     else{
        citiarr = citiarr.filter(v => v !== current);
        citiarr.push(current)
        answer++;
     }    
         
    }
    
        
    
    return answer;
}


/*
function solution(cacheSize, cities) {
    var answer = 0;
    var citiarr = [];
    for(let i =0; i< cities.length;i++){
        let current = cities[i].toLowerCase();
     const TorF= citiarr.find(v=>v === current)
     if(!TorF){//만약 배열에 존재하지않는다면
            
        if(citiarr.length >= cacheSize && cacheSize != 0) // 캐시사이즈가 0일때는 아무 연산이 안 되게끔
            citiarr.shift();
         
         if(cacheSize != 0) 
         citiarr.push(current);
         answer+=5;// cachesize가 0이면 그냥 answer만 늘어나는 형태가 됨.
     }
     else{
        citiarr = citiarr.filter(v => v !== current);
        citiarr.push(current)
        answer++;
     }    
         
    }
    
        
    
    return answer;
}

*/