/* ========== 單頁切換 ========== */

const pages = document.querySelectorAll("[data-page]");
const navLinks = document.querySelectorAll("[data-nav]");
const navMenu = document.getElementById("navMenu");
const navToggle = document.getElementById("navToggle");

// 顯示指定 page
function showPage(id) {
  pages.forEach((p) => p.classList.toggle("active", p.id === id));

  navLinks.forEach((btn) =>
    btn.classList.toggle("active", btn.dataset.nav === id)
  );

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// 綁定導覽列按鈕
navLinks.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.nav;
    showPage(target);

    if (window.innerWidth <= 720) {
      navMenu.classList.remove("open");
    }
  });
});

// 手機選單
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

/* ========== 文章資料 ========== */

const articleData = [
  {
    id: "a1",
    title: "孩子為什麼需要學習程式？",
    body: `
      <p>程式不只是電腦技能，而是一種<strong>思考方式</strong>。</p>
      <p>我們在課堂上訓練孩子：</p>
      <ul>
        <li>拆解問題</li>
        <li>找出規則</li>
        <li>用程式表達解法</li>
      </ul>
      <p>這些能力遠超過語法本身。</p>
    `,
  },
  {
    id: "a2",
    title: "Scratch 到 Python 的學習銜接",
    body: `
      <p>Scratch 是入門的最佳工具。</p>
      <p>當孩子熟悉邏輯後，我們再進入 Python。</p>
      <p>學習路徑：</p>
      <ol>
        <li>圖形化積木 → 邏輯認知</li>
        <li>文字語法 → 抽象思考</li>
        <li>專題製作 → 解決真實問題</li>
      </ol>
    `,
  },
];

/* ========== 文章渲染 ========== */

const articleListEl = document.getElementById("articleList");
const articleBodyEl = document.getElementById("articleBody");

// 建立列表
function renderArticleList() {
  articleListEl.innerHTML = "";

  articleData.forEach((a, idx) => {
    const btn = document.createElement("button");
    btn.className = "article-item";
    if (idx === 0) btn.classList.add("active");

    btn.innerHTML = a.title;

    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".article-item")
        .forEach((el) => el.classList.remove("active"));
      btn.classList.add("active");

      renderArticle(a);
    });

    articleListEl.appendChild(btn);
  });

  renderArticle(articleData[0]);
}

// 顯示右側文章
function renderArticle(a) {
  articleBodyEl.innerHTML = a.body;
}

// 初始化
renderArticleList();
