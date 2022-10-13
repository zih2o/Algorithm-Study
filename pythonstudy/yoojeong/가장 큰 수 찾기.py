def solution(array):
    answer = []
    max=0
    
    for i in array:
        if i>max:
            max=i
            
    answer.append(max)
    answer.append(array.index(max))
    return answer
