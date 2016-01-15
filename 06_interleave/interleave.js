var interleave = function(str1,str2){
    var answer = "";
    if (str1.length>=str2.length){
        for (i=0;i<str1.length;i++){
            if (i<str2.length){
                answer = answer.concat(str1[i]).concat(str2[i]);
            }
            else {
                answer = answer.concat(str1[i]);
            }
        }
    }
    if (str1.length<str2.length){
        for (i=0;i<str2.length;i++){
            if (i<str1.length){
                answer = answer.concat(str1[i]).concat(str2[i]);
            }
            else {
                answer = answer.concat(str2[i]);
            }
        }
    }
    
    
    return answer;

    //I know the final answer probably involves recursion and arguments.length, but I'm going to go back to try to pick up
    //points on other questions before coming back to this one
};