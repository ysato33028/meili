function validateForm() {
  const nickname = document.getElementById("nickname").value.trim();
  const location = document.getElementById("location").value;
  const japanese = document.getElementById("japanese").value;
  const imageInput = document.getElementById("imageInput");
  const files = imageInput.files;

  if (!nickname || !location || !japanese) {
    alert("必須項目をすべて入力してください。");
    return false;
  }

  if (files.length < 1) {
    alert("画像を1枚以上アップロードしてください。");
    return false;
  }

  if (files.length > 4) {
    alert("画像は最大4枚までアップロードできます。");
    return false;
  }

  return true; // 全ての検証を通過した場合
}
