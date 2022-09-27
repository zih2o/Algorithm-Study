def solution(nums):
    cnt = len(nums)
    keys = len(set(nums))
    return keys if keys <= cnt/2 else cnt/2


# 삼항연산보다 min 값 쓰는게 더 간결하다!
