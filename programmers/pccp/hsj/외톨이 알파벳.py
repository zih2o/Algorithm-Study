def solution(input_string):
    answer = []
    temp_list = []
    temp = '' #z
    
    for i in range(len(input_string)):
        if temp == input_string[i]:
            continue
        elif temp != input_string[i]:
            if input_string[i] in temp_list:
                temp = input_string[i]
                temp_list.remove(input_string[i])
                answer.append(input_string[i])
                
            else:
                temp_list.append(input_string[i])
                temp = input_string[i]
    answer = list(set(answer))
    answer.sort()
    if len(answer) == 0: return 'N'
    return ''.join(answer)