function getAmountInWords(amount) {
  let words = ['zero', 'one', 'two', 'three', 'four', 'five', /* Add more numbers here */];

  let amountString = amount.toString();
  let wordsArray = Array.from(amountString).map((digit) => words[digit]);

  return wordsArray.join(' ');
}

module.exports.getAmountInWords = getAmountInWords;
