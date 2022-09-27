function solution(nums) {
    let nums_length = nums.length;
    let set_length = Array.from(new Set(nums)).length;

    if((nums_length / 2) >= set_length) return set_length;
    else return nums_length / 2;
}
