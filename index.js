// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
name = name.toUpperCase();

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
function replaceStr(str){
    str = str.toLowerCase();
    var reg = /\b(\w)|\s(\w)/g;
    return str.replace(reg,function(m){ 
     return m.toUpperCase()
    });
}
sentence = replaceStr(sentence);

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
money = money.slice(1);