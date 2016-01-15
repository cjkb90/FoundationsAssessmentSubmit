var keyAdder = function(obj){
    var sum = 0;
    for (var key in obj){
        sum+= obj[key];
    }
    return sum;
    //this works perfectly when saying keyAdder({a1:4,a2:5,a3:6}) without the .call
    //I'm not confident I understand .call enough to find the solution for the script
};
