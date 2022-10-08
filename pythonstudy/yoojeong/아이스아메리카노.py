def solution(money):
    answer = []
    
    

    americano=money//5500
    change=money%5500
    
    answer.insert(0,americano)
    answer.insert(1,change)
    
    
    return answer
