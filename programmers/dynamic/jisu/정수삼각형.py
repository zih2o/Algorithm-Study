# 모든 루트 찾는건 역시 안됨..
def solution(triangle):
    result = []

    def pyramid(i, floor, total):
        print(i, floor, total)
        if floor > len(triangle)-1:
            result.append(total)
            return
        pyramid(i, floor+1, total + triangle[floor][i])
        pyramid(i+1, floor+1, total + triangle[floor][i+1])
    pyramid(0, 1, triangle[0][0])
    return max(result)

# 거꾸로 올라가자


def solution(triangle):

    height = len(triangle)

    while height > 1:
        for i in range(height - 1):
            triangle[height -
                     2][i] += max([triangle[height-1][i], triangle[height-1][i+1]])
        height -= 1

    answer = triangle[0][0]
    return answer
