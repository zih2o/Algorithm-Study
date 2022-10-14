def solution(input_string):
    alphabet = (chr(code) for code in range(97,123))
    answer = ''
    
    for char in alphabet:
        first_idx = input_string.find(char)
        if first_idx == -1:
            continue
        else:
            last_idx = first_idx
            for idx in range(first_idx+1, len(input_string)):
                next_idx = input_string.find(char, idx)
                if next_idx == -1:
                    break
                elif next_idx == last_idx +1:
                    last_idx = next_idx
                else:
                    answer += char
                    break
                    
    if answer == '':
        answer = 'N'
            
    return answer