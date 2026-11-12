const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
  });
}

document.querySelectorAll('.year').forEach(element => {
  element.textContent = new Date().getFullYear();
});
