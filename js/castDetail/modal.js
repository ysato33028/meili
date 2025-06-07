document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openGiftModal');
  const closeBtn = document.getElementById('closeGiftModal');
  const modal = document.getElementById('giftModal');

  if (openBtn && closeBtn && modal) {
    openBtn.addEventListener('click', () => {
      modal.classList.remove('hide');
      modal.classList.add('show');
    });

    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
      modal.classList.add('hide');
    });

    // 背景クリックでも閉じる
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
        modal.classList.add('hide');
      }
    });
  } else {
    console.warn('モーダル用の要素が見つかりませんでした');
  }
});
