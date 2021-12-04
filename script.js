function textModify(){
    document.getElementById("myresult").value = '';
const valueTextarea = document.getElementById("myText").value;
const numbWords = document.getElementById('numbWords');
const numbSymbols = document.getElementById('numbSymbols');
const numbSpacewith = document.getElementById('numbSpacewith');
const perSymbol = document.getElementById('perSymbol');
console.log(valueTextarea);
let counterWords = 1;
let arrUniqsymb = [valueTextarea[0]];
let arrVidsotky = [];
let arrSymbol = [];
for(let symbI = 0; symbI < valueTextarea.length; symbI++ ){
    if(valueTextarea[symbI] == " "){
        counterWords = counterWords + 1;
    }
    if (!arrUniqsymb.includes(valueTextarea[symbI])){
        arrUniqsymb.push(valueTextarea[symbI]);
     }
}
let numbofSymb = valueTextarea.length - counterWords + 1;
let numbofsymbSpacewith = valueTextarea.length;
if (numbWords.checked) {
    document.getElementById("myresult").value += `кількість слів - ${counterWords} \n`;
}
if (numbSymbols.checked) {
    document.getElementById("myresult").value += `кількість символів без пробілів - ${numbofSymb} \n`;
}
if (numbSpacewith.checked) {
    document.getElementById("myresult").value += `кількість символів з пробілами - ${numbofsymbSpacewith} \n`;
}
if (perSymbol.checked) {
    for(let symbj = 0; symbj < arrUniqsymb.length; symbj++){
        let split = valueTextarea.split(arrUniqsymb[symbj]);
        arrSymbol.push(arrUniqsymb[symbj]);
        arrVidsotky.push(Math.round((split.length-1)/valueTextarea.length*100*100)/100);
        document.getElementById("myresult").value += `"${arrSymbol[symbj]}" - ${arrVidsotky[symbj]} %\n`;
        document.getElementById("hhh").value = `${arrSymbol[symbj]} - ${arrVidsotky[symbj]}`;
    }
}
console.log(counterWords);
console.log(numbofSymb);
console.log(numbofsymbSpacewith);
console.log(arrUniqsymb);
console.log(arrVidsotky);
}
function clean(){
    document.getElementById("myresult").value = '';
    document.getElementById("myText").value = '';
}