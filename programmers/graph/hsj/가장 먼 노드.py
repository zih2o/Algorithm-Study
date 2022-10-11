from collections import deque

def solution(n, edge):
    answer = 0
    route = [0]*(n+1)
    edge.sort()
    queue = deque()
    graph = [[] for i in range(n+1)]
    
    for i, j in edge:
        graph[i].append(j)
        graph[j].append(i)
    queue.append(1)
    route[1] = 1
    
    while queue:
        now = queue.popleft()
        for i in graph[now]:
            if route[i] == 0:
                route[i] = route[now] + 1
                queue.append(i)
            
    return route.count(max(route))