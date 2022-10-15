function solution(s) {
    var answer = 0;
    var stack = [];
    let arr = s.split("");
    console.log(arr)
    
    function rightCover(arr){
for(let i =0;i <arr.length;i++){
    // console.log(arr,"rightCover func")
 if(arr[i] == '{' || arr[i] == '[' || arr[i] == '('){
     stack.push(arr[i]);
     console.log('push 해줌',arr[i]);
 }
 else if(arr[i] == '}' || arr[i] == ']' || arr[i] == ')'){
            var chars = stack.pop();
            console.log('POP호출',chars);
    
     switch(chars){
         case '{':
             if(arr[i] == '}'){
                 continue;
                 break;
             }
             else{console.log('{} 불일치')
                  return false;
                 }
             
         case '(':
                if(arr[i] == ')'){
                 continue;
                 break;
             }
             else{console.log('() 불일치')
                  return false;
                 }
             
             
         case '[':
                if(arr[i] == ']'){
                 continue;
                 break;
             }
             else{console.log('[] 불일치')
                  return false;
                 }
         default:
             return false;

     }
     
     
   
  }
}
if(stack.length != 0){
    stack=[];
    return false;
    }
else {
    return true;
      stack=[];
     }
 }
       
    for(let j = 0;j<s.length;j++){
    if(rightCover(arr)){
        console.log("양호함")
        answer++;}
    let item = arr.shift();
        console.log(item+" 을 맨 뒤로 보냄");
    arr.push(item);
        console.log(arr+" arr 형태");
    }
    return answer;
}

