from heapq import *

def solution(scoville, K):
    count = 0
    heapify(scoville)
    while (scoville[0] < K and len(scoville) > 1):
        a1 = heappop(scoville)
        a2 = heappop(scoville)
        heappush(scoville, a1 + a2*2)
        count += 1
    return count if scoville[0] >= K else -1