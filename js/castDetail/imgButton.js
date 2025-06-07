// お気に入り切り替え
document.getElementById('favButton').addEventListener('click', function () {
  const img = this.querySelector('img');
  const span = this.querySelector('span');
  
  const isActive = this.classList.toggle('active');

  if (isActive) {
    img.src = 'icon/star-on.png';
    span.style.color = '#FCC419';
  } else {
    img.src = 'icon/star-off.png';
    span.style.color = '#8C8C8C';
  }
});

