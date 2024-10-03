const textElement = document.getElementById('text');
const words = ['Hello', 'World', 'OpenAI', 'ChatGPT'];

let currentWordIndex = 0;

function updateText() {
  textElement.textContent = words[currentWordIndex];
  currentWordIndex = (currentWordIndex + 1) % words.length;
}

setInterval(updateText, 1000); // Change word every 5 seconds
