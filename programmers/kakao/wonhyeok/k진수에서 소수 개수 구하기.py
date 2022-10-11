def num_system_convert(n, k):
    output = ''
    while n>0:
        output = str(n%k) + output
        n //= k
        
    return output

def is_prime(n):
    try:
        n = int(n)
    except:
        return False
    
    if n<2: return False
    
    for m in range(2,int(n**(0.5))+1):
        if not n%m: return False
    return True
        

def solution(n, k):
    convert_n = num_system_convert(n, k)
    num_list = convert_n.split('0')
    answer = 0
    
    for num_part in num_list:
        if is_prime(num_part):
            answer +=1
    
    return answer