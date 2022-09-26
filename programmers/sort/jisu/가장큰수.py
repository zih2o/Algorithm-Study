from functools import cmp_to_key


def solution(numbers):
    def comparator(x, y):
        if str(x)+str(y) > str(y)+str(x):
            return 1
        elif str(x)+str(y) == str(y)+str(x):
            return 0
        else:
            return -1

    sorted_numbers = sorted(numbers, key=cmp_to_key(comparator), reverse=True)
    return str(int("".join(map(lambda x: str(x), sorted_numbers))))

# str to num , num to str 문제들은 0 처리에 유의하여 반례 생각하기~
# 애초에 arr를 map 으로 str 처리 해줬으면 더 간단해졌을듯
