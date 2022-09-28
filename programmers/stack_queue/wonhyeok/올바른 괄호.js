function solution(s){
    var stack = 0;
    
    for(x of s) {
        if (x == "("){
            stack += 1; 
        }
        else {
            if (stack == 0){
                return false;
            }
            stack -= 1;
        }
    }
    if (stack != 0) {
        return false;
    }
    
    return true;
}
