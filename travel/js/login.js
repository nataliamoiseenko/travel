// const loginButton = document.getElementById('loginButton');
const loginButtons = document.querySelectorAll('[data-selector="showLoginPopup"]');
const popup = document.querySelector('.pop-up');

loginButtons.forEach(button => button.addEventListener('click', () => {
  popup.classList.toggle('hidden');
}));

popup.addEventListener('click', event => {
  if (event.target.classList.contains('pop-up') || event.target.getAttribute("data-selector") === 'showSignupPopup') {
    popup.classList.toggle('hidden');
  }
});
