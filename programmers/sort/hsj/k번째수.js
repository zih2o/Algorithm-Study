function solution(array, commands) {
    let answer = [];
    for (let i = 0; i < commands.length; i++) {
        let start = commands[i][0] -1;
        let end = commands[i][1];
        let n = commands[i][2]-1;
        
        let arr = array.slice(start, end)
        arr.sort((a,b) => a-b)
        answer.push(arr[n])
    }
    return answer;
}