def solution(id_list, report, k):
    name_map = {name:num for num, name in enumerate(id_list)}
    report_map = {}
    
    for report in report:
        report_in, report_target = report.split(' ')
        in_idx = name_map[report_in]
        target_idx = name_map[report_target]
        
        if target_idx in report_map:
            report_map[target_idx].add(in_idx)
        else:
            report_map[target_idx] = {in_idx}

    answer = [0]*len(id_list)
    for report_set in report_map.values():
        if len(report_set) >= k:
            for send_idx in report_set:
                answer[send_idx] += 1
    
    return answer