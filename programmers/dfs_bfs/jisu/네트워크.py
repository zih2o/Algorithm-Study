def solution(n, computers):
    visited = []

    def dfs(i):
        if i in visited:
            return
        visited.append(i)
        for j in range(n):
            if computers[i][j] == 1 and j not in visited:
                dfs(j)

    cnt = 0
    for i in range(n):
        if i not in visited:
            dfs(i)
            cnt += 1
    return cnt


# 처음으로 dfs 호출한 곳에서 cnt++ => route 당 한번의 계산!
