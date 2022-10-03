def solution(name):
    answer = 0
    for char in name:
        char_diff = ord(char) - ord('A')
        answer += min(char_diff, 26-char_diff)
    
    move = len(name)-1
    for i in range(1, len(name)):
        right = len(name[1:i].rstrip('A'))
        left = len(name[i:].lstrip('A'))
        move = min(move, 2*right+left, 2*left+right)
    
    answer += move
    
    return answer