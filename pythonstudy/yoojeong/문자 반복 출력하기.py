def solution(my_string, n):
    answer = ''
    
    str_arr=list(my_string);
    
    for i in str_arr:
        answer+=i*n
    
    return answer
