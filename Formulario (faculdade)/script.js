document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var firstName = document.getElementById("nome").value;
    var lastName = document.getElementById("sobrenome").value;
    var email = document.getElementById("email").value;
    var idade = document.getElementById("idade").value;
  
    if (firstName.length < 3 || firstName.length > 50) {
      alert("O campo Nome deve ter entre 3 e 50 caracteres.");
      return;
    }

    if (lastName.length < 3 || lastName.length > 50) {
      alert("O campo Sobrenome deve ter entre 3 e 50 caracteres.");
      return;
    }
  
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um endereço de e-mail válido.");
      return;
    }
  
    if (isNaN(idade) || idade <= 0 || idade >= 120) {
      alert("A idade deve ser um número positivo e menor que 120.");
      return;
    }
  
    var queryString = "?firstName=" + encodeURIComponent(firstName) +
                      "&lastName=" + encodeURIComponent(lastName) +
                      "&email=" + encodeURIComponent(email) +
                      "&idade=" + encodeURIComponent(idade);
  
    window.location.href = "confirmation.html" + queryString;
});