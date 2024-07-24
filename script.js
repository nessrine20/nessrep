function nextQuestion(url) {
  window.location.href = url;
}

function submitQuiz() {
  let score = 0;

  // Get all answers
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3 = document.querySelector('input[name="q3"]:checked');

  // Check if the answers are correct
  if (q1 && q1.value === 'option 3') score++;
  if (q2 && q2.value === 'option 1') score++;
  if (q3 && q3.value === 'option 2') score++;

  // Show the result
  const resultElement = document.getElementById('result');
  if (resultElement) {
      resultElement.innerHTML = `You scored ${score} out of 3!`;
  } else {
      alert(`You scored ${score} out of 3!`);
  }
}

