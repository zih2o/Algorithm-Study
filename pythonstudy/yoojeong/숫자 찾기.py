def solution(num, k):
    answer = -1
    arr=[]
    a=list(str(num))
    
    for i in a:
         arr.append(int(i))
            
    for i in arr:
        if i==k:
            answer=arr.index(k)+1
            break
            
            
    return answer
