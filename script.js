// This handles file upload and shows results (fake for now)
document.getElementById('generateBtn').addEventListener('click', function() {
  const fileInput = document.getElementById('fileInput');
  if (!fileInput.files[0]) {
    alert('Please select a file!');
    return;
  }
  
  // Show results area
  document.getElementById('results').style.display = 'block';
  
  // Fake results (we'll replace with real AI later)
  document.getElementById('summaryText').textContent = 'This is a summary in the original language.';
  document.getElementById('flashcardsText').textContent = 'Flashcard 1: Wach hada? (What is this?)';
  document.getElementById('podcastText').textContent = 'Podcast ready!';
  document.getElementById('podcastAudio').src = 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav';  // Free sample audio
  document.getElementById('podcastAudio').style.display = 'block';
});
