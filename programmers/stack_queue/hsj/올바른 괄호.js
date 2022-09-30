function solution(s) {
    let stack = 0;

    for(let i = 0; i < s.length; i++) {
        if (s[i] ==='('){
            stack += 1;

        }
        else{
            if (stack ===0) {
                return false;
            }
            else{
                stack -= 1;
            }
        }
    }
    return stack ===0
}