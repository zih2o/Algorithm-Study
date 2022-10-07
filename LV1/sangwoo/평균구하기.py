# 평균구하는 4가지 방법
# 1. for 반복문을 이용한 평균 구하기
# 2. sum 함수를 이용한 평균 구하기
# 3. numpy 모듈을 이용해서 평균 구하기
# 4. statiscics 라이브러리 이용해서 평균 구하기
# 출처: https://blockdmask.tistory.com/559 [개발자 지망생:티스토리]

def solution(arr):
    total = sum(arr)
    answer = total/len(arr)
    return answer