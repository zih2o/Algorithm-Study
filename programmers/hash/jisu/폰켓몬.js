function solution(nums) {
    set = new Set(nums)
    return Math.min(set.size, nums.length / 2);
}

// 삼항연산 쓰려다가 min으로 하는게 더 간결해서 고쳤다.
// set은 length 아니고 size라는 점~
// python 처럼 Set(arr) 형태는 안된다는 점
// 여러모로 파이썬이 좋다