def solution(array, commands):
    answer = []

    for i in range(len(commands)):
        start, end, n = commands[i][0]-1, commands[i][1], commands[i][2]-1
        arr = sorted(array[start:end])
        answer.append(arr[n])

    return answer