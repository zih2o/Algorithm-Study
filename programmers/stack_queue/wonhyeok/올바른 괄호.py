def solution(s):
    stack = 0
    for x in s:
        if x == '(':
            stack += 1
        else:
            if stack == 0:
                return False
            stack -= 1
    
    if stack != 0:
        return False
    
    return True
