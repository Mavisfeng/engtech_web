// ---------- SPA 導覽 ----------
const pages = document.querySelectorAll("[data-page]");
const navLinks = document.querySelectorAll("[data-nav]");
const navMenu = document.getElementById("navMenu");
const navToggle = document.getElementById("navToggle");

function showPage(id) {
  pages.forEach((page) => {
    page.classList.toggle("active", page.id === id);
  });

  navLinks.forEach((link) => {
    if (link.classList.contains("nav-link")) {
      link.classList.toggle("active", link.dataset.nav === id);
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (window.innerWidth <= 720) {
    navMenu.classList.remove("open");
  }
}

navLinks.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.nav;
    if (target && document.getElementById(target)) {
      showPage(target);
    }
  });
});

// 手機選單開關
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// ---------- 文章資料 ----------
const articleData = [
  {
    id: "project-based-learning",
    title: "為什麼我們選擇「專案制」而不是「寫習題」？",
    tag: "教學設計 · PBL",
    readTime: "約 5 分鐘閱讀",
    date: "2026-01-02",
    audience: "家長 / 老師",
    body: `
      <p>
        很多家長會問：「孩子寫很多題目，成績不是就會變好嗎？」在程式課裡，若只做大量題目，
        孩子很容易把學習等同於「考試」，卻忘了程式真正的價值，是解決問題與創造作品。
      </p>
      <p>
        因此我們以 <strong>專案制 (Project-Based Learning)</strong> 設計課程：每一個單元，都有清楚的作品目標，
        包含遊戲、互動作品或感測專題。孩子在思考「我要做什麼樣的作品？」的同時，也會自然練習需求分析、拆解任務與規劃進度。
      </p>
      <h3>專案制的三個關鍵好處</h3>
      <ul>
        <li><strong>記得住：</strong> 每個作品背後都有故事，比起公式更容易被記住。</li>
        <li><strong>看得見：</strong> 家長與孩子都可以看到成果，學習成就感更明確。</li>
        <li><strong>說得出：</strong> 孩子可以向同學或評審介紹作品，練習表達與簡報能力。</li>
      </ul>
      <p>
        在設計課程時，我們會刻意留下一些「模糊地帶」，讓孩子自己做小小的實驗，嘗試不同寫法再比較優劣。
        這種探索的過程，往往比單純抄寫解答更能培養真正的問題解決能力。
      </p>
    `
  },
  {
    id: "scratch-to-python",
    title: "從 Scratch 過渡到 Python：我們怎麼設計不斷層？",
    tag: "學習路徑 · Scratch → Python",
    readTime: "約 6 分鐘閱讀",
    date: "2025-12-10",
    audience: "國小高年級 / 國中",
    body: `
      <p>
        很多孩子在 Scratch 表現很好，一進到 Python 卻突然卡關。關鍵不是能力，而是
        <strong>心態與轉換設計</strong>：從「拖積木」變成「打字」，
        若沒有設計好過渡期，很容易讓孩子覺得「程式變得好難」。
      </p>
      <p>
        在課程設計上，我們會先從孩子熟悉的 Scratch 專案出發，例如計時器或小遊戲，
        然後用簡化版的 Python 一步一步重現同樣的邏輯，讓孩子發現：<em>原來只是寫法不同，想法是一樣的。</em>
      </p>
      <h3>三個過渡設計小技巧</h3>
      <ul>
        <li><strong>一一對應：</strong> 把 Scratch 積木與 Python 語法做對照表，降低陌生感。</li>
        <li><strong>容錯設計：</strong> 先教可讀性高、結構清楚的寫法，不急著追求「最短程式碼」。</li>
        <li><strong>專題延伸：</strong> 讓孩子把熟悉的 Scratch 作品，改寫成 Python 版，感受成長。</li>
      </ul>
      <p>
        當孩子發現自己可以用 Python 寫出「看得懂、玩得動」的作品時，自信會自然提升，
        也更願意接受之後的進階觀念，例如函式、模組與資料結構。
      </p>
    `
  },
  {
    id: "ai-assistant",
    title: "讓 AI 當「助教」而不是「答案機」",
    tag: "AI 教育 · 學習策略",
    readTime: "約 4 分鐘閱讀",
    date: "2025-11-05",
    audience: "對 AI 教學感興趣的家長 / 老師",
    body: `
      <p>
        現在的孩子很快就會接觸到各種 AI 工具，如果只把 AI 當成「可以幫我把作業寫完」的答案機，
        其實會錯過一個練習思考與提問的好機會。
      </p>
      <p>
        在我們的課程裡，AI 的角色是 <strong>助教</strong>：可以幫忙解釋錯誤訊息、提供不同寫法建議、
        甚至協助孩子產生作品點子，但最後做決定的，永遠是學習者自己。
      </p>
      <h3>如何教孩子正確使用 AI？</h3>
      <ul>
        <li>請孩子先自己寫出「版本 0」，再請 AI 幫忙調整與優化。</li>
        <li>遇到錯誤時，優先請孩子自己猜原因，再用 AI 驗證想法。</li>
        <li>讓孩子練習對 AI 下「好問題」，包含限制條件與期待成果。</li>
      </ul>
      <p>
        這樣的使用方式，可以讓 AI 變成「思考的放大器」，而不是「思考的替代品」。
        長期下來，孩子會更有能力駕馭工具，而不是被工具牽著走。
      </p>
    `
  }
];

// DOM elements for main article
const articleListEl = document.getElementById("articleList");
const articleTagEl = document.getElementById("articleTag");
const articleReadingTimeEl = document.getElementById("articleReadingTime");
const articleTitleEl = document.getElementById("articleTitle");
const articleMetaEl = document.getElementById("articleMeta");
const articleBodyEl = document.getElementById("articleBody");

let currentArticleId = articleData[0].id;

function renderArticleList() {
  articleListEl.innerHTML = "";
  articleData.forEach((article) => {
    const item = document.createElement("button");
    item.className = "article-item";
    if (article.id === currentArticleId) {
      item.classList.add("active");
    }
    item.dataset.articleId = article.id;
    item.innerHTML = `
      <div class="article-item-title">${article.title}</div>
      <div class="article-item-meta">
        <span>${article.tag}</span>
        <span>${article.readTime}</span>
      </div>
    `;
    item.addEventListener("click", () => {
      currentArticleId = article.id;
      renderArticleList();
      renderArticle(article.id);
    });
    articleListEl.appendChild(item);
  });
}

function renderArticle(id) {
  const article = articleData.find((a) => a.id === id) || articleData[0];
  articleTagEl.textContent = article.tag;
  articleReadingTimeEl.textContent = "⏱ " + article.readTime;
  articleTitleEl.textContent = article.title;
  articleMetaEl.textContent =
    "發佈日期：" + article.date + " · 適合對象：" + article.audience;
  articleBodyEl.innerHTML = article.body;
}

// 初始化
renderArticleList();
renderArticle(currentArticleId);
