
function submitQuiz() {
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);

    formData.append('option1', document.getElementById('option1').value);
    formData.append('option2', document.getElementById('option2').value);
    formData.append('option3', document.getElementById('option3').value);
    formData.append('option4', document.getElementById('option4').value);
    formData.append('correctAnswer', document.getElementById('correctAnswer').value);

    fetch('/upload', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert('Quiz lastet opp!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Noe gikk galt ved opplasting av quiz.');
    });
}
