def solution(n):
    answer = 0
    while(n):
        answer += n%10
        n = int(n/10)
      #  print(n)
    return answer