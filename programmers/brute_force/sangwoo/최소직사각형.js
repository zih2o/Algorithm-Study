function solution(sizes) {
    var answer = 0;
    var listx=[],listy=[];
    for(var i =0;i<sizes.length;i++)
{       if(sizes[i][0] >= sizes[i][1])
        {   
        listx.push(sizes[i][0]);
        listy.push(sizes[i][1]);
        }
        else if(sizes[i][0] < sizes[i][1])
        {
        listx.push(sizes[i][1]);
        listy.push(sizes[i][0]);
        }          
            
}
    answer = Math.max(...listx)*Math.max(...listy);
    return answer;
}