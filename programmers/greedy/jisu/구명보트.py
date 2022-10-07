from collections import deque


def solution(people, limit):
    waiting = deque(sorted(people))
    boat = []
    num_boat = 0
    while waiting:
        sum_boat = 0
        while waiting and limit-sum_boat >= waiting[-1]:
            person = waiting.pop()
            boat.append(person)
            sum_boat += person
        while waiting and limit-sum_boat >= waiting[0]:
            person = waiting.popleft()
            boat.append(person)
            sum_boat += person
        num_boat += 1

    return num_boat

# 최대 두명만 탈 수 있다는 조건을 더하지 않았다
# 투포인터로 풀 수 있음
