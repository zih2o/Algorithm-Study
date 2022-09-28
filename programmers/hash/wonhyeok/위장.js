function solution(clothes) {
    let dic = {}
    
    for (let cloth of clothes) {
        let kind = cloth[1];
        if (dic.hasOwnProperty(kind)) {
            dic[kind] += 1;
        } else {
            dic[kind] = 2;
        }
    }
    let answer = Object.keys(dic).reduce((acc, cur) => acc*dic[cur], 1)-1;
 
    return answer;
}