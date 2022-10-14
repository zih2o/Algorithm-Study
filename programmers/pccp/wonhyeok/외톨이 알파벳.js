function solution(input_string) {
    const ALPHABET = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));

    let answer = ALPHABET.filter((c)=>{
        const regex = new RegExp(`${c}+[^${c}]+${c}+`)
        return regex.test(input_string)
    }).join('');
    
    if (answer === '') answer = 'N';
    
    return answer
}