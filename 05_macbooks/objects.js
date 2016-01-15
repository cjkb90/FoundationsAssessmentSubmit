var Laptop = function(year,hd){
    this.year = year;
    this.hd = hd;
    
};

Laptop.prototype.checkSpecs = function(){
    return ("Year: "+this.year+", HD: "+this.hd);
};

var Macbook = function(year, hd, color){
    Laptop.call(this,year,hd);
    Laptop.apply();
    this.color = color;
};

var extendWithObjectCreate = function (constChild,constParent){
    constChild.prototype = Object.create(constParent.prototype);
    constChild.prototype.constructor = constParent;
};


var extendWithNewKeyword = function(constChild,constParent){
    constChild.prototype = new constParent;
    constChild.prototype.constructor = constParent;
};