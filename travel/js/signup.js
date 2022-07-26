// const signupButton = document.getElementById('signupLink');
const signupButtons = document.querySelectorAll('[data-selector="showSignupPopup"]');
const signupPopup = document.querySelector('.pop-up.pop-up__signup');

signupButtons.forEach(button => button.addEventListener('click', () => {
  signupPopup.classList.toggle('hidden');
}));

signupPopup.addEventListener('click', event => {
  if (event.target.classList.contains('pop-up__signup') || event.target.getAttribute("data-selector") === 'showLoginPopup') {
    signupPopup.classList.toggle('hidden');
  }
})