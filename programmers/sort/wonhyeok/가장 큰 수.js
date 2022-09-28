function solution(numbers) {
    numbers = numbers.map(String);
    numbers.sort((a, b)=>+(b+a)-(+(a+b)));
 
    var answer = numbers.join('').replace(/^0+/g, 0);
    
    return answer;
}