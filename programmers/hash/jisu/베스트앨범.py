from collections import defaultdict


def solution(genres, plays):
    dic = defaultdict(list)
    cnt_dic = defaultdict(int)
    # defaultdict로 초기값주기
    best = []

    for i in range(len(genres)):
        dic[genres[i]].append([plays[i], i])
        cnt_dic[genres[i]] += plays[i]
    cnt_arr = sorted(list(cnt_dic.items()), key=lambda x: x[1])
    while cnt_arr:
        most_g = cnt_arr.pop()[0]
        most_g_l = sorted(dic[most_g], key=lambda x: (x[0], -x[1]))
        cnt = 0
        while most_g_l and cnt < 2:
            best.append(most_g_l.pop()[1])
            cnt += 1

    return best

# 한번에 통과해서 행복했다ㅎ
