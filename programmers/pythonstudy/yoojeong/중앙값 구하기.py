def solution(array):
    answer = 0
    array.sort()
    
    a=len(array)
 
    b=int(a/2+1)
  
    answer=array[b-1]

    return answer
