module.exports = function zeros(expression) {
  let n = 5;
  let result = '1';
  let zero = 0;		      		
  let pos = 0;		      
  
  let commonFac = expression.split('*');
  
  let singleFac = [];
  let doubleFac = [];
  
  for (let i = 0; i < commonFac.length; i++){
  	if (~commonFac[i].indexOf("!!")){
    	doubleFac.push(parseInt(commonFac[i]));
    }
    else{
    	singleFac.push(parseInt(commonFac[i]));
    }
  }

  for(let i = 0; i < singleFac.length; i++){
    for(let j = 1; j <= singleFac[i]; j++){
			result = multiply(result, j.toString());
    }
  }

  while (true) {    
    if (result.charAt(pos) != 0) break;    
    zero++;
    pos--;
}

  return zero;
}

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

