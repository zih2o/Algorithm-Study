def solution(n):
    answer=0
    
    n_str=str(n)
    n_arr=list(n_str)
    
    for i in n_arr:
        answer+=int(i)
    
    return answer
