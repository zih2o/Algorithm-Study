function getGene(pose) {
    let [n, p] = pose
    let stack = []
    
    p--
    while (n>1) {
        stack.push(p%4)
        n--
        p = parseInt(p/4)
    }
    
    while (stack.length > 0) {
        num = stack.pop()
        if (num == 0) return 'RR'
        if (num == 3) return 'rr'
    }
    return 'Rr'
}
 
function solution(queries) {
    return queries.map(getGene)
}
