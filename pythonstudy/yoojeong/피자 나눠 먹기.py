def solution(slice, n):
    answer = 0
    
    if slice>=n:
        answer=1
    elif n%slice==0:
        answer=n//slice
    elif n%slice!=0:
        answer=(n//slice)+1
          
    return answer
