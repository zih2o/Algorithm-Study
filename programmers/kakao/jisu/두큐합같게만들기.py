# 처음에 루프 빠져나오는 기준을 너무 빡빡하게 잡아서 테케 1번만 실패함

from collections import deque


def solution(queue1, queue2):
    deque1 = deque(queue1)
    deque2 = deque(queue2)
    total1 = sum(deque1)
    total2 = sum(deque2)
    total = total1+total2
    if total % 2 != 0:
        return -1
    if total1 == 0 and total2 == 0:
        return 0
    cnt = 0
    while total1 != total2 and cnt < len(queue1)*3:
        if total1 > total2:
            e = deque1.popleft()
            deque2.append(e)
            total1 -= e
            total2 += e
        else:
            e = deque2.popleft()
            deque1.append(e)
            total1 += e
            total2 -= e
        cnt += 1
    if cnt == len(queue1)*3:
        return -1
    return cnt
