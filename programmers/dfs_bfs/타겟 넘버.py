def solution(numbers, target):
    list_len = len(numbers)
    answer = 0
    
    for order_num in range(2**list_len):
        make_num = 0
        for i in range(list_len):
            sign = 1 if 1&order_num else -1
            # sign = 1 if order_num&(1<<i) else -1
            make_num += sign*numbers[i]
            order_num >>= 1
        if make_num == target:
            answer += 1
    
    return answer