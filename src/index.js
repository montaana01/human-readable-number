module.exports = function toReadable (number) {
   const numbers = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen','sixteen','seventeen','eighteen','nineteen']

  if (number <= 19){
      return numbers[number];
  }
    if (number === 20){
        return 'twenty';
    }
  if (number >20 && number < 30){
      return 'twenty' + ' ' + numbers[number%10];
  }
    if (number === 30){
        return 'thirty';
    }
  if (number >30 && number < 40){
        return 'thirty' + ' ' + numbers[number%10];
  }
  if (number >40 && number < 50){
        return 'forty' + ' ' + numbers[number%10];
  }
    if (number === 40){
        return 'forty';
    }
  if (number >50 && number < 60){
        return 'fifty' + ' ' + numbers[number%10];
  }
    if (number === 50){
        return 'fifty';
    }
    if (number >60 && number < 70){
        return 'sixty' + ' ' + numbers[number%10];
    }
    if (number === 60){
        return 'sixty';
    }
    if (number >70 && number < 80){
        return 'seventy' + ' ' + numbers[number%10];
    }
    if (number === 70){
        return 'seventy';
    }
    if (number >80 && number < 90){
        return 'eighty' + ' ' + numbers[number%10];
    }
    if (number === 80){
        return 'eighty';
    }
    if (number >90 && number < 100){
        return 'ninety' + ' ' + numbers[number%10];
    }
    if (number === 90){
        return 'ninety';
    }
  if (number >= 100){
      let reminder = number%100;
      let numberOfHundreds = Math.floor(number/100);

      if (reminder === 0){
          return numbers[numberOfHundreds] + ' ' +'hundred';
      }
      if ( reminder <= 19){
          return numbers[numberOfHundreds] + ' ' +'hundred' + ' '+ numbers[reminder];
      }
      if ( reminder >= 19 && reminder < 30 ) {
          if (reminder%10 === 0){
              return numbers[numberOfHundreds] + ' ' +'hundred' + ' '+ 'twenty';
          }
          return numbers[numberOfHundreds] + ' ' +'hundred' + ' '+ 'twenty' + ' ' + numbers[reminder%10];
      }
      if ( reminder >= 30 && reminder < 40 ) {
          if (reminder%10 === 0){
              return numbers[numberOfHundreds] + ' ' +'hundred' + ' '+ 'thirty';
          }
          return numbers[numberOfHundreds] + ' ' +'hundred' + ' '+ 'thirty' + ' ' + numbers[reminder%10];
      }
      if ( reminder >= 40 && reminder < 50 ) {
          if (reminder%10 === 0){
              return numbers[numberOfHundreds] + ' ' +'hundred' + ' '+ 'forty';
          }
          return numbers[numberOfHundreds] + ' ' +'hundred' + ' '+ 'forty' + ' ' + numbers[reminder%10];
      }
      if ( reminder >= 50 && reminder < 60 ) {
                    if (reminder%10 === 0){
              return numbers[numberOfHundreds] + ' ' +'hundred' + ' '+ 'fifty';
          }
          return numbers[numberOfHundreds] + ' ' +'hundred' + ' '+ 'fifty' + ' ' + numbers[reminder%10];
      }
      if ( reminder >= 60 && reminder < 70 ) {
                    if (reminder%10 === 0){
              return numbers[numberOfHundreds] + ' ' +'hundred' + ' '+ 'sixty';
          }
          return numbers[numberOfHundreds] + ' ' +'hundred' + ' '+ 'sixty' + ' ' + numbers[reminder%10];
      }
      if ( reminder >= 70 && reminder < 80 ) {
                    if (reminder%10 === 0){
              return numbers[numberOfHundreds] + ' ' +'hundred' + ' '+ 'seventy';
          }
          return numbers[numberOfHundreds] + ' ' +'hundred' + ' '+ 'seventy' + ' ' + numbers[reminder%10];
      }
      if ( reminder >= 80 && reminder < 90 ) {
                    if (reminder%10 === 0){
              return numbers[numberOfHundreds] + ' ' +'hundred' + ' '+ 'eighty';
          }
          return numbers[numberOfHundreds] + ' ' +'hundred' + ' '+ 'eighty' + ' ' + numbers[reminder%10];
      }
      if ( reminder >= 90 && reminder < 100 ) {
                    if (reminder%10 === 0){
              return numbers[numberOfHundreds] + ' ' +'hundred' + ' '+ 'ninety';
          }
          return numbers[numberOfHundreds] + ' ' +'hundred' + ' '+ 'ninety' + ' ' + numbers[reminder%10];
      }
  }
}
