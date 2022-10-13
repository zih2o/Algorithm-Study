def solution(numbers):
    answer = 0
    a=sorted(numbers)
    answer=(a[len(numbers)-1])*(a[len(numbers)-2])
    
    return answer
