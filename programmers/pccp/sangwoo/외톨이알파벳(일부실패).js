function solution(input_string) {
    var answer = '';
    var arr =input_string.split("")
    var alphabet = new Set(input_string)
    var filt = {}
    alphabet = [...alphabet];
    for (let k of input_string){
        if(!filt[k]) filt[k] = 0;
        filt[k]++;
    }
    for(let i in filt){
    if(filt[i]<2)
        delete filt[i];
    }
    filt = Object.entries(filt)
    
    for(let i=0;i<filt.length;i++){        
        let position = arr.findIndex(v=> v === filt[i][0])
        filt[i][1] -=1;
        let j = position;
        while(arr[j+1]==arr[j]){
            filt[i][1] -= 1;
            j++;
        }
        if(filt[i][1] > 0)
            answer += filt[i][0];
    }
    console.log(filt);
    console.log(answer);
    if(answer == '')
        answer+='N'
    answer = answer.split("").sort().join("")
    return answer
   ;
}