

function solution(array, commands) {
    var answer = [];
    
    for(var i=0; i<commands.length; i++){
        var list = array.slice(commands[i][0]-1, commands[i]
        							[1]).sort((a,b)=>{return a-b}); // i부터 j까지 slice 한 뒤 올림차순으로 정렬
        
        answer.push(list[commands[i][2]-1]); // slice 한 배열의 k번째 수 answer에 push
    }

    return answer;
}
