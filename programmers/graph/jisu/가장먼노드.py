# 테케 7~9 시간초과..거꾸로 푼게 문제인듯? 그리고 배열에서 in 은 매우 느리니 dict를 쓰도록 하자.

from math import inf
from collections import defaultdict, Counter
from heapq import heappush, heappop


def solution(n, edge):
    graph = defaultdict(list)
    for start, end in edge:
        graph[start].append(end)
        graph[end].append(start)
    ans = []
    for num in range(2, n+1):
        Q = [(0, num)]
        visited = []
        while Q:
            dist, start = heappop(Q)
            if start in visited:
                continue
            visited.append(start)
            if start == 1:
                ans.append(dist)
                break
            for end in graph[start]:
                heappush(Q, (dist+1, end))
    return Counter(ans)[max(ans)]

# 거꾸로 접근해서 도착이 1일때 리턴하도록하면 1과 연결도 안된 노드까지 계산해서 느려지는듯하다
# 문제에서 제시한 방향대로 풀이했더니 통과


def solution(n, edge):
    graph = defaultdict(list)
    for start, end in edge:
        graph[start].append(end)
        graph[end].append(start)
    dist = [inf]*n

    Q = [(0, 1)]
    while Q:
        cost, start = heappop(Q)
        if dist[start-1] <= cost:
            continue
        dist[start-1] = cost
        for end in graph[start]:
            heappush(Q, (cost+1, end))
    return Counter(dist)[max(filter(lambda x: x != inf, dist))]
