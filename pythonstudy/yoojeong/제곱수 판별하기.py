def solution(n):
    answer = 0
    a=n**(1/2)

    if a - int(a) == 0:
        answer=1
    if a - int(a) != 0:
        answer=2
        
    return answer
