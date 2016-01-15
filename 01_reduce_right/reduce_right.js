var reduceRight = function(arr, start, combFunc){
    var answer = "";
    for (i=arr.length-1;i>-1;i--){
        answer = combFunc(answer,arr[i]);
    }
    
    return answer;
};


var reduceRightRecursive = function(arr, start, combFunc){
    //create base case
    if (arr.length === 0){
        return start;
    }
    
    start = combFunc(start,arr[arr.length-1]);
    //Reduces length of array by one
    arr = arr.slice(0,arr.length-1);
    //Calls itself
    return reduceRightRecursive(arr,start,combFunc);
};