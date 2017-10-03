//module.exports = 
function zeros(expression) {

  let sourceArray = expression.split('*');//splitting
  let size = sourceArray.length;//size of sourceArray
  let subArray = [];
  let a = 0; //counter in while cycle
  let result = '1';//final result
  let tempResult = '1';//temp result
  let doublefact = false;//single or double fact
  let count = 0;//count of zeros

  while (a < size) {
    subArray = sourceArray[a].split('!');

    if(subArray.length == 3){
      doublefact = true;
    }else{
      doublefact = false;
    }

    if(!doublefact){
      for(let i = 1; i <= subArray[0]; i++){
        tempResult = multiply(tempResult, i.toString());        
      }
    }else{
      if(subArray[0] % 2 == 0){
        for(let i = 2; i <= subArray[0]; i = i+2){
          tempResult = multiply(tempResult, i.toString());          
        }
      }else{
        for(let i = 1; i <= subArray[0]; i = i+2){
          tempResult = multiply(tempResult, i.toString());          
        }
      }
    }    
    result = multiply(result, tempResult);
    tempResult = '1';
    a++;
  }

  let pos = result.length - 1;
  while(result[pos] == '0'){
    count++;
    pos--;
  }
  console.log(result, result.length);
  return count;
}

console.log(zeros("1!!*2!!*3!!*4!!*5!!*6!!*7!!*8!!*9!!*10!!*1!!*2!!*3!!*4!!*5!!*6!!*7!!*8!!*9!!*10!!"));

 function multiply(first, second) {
  let arrayFirst = first.split('').reverse();
  let arraySecond = second.split('').reverse();
  let result = [];
  let decade = 0;
  let decadeIfResMoreTen = 0;

  for (let i = 0; i < arrayFirst.length + arraySecond.length; i++) {
    result[i] = 0;
  }

  for (let i = 0; i < arraySecond.length; ++i) {
    decade = 0;
    decadeIfResMoreTen = 0;

    for (let j = 0; j < arrayFirst.length; ++j) {

      result[i + j] += ((arrayFirst[j] * arraySecond[i] + decade) % 10);
      decade = Math.floor((arrayFirst[j] * arraySecond[i] + decade) / 10);

      if (result[i + j] >= 10) {
        result[i + j] = result[i + j] % 10;
        decade += 1;
      }
      if ((j + 1) == arrayFirst.length) {
        result[i + j + 1] = decade;
      }
    }

  }

  result.reverse();
  if (result[0] == 0) {
    result.shift();
  }
  return result.join('');
} 
