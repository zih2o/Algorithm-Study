from math import prod
 
def solution(clothes):
    dic = {}
    
    for _, kind in clothes:
        if kind in dic:
            dic[kind] += 1
        else:
            dic[kind] = 2 #어차피 아래에서 곱하기 전에 +1을 하므로
 
    answer = prod(dic.values())-1
    
    return answer