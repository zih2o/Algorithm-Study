import heapq


def solution(jobs):
    l = len(jobs)
    now = 0
    avg = []
    waitings = []
    jobs.sort(key=lambda x: -x[0])
    while jobs or waitings:
        if jobs:
            if jobs[-1][0] <= now:
                start, duration = jobs.pop()
                heapq.heappush(waitings, (duration, start))
                continue
            elif not waitings:
                now += 1
                continue
        duration, start = heapq.heappop(waitings)
        avg.append(duration+now-start)
        now += duration

    return int(sum(avg)/l)

# 1트: now를 묶어서 처리하려고 해서 난감했음
# 2트: 빈 대기열일때 처리
# 3트: 리턴값 형태(...)처리..
# 4트: 최소값은 duration-start가 아니라 duration 이다..
