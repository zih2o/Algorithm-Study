from collections import deque


def solution(nums):
    num_set = set()
    ans = set()

    def dfs(arr, prev):
        if not arr:
            pass
        for e in arr:
            new = arr[:]
            new.remove(e)
            prev.append(e)
            num_set.add("".join(prev))
            dfs(new, prev)
            prev.pop()
    dfs(list(nums), [])
    num_list = list(map(lambda x: int(x), list(num_set)))
    print(num_list)
    for num in num_list:
        if num < 2:
            continue
        i = 2
        while True:
            if num % i == 0:
                break
            i += 1
        if i == num:
            ans.add(num)
    return len(ans)

# dfs 직접구현하지 않고 permutation 이용하자
# 소수판별 직접 하지말고 에라토스테네스 체 이용!!!
