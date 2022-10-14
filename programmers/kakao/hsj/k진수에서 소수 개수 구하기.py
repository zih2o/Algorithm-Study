def solution(n, k):
    answer = 0
    n2 = ''
    while n>0:
        n2 = str(n%k)+n2
        n = n//k
    li = n2.split('0')
    
    for i in li:
        if len(i) == 0 or int(i) == 1:
            continue
        m = int(int(i)**0.5)
        for j in range(2, m+1):
            if int(i) % j == 0:
                break
        answer += 1
    return answer