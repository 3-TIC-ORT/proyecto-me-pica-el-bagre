let Apopup = document.getElementById('Apopup');
let Cpopup = document.getElementById('Cpopup');
let Popup = document.getElementById('myPopup');


Apopup.addEventListener('click', () => {
  Popup.style.display = 'flex'; 
});


Cpopup.addEventListener('click', () => {
  Popup.style.display = 'none';
});


window.addEventListener('click', (event) => {
  if (event.target === Popup) {
    Popup.style.display = 'none';
  }
});