# 1트 : 효율성 실패

def solution(prices):
    ans = []
    l = len(prices)
    for i, prev in enumerate(prices):
        if i == l-1:
            ans.append(0)
            break
        for j, now in enumerate(prices[i+1:]):
            if prev > now or j == l-i-2:
                ans.append(j+1)
                break
    return ans

# 2트 : 효율성 왜 성공?..


def solution(prices):
    ans = []
    l = len(prices)
    for i, prev in enumerate(prices):
        if i == l-1:
            ans.append(0)
            break
        for j in range(i+1, l):
            now = prices[j]
            if prev > now or j == l-1:
                ans.append(j-i)
                break
    return ans
