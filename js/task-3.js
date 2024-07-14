document.getElementById('name-input').addEventListener('input', function() {
    const nameInput = document.getElementById('name-input');
    const nameOutput = document.getElementById('name-output');
  
    const trimmedName = nameInput.value.trim();
  
    nameOutput.textContent = trimmedName === '' ? 'Anonymous' : trimmedName;
  });