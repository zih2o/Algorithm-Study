def solution(numbers, target):
    cnt = 0

    def dfs(arr, result):
        if not arr:
            if result == target:
                nonlocal cnt
                cnt += 1
            return 0
        real = arr[:]
        num = real.pop()
        dfs(real, result + num)
        dfs(real, result - num)

    dfs(numbers, 0)
    return cnt


# nonlocal과 global!
