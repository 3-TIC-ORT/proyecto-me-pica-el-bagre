let openPopupBtn = document.getElementById('openPopupBtn');
let closePopupBtn = document.getElementById('closePopupBtn');
let myPopup = document.getElementById('myPopup');


openPopupBtn.addEventListener('click', () => {
  myPopup.style.display = 'flex'; 
});


closePopupBtn.addEventListener('click', () => {
  myPopup.style.display = 'none';
});


window.addEventListener('click', (event) => {
  if (event.target === myPopup) {
    myPopup.style.display = 'none';
  }
});