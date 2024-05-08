/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {

    const scoreWithIndex = score.map((score, index)=>[score,index]);
    scoreWithIndex.sort((a,b) => b[0] - a[0]);
    let answer = []; 
    const medals = ["Gold Medal","Silver Medal","Bronze Medal"];
    for(let i = 0;i<score.length;i++){
        const index = scoreWithIndex[i][1];
        if(i < 3) {
            answer[index] = medals[i];
        }else {
            answer[index] = String(i+1)
        }

    }
    return answer;
    
};