const tabButtons = document.querySelectorAll('[data-tab]');
const tabContents = document.querySelectorAll('[data-content]');

// 全タブから1個のタブを取得
tabButtons.forEach((buttons, index) => {
  // buttons.removeAttribute('active');

  // 取得されたタブをクリック
  buttons.addEventListener('click', () => {
    // 一旦全タブからactive属性を外す
    tabButtons.forEach((btn, index) => {
      btn.removeAttribute('active');
    });

    // クリックしたタブにactive属性を付与
    buttons.setAttribute('active', true);

    // クリックされたボタンのdata - tabの値を取得して変数に保存
    let dataTab = buttons.getAttribute('data-tab');

    tabContents.forEach((cts, index) => {
      let dataContent = cts.getAttribute('data-content');

      if (dataTab === dataContent) {
        cts.setAttribute('active', true);
      } else {
        cts.removeAttribute('active');
      }
    });
  });
});
