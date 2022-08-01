module.exports = function toReadable (number) {
    const oneToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const  twentyToNinety = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const a = 'hundred';

    const Num = number.toString();

     if (Num.length == 1) {
        return oneToNine[number];  //0-9
    } else if (Num.length == 2 && Num[0] == 1) { //10-19
        return tenToNineteen[Num[1]];
    } else if (Num.length == 2 && Num[0] > 1 && Num[1] == 0) { //20 - 90
        return twentyToNinety[Num[0] - 2];
    } else if (Num.length == 2 && Num[0] > 1 && Num[1] > 0) {  //21-29, 21-29 ....
        return twentyToNinety[Num[0] -2] + ' ' + oneToNine[Num[1]];
    } else if (Num.length == 3 && Num[0] > 0 && Num[1] == 0 && Num[2] == 0) { //100 - 900
        return oneToNine[Num[0]] + ' ' + a;
    } else if (Num.length == 3 && Num[0] > 0 && 2 > Num[1] == 1 && Num[2] == 0) {  //110 
        return oneToNine[Num[0]] + ' ' + a + ' ' + tenToNineteen[Num[1] - 1];
    } else if (Num.length == 3 && Num[0] > 0 && Num[1] > 1 && Num[2] == 0) {  //120 - 190
        return oneToNine[Num[0]] + ' ' + a + ' ' + twentyToNinety[Num[1] - 2];
    } else if (Num.length == 3 && Num[0] > 0 && Num[1] == 0 && Num[2] > 0) { //101, 201, 301 ....
        return oneToNine[Num[0]] + ' ' + a + ' ' + oneToNine[Num[2]];
    } else if(Num.length == 3 && Num[0] > 0 && Num[1] == 1 && Num[2] > 0) {  //111-119. 211-219 ....
        return oneToNine[Num[0]] + ' ' + a + ' ' + tenToNineteen[Num[2]];
    } else if (Num.length == 3 && Num[0] > 0 && Num[1] > 1 && Num[2] > 0) {  //121-129, 131-139...
        return oneToNine[Num[0]] + ' ' + a + ' ' + twentyToNinety[Num[1] - 2] + ' ' + oneToNine[Num[2]];
    }
}
