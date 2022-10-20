function solution(arr1, arr2) {
    var row = arr1.length;
    var col = arr2[0].length;
    var iter = arr2.length;
    var prod = [];
    var answer = [];
    let sum = 0;
    
    for(let i =0; i<row;i++){
        for(let j =0; j<col;j++){
            for(let k =0; k<iter;k++)
            sum += arr1[i][k]*arr2[k][j]    
            prod.push(sum);
            sum=0;
        }
        answer.push(prod);
        prod=[];
    }
        
    
    
    return answer;
}