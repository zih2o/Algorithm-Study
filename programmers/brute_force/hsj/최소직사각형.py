def solution(sizes):
    sizes = [sorted(size, reverse=True) for size in sizes]

    return max(sizes)[0] * max(sizes, key = lambda x:x[1])[1]