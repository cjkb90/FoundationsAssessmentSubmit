var vowelsCount = function(str){
    var checkVowel = /[aeiou]/;
    var vowels = [];
    for (i=0;i<str.length;i++){
        if (str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"||str[i]=="A"||str[i]=="E"||str[i]=="I"||str[i]=="O"||str[i]=="U"){
            vowels.push(str[i]);
        }
    }
    return vowels.length
};