def solution(answers):
    patterns = [(1, 2, 3, 4, 5),
               (2, 1, 2, 3, 2, 4, 2, 5),
               (3, 3, 1, 1, 2, 2, 4, 4, 5, 5)]
    
    scores = [0, 0, 0]
    
    for num, answer in enumerate(answers):
        for i in range(3):
            if answer == patterns[i][num%len(patterns[i])]:
                scores[i] += 1
    
    result = []
    for i, score in enumerate(scores):
        if score == max(scores):
            result.append(i+1)
            
    return result