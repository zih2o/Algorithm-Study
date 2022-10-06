import heapq


def solution(scoville, K):
    heapq.heapify(scoville)

    shake_try = 0

    while scoville:
        min1 = heapq.heappop(scoville)
        if min1 >= K:
            return shake_try
        elif not scoville:
            break
        min2 = heapq.heappop(scoville)

        new_food = min1 + min2*2
        shake_try += 1

        heapq.heappush(scoville, new_food)

    return -1

# 얼떨결에 원혁님과 함께 풀이ㅎ
