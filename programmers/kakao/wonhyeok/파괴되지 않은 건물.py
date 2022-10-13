import numpy as np

def solution(board, skill):
    board = np.array(board, dtype=np.int64)
    skill_arr = np.zeros(board.shape, dtype=np.int64)
    x_len, y_len = board.shape
    
    # 누적 합 준비 배열 만들기
    for skill_info in skill:
        t, x1, y1, x2, y2, degree = skill_info
        skill_value = -degree if t==1 else degree

        def is_inrange(x, y):
            return x<x_len and y<y_len
        
        point_sign = [(x1, y1, 1),
                      (x1, y2+1, -1),
                      (x2+1, y1, -1),
                      (x2+1, y2+1, 1)]
        
        for x, y, sign in point_sign:
            if is_inrange(x, y):
                skill_arr[x][y] += skill_value*sign
    
    skill_arr = skill_arr.cumsum(axis=1).cumsum(axis=0)
    
    board += skill_arr
    
    return np.count_nonzero(board > 0)