def solution(n, lost, reserve):
    stu_list = [1 for i in range(n+1)]
    
    for j in lost:
        stu_list[j] -= 1
    
    for k in reserve:
        stu_list[k] += 1
    
    for m in range(1, n+1):
        if stu_list[m] == 2:
            if stu_list[m-1] == 0:
                stu_list[m] -= 1
                stu_list[m-1] += 1
            elif len(stu_list)-1 > m and stu_list[m+1] == 0:
                stu_list[m] -= 1
                stu_list[m+1] += 1
                
    v = len(stu_list)-stu_list.count(0)-1
    return v