def solution(s):
    cnt = 0
    l = list(s)
    while l:
        char = l.pop()
        if char == "(":
            cnt -= 1
        else:
            cnt += 1

        if cnt < 0:
            return False

    return cnt == 0
