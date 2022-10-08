## js에선s 0.03ms / py에선 0.01ms
import math
def solution(n):
    answer = 0
    n=math.sqrt(n)
    answer = math.pow(n+1,2) if(n % 1 == 0) else -1
    return answer