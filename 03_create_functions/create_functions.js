var createFunctions = function(num){
    //creates array of functions
    var arrFuncs = [];
    for (i=0;i<num;i++){
        arrFuncs.push(function(){
            var numb = i
            //Here I'm constantly returning the total length instead of the current i value
            //trying to figure out why
            return numb;
        });
    }
    return arrFuncs;
    
};