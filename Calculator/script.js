function display(value){
  var display= document.getElementById("display");
  display.value += value ;
}

function allClear(){
  var display= document.getElementById("display");
  display.value = "";
}

function delChar(value){
  var display= document.getElementById("display")
  display.value = display.value.substring(0,display.value.length -1);
}

function percentNum(value){
  var display= document.getElementById("display")
  var array = display.value.split("");
  for(let i=0; i <= array.length; i++){
    if (array[i]=='+'|| array[i]=='-' || array[i]=='/' || array[i]=='*'){
      var indexToSplit = array.indexOf(array[i]);
      var first = array.slice(0, indexToSplit);
      first = first.join('');
      first = Number(first);
      var common = array.slice(indexToSplit,indexToSplit+1);
      var second = array.slice(indexToSplit + 1);
      second= second.join('');
      second= Number(second);
      second = second/100;
      display.value ="";
      display.value = (first + common + second );
    }
    else if (i<1){
      var powNum = array.join('');
      display.value = powNum/100;
    }
    }
}

function squareNum(value){
  var display= document.getElementById("display")
  var array = display.value.split("");
  for(let i=0; i <= array.length; i++){
    if(array[i]=='+'|| array[i]=='-' || array[i]=='/' || array[i]=='*'){
      var indexToSplit = array.indexOf(array[i]);
      var first = array.slice(0, indexToSplit);
      first = first.join('');
      first = Number(first);
      var common = array.slice(indexToSplit,indexToSplit+1);
      var second = array.slice(indexToSplit + 1);
      second= second.join('');
      second= Number(second);     
      second = Math.pow(second,2);      
      display.value ="";
      display.value = (first + common + second );
    }
    else if (i<1){
      var powNum = array.join('');
      display.value = Math.pow(powNum,2);
    }
  }
}
  
function result(value){
  var display= document.getElementById("display");
  display.value = eval(display.value);
}
