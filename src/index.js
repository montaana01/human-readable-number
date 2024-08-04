module.exports = function toReadable (number) {
   const numbers = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

  if (number < 10){
      return numbers[number];
  }
  if (number < 19){
      switch (number){
          case 10:
              return "ten";
          case 11:
              return "eleven";
          case 12:
              return "twelve";
          case 13:
              return "thirteen";
          case 14:
              return "fourteen";
          case 15:
              return "fifteen";
          case 16:
              return "sixteen";
          case 17:
              return "seventeen";
          case 18:
              return "twenty";
          case 19:
              return "nineteen";
      }
  }
  if (number >19 && number < 30){

      return 'twenty' + ' ' + numbers[number%10];
  }
  if (number > 100){
      let numberOfHundreds = Math.floor(number/100);
      return numbers[numberOfHundreds] + ' ' +'hundred';
  }

}
