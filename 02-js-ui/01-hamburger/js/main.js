const button = document.getElementById('js-hambuerger-menu');
const drawerMenu = document.getElementById('js-drawer-menu');

button.addEventListener('click', function () {
  // ボタンの状態変更
  button.setAttribute('aria-expanded', 'true');
  // クラス名付与
  button.classList.toggle('is-open');
  drawerMenu.classList.toggle('is-open');
});
