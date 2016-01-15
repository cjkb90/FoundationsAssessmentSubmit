var alternate = function(func){
    var alt = 0;
    var func2 = function(){
        alt++;
        if (alt % 2 !== 0){
            return func();
        } 
    };
    return func2;
};

var twice = function(func){
    var runTimes = 0;
    var func2 = function(){
        runTimes++;
        if (runTimes<3){
            return func;
        } else {
            return 0;
        }
    };
    return func2();
    
};