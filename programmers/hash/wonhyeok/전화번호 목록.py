def solution(phone_book):
    # 길이순 정렬
    phone_book.sort(key=len)
    num_set = set()
    
    # 앞부터 잘라가며 집합에 존재하는지 확인
    for num in phone_book:
        for i in range(1,len(num)+1):
            if num[:i] in num_set:
                return False
        num_set.add(num)
    
    return True
