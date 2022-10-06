# 효율성 실패
from collections import deque


def solution(number, k):
    l = list(number)
    cnt = 0
    while True:
        if cnt == k:
            break
        for num in l:
            if num == "9":
                continue
            l2 = l[:]
            l2.remove(num)
            if num == "1" or "".join(l) < "".join(l2)+"0":
                l = l2[:]
                cnt += 1
                break
    return "".join(l)

# deque로 수정


def solution(number, k):
    num_dq = deque(number)
    res = [num_dq.popleft()]
    while num_dq:
        v = num_dq.popleft()
        while res and res[-1] < v and k != 0:
            res.pop()
            k -= 1
        res.append(v)
        while (not num_dq) and (k != 0):
            res.pop()
            k -= 1
    return ''.join(res)
