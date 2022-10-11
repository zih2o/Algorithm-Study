# 처음에 시간초과나서 visited = [], if elem in visited: 방법으로 조회했던것을
# visited[node] 방식으로 조회하는 방법으로 바꿨다
# bfs 라고 느껴지는 문제
from collections import defaultdict
from heapq import heappush, heappop


def solution(n, paths, gates, summits):
    path_dict = defaultdict(list)
    gates = set(gates)
    summits = set(summits)
    for i, j, w in paths:
        path_dict[i].append((j, w))
        path_dict[j].append((i, w))
    result = []
    visited = [10000001]*n
    for gate in gates:
        Q = [(0, gate)]
        while Q:
            intensity, start = heappop(Q)
            if start in summits:
                result.append([start, intensity])
                continue
            if visited[start - 1] <= intensity:
                continue
            visited[start - 1] = intensity
            for end, time in path_dict[start]:
                if end not in gates:
                    heappush(Q, (max(intensity, time), end))
    return sorted(result, key=lambda x: (x[1], x[0]))[0]
