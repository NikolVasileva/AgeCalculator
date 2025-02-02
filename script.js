function calculateAge() {
    let birthYear = document.getElementById('birthYear').value;
    let currentYear = new Date().getFullYear();
  
    if (birthYear > 1900 && birthYear <= currentYear) {
      let age = currentYear - birthYear;
      document.getElementById('result').textContent = `Ти си на ${age} години.`;
    } else {
      document.getElementById('result').textContent = 'Моля, въведи валидна година между 1900 и текущата година!';
    }
  }