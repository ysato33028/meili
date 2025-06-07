document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openGiftModal'); // 送るボタン
  const closeBtn = document.getElementById('closeMessageOnlyModal'); // ×ボタン
  const modal = document.getElementById('messageOnlyModal'); // モーダル本体

  if (openBtn && closeBtn && modal) {
    // モーダルを開く
    openBtn.addEventListener('click', () => {
      modal.classList.remove('hide');
      modal.classList.add('show');
    });

    // 閉じるボタンで閉じる
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
      modal.classList.add('hide');
    });

    // モーダルの背景クリックで閉じる
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
        modal.classList.add('hide');
      }
    });
  } else {
    console.warn('モーダル要素が見つかりませんでした');
  }
});
