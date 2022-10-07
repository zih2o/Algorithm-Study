from collections import deque
def solution(maps):
    answer = 1
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    
    c=len(maps[0])
    r=len(maps)
    queue = deque()
    queue.append([0,0])
    
    while queue:
        y, x = queue.popleft()
        for i in range(4):
            tx = x + dx[i]
            ty = y + dy[i]
            if 0 <= tx < c and 0<= ty < r and maps[ty][tx] <= answer and maps[ty][tx] == 1:
                queue.append([ty, tx])
                maps[ty][tx] = maps[y][x] + 1
    if maps[-1][-1] < 2:
        return -1
    return maps[-1][-1]