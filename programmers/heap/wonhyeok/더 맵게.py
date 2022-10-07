import heapq

def solution(scoville, K):
    heapq.heapify(scoville)
    
    shake_try = 0
    factor = 0
    
    while len(scoville) >= 2:
        min1 = heapq.heappop(scoville)
        min2 = heapq.heappop(scoville)
        new_food = min1 + min2*2 
        shake_try += 1
        
        if new_food >= K:
            return shake_try
        
        heapq.heappush(scoville, new_food)
    
    return -1