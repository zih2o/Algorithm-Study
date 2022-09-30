from collections import deque
def solution(prices):
    prices = deque(prices)
    answer = []

    while prices:
        p = prices.popleft()
        time = 0
        for i in prices:
            time += 1
            if i < p:
                break
        answer.append(time)
    return answer