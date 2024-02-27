// Récupérer le formulaire et les éléments du formulaire
const form = document.getElementById('myForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Écouter l'événement de soumission du formulaire
form.addEventListener('submit', function(event) {
    // Empêcher l'envoi du formulaire par défaut
    event.preventDefault();

    // Validation de l'e-mail
    if (!validateEmail(emailInput.value)) {
        showError(emailInput, 'Veuillez saisir une adresse e-mail valide.');
    } else {
        hideError(emailInput);
    }

    // Validation du mot de passe
    if (!validatePassword(passwordInput.value)) {
        showError(passwordInput, 'Le mot de passe doit contenir au moins 6 caractères.');
    } else {
        hideError(passwordInput);
    }

    // Envoyer le formulaire si tous les champs sont valides
    if (validateEmail(emailInput.value) && validatePassword(passwordInput.value)) {
        form.submit();
    }
});

// Fonction de validation de l'e-mail
function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

// Fonction de validation du mot de passe
function validatePassword(password) {
    return password.length >= 6;
}

// Afficher un message d'erreur
function showError(input, message) {
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = message;
    errorSpan.style.display = 'block';
}

// Masquer un message d'erreur
function hideError(input) {
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = '';
    errorSpan.style.display = 'none';
}