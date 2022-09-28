def solution(citations):
    citations.sort(reverse=True)
    n = len(citations)
    
    max_h = 0
    for i in range(len(citations)):
        h = min(i+1, citations[i])
        if h > max_h:
            max_h = h
 
    return max_h