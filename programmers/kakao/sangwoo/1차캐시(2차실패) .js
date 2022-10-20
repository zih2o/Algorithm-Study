function solution(cacheSize, cities) {
    var answer = 0;
    var citiarr = [];
    for(let i =0; i< cities.length;i++){
        let current = cities[i].toLowerCase();
     const TorF= citiarr.find(v=>v === current)
     if(!TorF){//만약 배열에 존재하지않는다면
        if(citiarr.length == cacheSize)
            citiarr.shift();
         
         citiarr.push(current);
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