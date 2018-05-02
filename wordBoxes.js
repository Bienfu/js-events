var allWords = [];
var currentWord = 0;

function handleNewWordsEntered(event) {
  var text = event.currentTarget.value;
  allWords = text.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '')
    .toLowerCase().split(' ');
  currentWord = 0;
  console.log("== New words entered:", allWords);
}

var wordsInputElement = document.getElementById('words-input');
// wordsInputElement.addEventListener('input', handleNewWordsEntered);
wordsInputElement.addEventListener('change', handleNewWordsEntered);
