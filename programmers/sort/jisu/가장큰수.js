function solution(numbers) {
    let ans = numbers.map(c => c + '') // str 처리
    ans.sort((a, b) => (b + a) - (a + b)) // 내림차순 정렬
    return ans[0] == 0 ? '0' : ans.join('') // 예외처리
}