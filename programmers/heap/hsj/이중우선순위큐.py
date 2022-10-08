import heapq

def solution(operations):
    heap = []
    for i in operations:
        m,s = i.split(' ')
        if m == 'D':
            if len(heap) > 0:
                if s== '1':
                    heap.remove(heapq.nlargest(1, heap)[0])
                else:
                    heapq.heappop(heap)
        else:
            heapq.heappush(heap, int(s))
    return [heapq.nlargest(1, heap)[0], heap[0] if heap else [0,0]]