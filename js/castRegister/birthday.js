window.addEventListener("DOMContentLoaded", () => {
  const yearSelect = document.getElementById("birthYear");
  const monthSelect = document.getElementById("birthMonth");
  const daySelect = document.getElementById("birthDay");

  // 年の選択肢（1900年〜今年）
  const currentYear = new Date().getFullYear();
  for (let y = currentYear; y >= 1900; y--) {
    yearSelect.add(new Option(y, y));
  }

  // 月の選択肢（1〜12）
  for (let m = 1; m <= 12; m++) {
    monthSelect.add(new Option(m, m));
  }

  // 日の選択肢を更新する関数
  function updateDays() {
    const year = parseInt(yearSelect.value);
    const month = parseInt(monthSelect.value);
    const daysInMonth = new Date(year, month, 0).getDate();

    daySelect.innerHTML = "";
    for (let d = 1; d <= daysInMonth; d++) {
      daySelect.add(new Option(d, d));
    }
  }

  // 月または年が変更されたら日を更新
  yearSelect.addEventListener("change", updateDays);
  monthSelect.addEventListener("change", updateDays);

  // 初期表示用
  updateDays();
});