def solution(s):
    answer = True
    count = 0
    pNum=0
    yNum=0
    s=(s.lower())
    for j in s:
        if 'p'==j:
            pNum+=1
        if 'y'==j:
            yNum+=1
    if pNum == yNum :
        return True
    else :
        return False