# 부끄러운 풀이... 적어도 zip이라도 쓰지ㅠ
from collections import defaultdict


def solution(survey, choices):
    dic = defaultdict(int)
    while survey and choices:
        case = survey.pop()
        choice = choices.pop()
        if choice == 1:
            dic[case[0]] += 3
        elif choice == 2:
            dic[case[0]] += 2
        elif choice == 3:
            dic[case[0]] += 1
        elif choice == 5:
            dic[case[1]] += 1
        elif choice == 6:
            dic[case[1]] += 2
        elif choice == 7:
            dic[case[1]] += 3
    ans = ""
    if dic["R"] >= dic["T"]:
        ans += "R"
    elif dic["R"] < dic["T"]:
        ans += "T"
    if dic["C"] >= dic["F"]:
        ans += "C"
    elif dic["C"] < dic["F"]:
        ans += "F"
    if dic["J"] >= dic["M"]:
        ans += "J"
    elif dic["J"] < dic["M"]:
        ans += "M"
    if dic["A"] >= dic["N"]:
        ans += "A"
    elif dic["A"] < dic["N"]:
        ans += "N"
    return ans
