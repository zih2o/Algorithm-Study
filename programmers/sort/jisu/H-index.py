def solution(citations):
    sorted_c = sorted(citations, reverse=True)
    for i, e in enumerate(sorted_c):
        if e == (i+1):
            return i+1
        elif e < i+1:
            return i
        elif i == len(sorted_c) - 1:
            return i+1

# 문제 규칙 찾는게 먼저! testcase 하나하나에 연연하지 말고 큰 flow를 먼저 찾기
