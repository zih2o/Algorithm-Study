def solution(brown, yellow):
    for i in range(1, int(yellow**2)+1):
        if yellow % i == 0:
            j = yellow/i
            if brown == (i+j)*2 + 4:
                ans = [j+2, i+2]
                break
    return ans

# 넓이와 둘레의 상관관계 이용
# 바로 리턴해도 되지만 오류날걸 대비해서 루프밖에서 리턴했다
