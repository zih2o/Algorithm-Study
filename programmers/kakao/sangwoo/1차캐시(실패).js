//testcase 11,15,16,18,19,20 실패
function solution(cacheSize, cities) {
    var answer = 0;
    var list = {};
    
    cities = cities.map(v=>v.toLowerCase());
   
    for(let i = 0 ; i< cacheSize ; i++)
        if(!list[cities[i]]){ 
            list[cities[i]] = 1;
            answer+=5;
            }
    
    // console.log(Object.entries(list) + "초기모습");
    for(let j = cacheSize; j< cities.length; j++ ){
      var arr = Object.entries(list);
        if(!list[cities[j]]){
            if(cacheSize != 0){
           const delcity = arr.sort((a,b)=>b[1]-a[1])[0][0]
           delete list[delcity]
           list[cities[j]] = 1;
           // console.log(delcity+" 삭제 " + cities[j] + " 추가 " + " list 형태 " + Object.entries(list) );
           }
           answer+=5;
        }
        else {
            // console.log("hit " + cities[j] + ' 1추가')
            list[cities[j]]++;
            answer++;
        }
    }
    
    
   
    return answer;
}