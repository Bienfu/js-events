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

function generateWordElement(word, highlight) {
  var wordElement = document.createElement('span');
  wordElement.classList.add('word');
  wordElement.textContent = word;
  if (highlight) {
    wordElement.classList.add('highlight');
    wordElement.classList.add(highlight);
  }
  return wordElement;
}

function getEveryNthValue() {
  var everyNthSelectElement = document.getElementById('every-nth-select');
  var everyNthValue = everyNthSelectElement.value;
  return parseInt(everyNthValue);
}

function getHighlightColor() {

  var selectedColorRadioButton = document.querySelector('input[name="highlight-color"]:checked');

  /*
   * The line above is a one-liner that is functionally equivalent to the
   * code below.
   */
  // var colorRadioButtons = document.querySelectorAll('input[name="highlight-color"]');
  // var selectedColorRadioButton = colorRadioButtons[0];
  // for (var i = 0; i < colorRadioButtons.length; i++) {
  //   if (colorRadioButtons[i].checked) {
  //     selectedColorRadioButton = colorRadioButtons[i];
  //   }
  // }

  return selectedColorRadioButton.value;

}

function handleAddWordButtonClick(event) {
  var word = allWords[currentWord];
  if (word) {
    var everyNth = getEveryNthValue();
    var highlight = ((currentWord + 1) % everyNth) === 0;
    if (highlight) {
      highlight = getHighlightColor();
    }

    var wordElement = generateWordElement(word, highlight);
    var container = event.currentTarget.parentNode.parentNode;
    var wordsContainer = container.querySelector('.words-container');
    wordsContainer.appendChild(wordElement);

    currentWord = (currentWord + 1) % allWords.length;
  }
}

var addWordButtons = document.getElementsByClassName('add-word-button');
for (var i = 0; i < addWordButtons.length; i++) {
  addWordButtons[i].addEventListener('click', handleAddWordButtonClick);
}

document.body.addEventListener('click', function (event) {
  if (event.target.classList.contains('word')) {
    event.target.remove();
  }
});
