import math

def solution(progresses, speeds):
    queue = [math.ceil((100-x)/y) for x, y in zip(progresses, speeds)]
    
    last_work = queue[0]
    deadlock = 1
    answer = []
    
    for now in queue[1:] + ['end']:
        if not now == 'end' and last_work >= now:
            deadlock += 1
        else:
            answer.append(deadlock)
            last_work = now
            deadlock = 1

    return answer