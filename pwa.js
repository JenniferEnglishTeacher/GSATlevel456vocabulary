// App mode for the Vocabulary Board: installable on phones ("加到主畫面"), works on a weak connection,
// warns students who opened the site inside LINE / Threads / Instagram / Facebook, and shows the install guide
// on the dashboard (#installGuide). Loaded on every page by tracker.js, so newly built pages get it too.
(function () {
  if (window.__vocabPwa) return;
  window.__vocabPwa = true;

  const base = (() => {
    const s = document.currentScript && document.currentScript.src;
    return s ? s.replace(/pwa\.js(\?.*)?$/, "") : "";
  })();
  const ua = navigator.userAgent || "";
  const isIOS = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isIPad = /iPad/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isAndroid = /Android/i.test(ua);
  const inApp = (() => {
    if (/\bLine\//i.test(ua)) return "LINE";
    if (/Barcelona/i.test(ua)) return "Threads";
    if (/Instagram/i.test(ua)) return "Instagram";
    if (/FBAN|FBAV|FB_IAB|FBIOS/i.test(ua)) return "Facebook";
    if (/Messenger/i.test(ua)) return "Messenger";
    if (/MicroMessenger/i.test(ua)) return "WeChat";
    if (/TikTok|musical_ly|BytedanceWebview/i.test(ua)) return "TikTok";
    return "";
  })();
  const standalone = window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
  const FONT = "Arial,'Noto Sans TC','Microsoft JhengHei',sans-serif";

  // ---------- Head tags (manifest, icons, theme colour) ----------
  function addHead(tag, attrs) {
    const sel = Object.entries(attrs).filter(([k]) => k === "rel" || k === "name").map(([k, v]) => `${tag}[${k}="${v}"]`)[0];
    if (sel && document.head.querySelector(sel)) return;
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.append(el);
  }
  addHead("link", { rel: "manifest", href: base + "manifest.webmanifest" });
  addHead("meta", { name: "theme-color", content: "#087f8c" });
  addHead("link", { rel: "apple-touch-icon", href: base + "icons/apple-touch-icon.png" });
  addHead("meta", { name: "apple-mobile-web-app-capable", content: "yes" });
  addHead("meta", { name: "mobile-web-app-capable", content: "yes" });
  addHead("meta", { name: "apple-mobile-web-app-title", content: "單字學習板" });
  addHead("meta", { name: "apple-mobile-web-app-status-bar-style", content: "default" });

  // ---------- Service worker ----------
  if ("serviceWorker" in navigator && window.isSecureContext) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register(base + "sw.js", { scope: base || "./" })
        .then(reg => { try { reg.update(); } catch (e) { /* ignore */ } }) // pick up new site versions right away
        .catch(() => {});
    });
  }

  // ---------- Android one-tap install ----------
  let deferredPrompt = null;
  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferredPrompt = event;
    document.querySelectorAll("[data-pwa-install]").forEach(b => { b.hidden = false; });
  });
  window.addEventListener("appinstalled", () => {
    deferredPrompt = null;
    document.querySelectorAll("[data-pwa-install]").forEach(b => { b.hidden = true; });
  });
  function promptInstall() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.finally(() => { deferredPrompt = null; });
  }

  function copyLink(button) {
    const url = location.href.replace(/[?&]openExternalBrowser=1/, "");
    const ok = () => { button.textContent = "✓ 已複製連結 Copied"; };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(ok, () => window.prompt("複製這個網址 Copy this link:", url));
    else window.prompt("複製這個網址 Copy this link:", url);
  }

  // ---------- Warning bar inside LINE / Threads / Instagram / Facebook ----------
  function inAppBar() {
    if (!inApp || standalone) return;
    try { if (sessionStorage.getItem("vocab-inapp-dismissed")) return; } catch (e) { /* ignore */ }
    const bar = document.createElement("div");
    bar.setAttribute("role", "alert");
    bar.style.cssText = `position:sticky;top:0;z-index:9000;background:#fff4e5;border-bottom:2px solid #e07a5f;color:#5a2d0c;padding:10px 12px;font:14px/1.5 ${FONT}`;
    const browser = isIOS ? "Safari" : "Chrome";
    let openBtn = "";
    if (inApp === "LINE") openBtn = `<button type="button" data-open-ext style="${btn("#e07a5f")}">用 ${browser} 開啟</button>`;
    else if (isAndroid) openBtn = `<button type="button" data-open-ext style="${btn("#e07a5f")}">用 Chrome 開啟</button>`;
    const how = isIOS
      ? `請點右上角 <b>⋯</b> 或右下角 <b>⧉</b>，選「<b>用 Safari 開啟</b>」（或複製連結貼到 Safari）。`
      : `請點右上角 <b>⋮</b>，選「<b>用 Chrome 開啟</b>／在瀏覽器中開啟」。`;
    bar.innerHTML = `<div style="max-width:960px;margin:0 auto">
      <b>⚠ 你正在 ${inApp} 裡開這個網站。</b>這裡的姓名、複習清單和還沒送出的成績，和 ${browser} 是分開存的，關掉可能就不見了。${how}
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px">${openBtn}
        <button type="button" data-copy style="${btn("#087f8c")}">複製連結 Copy link</button>
        <button type="button" data-close style="${btn("#fff", "#5a2d0c", "1px solid #d9b8a6")}">先這樣 ✕</button></div></div>`;
    const ext = bar.querySelector("[data-open-ext]");
    if (ext) ext.addEventListener("click", () => {
      if (inApp === "LINE") {
        const u = new URL(location.href); u.searchParams.set("openExternalBrowser", "1"); location.href = u.toString();
      } else {
        location.href = `intent://${location.host}${location.pathname}${location.search}#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url=${encodeURIComponent(location.href)};end`;
      }
    });
    bar.querySelector("[data-copy]").addEventListener("click", e => copyLink(e.currentTarget));
    bar.querySelector("[data-close]").addEventListener("click", () => {
      bar.remove();
      try { sessionStorage.setItem("vocab-inapp-dismissed", "1"); } catch (e) { /* ignore */ }
    });
    document.body.prepend(bar);
  }

  function btn(bg, color, border) {
    return `padding:8px 14px;border-radius:999px;border:${border || "0"};background:${bg};color:${color || "#fff"};font:700 14px ${FONT};cursor:pointer`;
  }

  // ---------- Install guide on the dashboard ----------
  function guide() {
    const host = document.getElementById("installGuide");
    if (!host) return;
    if (standalone) { host.hidden = true; return; }
    const KEY = "vocab-install-guide-open";
    let open = true;
    try { open = localStorage.getItem(KEY) !== "0"; } catch (e) { /* ignore */ }
    const steps = {
      ios: [
        "用 <b>Safari</b> 開啟本網站首頁（不要在 LINE / Threads / IG 裡開）",
        "點下方工具列中間的 <b>分享鍵</b>（方框加向上箭頭 ⬆）",
        "往下滑，點「<b>加入主畫面</b>」",
        "右上角按「<b>新增</b>」，主畫面就會出現「單字學習板」圖示",
        "以後都從主畫面圖示打開。<b>第一次打開請再輸入一次姓名</b>（iPhone 的主畫面 App 和 Safari 分開存資料）"
      ],
      ipad: [
        "用 <b>Safari</b> 開啟本網站首頁（不要在 LINE / Threads / IG 裡開）",
        "點網址列<b>右上角</b>的 <b>分享鍵</b>（方框加向上箭頭 ⬆）",
        "往下滑，點「<b>加入主畫面</b>」",
        "右上角按「<b>加入</b>／<b>新增</b>」，主畫面就會出現「單字學習板」圖示",
        "以後都從主畫面圖示打開。<b>第一次打開請再輸入一次姓名</b>（iPad 的主畫面 App 和 Safari 分開存資料）"
      ],
      android: [
        "用 <b>Chrome</b> 開啟本網站首頁（不要在 LINE / Threads / IG 裡開）",
        "點網址列右側的 <b>⋮</b>（更多）",
        "點「<b>加到主畫面</b>」或「<b>安裝應用程式</b>」",
        "按「<b>安裝</b>／<b>新增</b>」，主畫面就會出現「單字學習板」圖示",
        "以後都從主畫面圖示打開，姓名和複習清單會保留"
      ]
    };
    let tab = isIPad ? "ipad" : isIOS ? "ios" : "android";
    host.className = "install-guide";
    function render() {
      host.innerHTML = `
        <div class="ig-head">
          <span class="ig-icon" aria-hidden="true">📲</span>
          <div class="ig-title"><b>加到主畫面，一點就能進站</b><span>Add to Home Screen — open it like an app</span></div>
          <button type="button" class="ig-toggle" aria-expanded="${open}">${open ? "− 收合" : "+ 展開"}</button>
        </div>
        <div class="ig-body" ${open ? "" : "hidden"}>
          <p>只要設定一次，之後就能像 App 一樣從主畫面的圖示開啟題庫，不必每次找網址；網路不穩也能打開看過的頁面，測驗成績沒送出會自動補送給老師。</p>
          <p class="ig-note">從 Threads、LINE、Instagram 等 App 裡點連結進來的，練習進度會另外存，和 Safari、Chrome 裡的不相通。請先改用瀏覽器開啟本題庫（iPhone / iPad 用 Safari，Android 用 Chrome），再照下面的步驟做。</p>
          <button type="button" class="ig-install" data-pwa-install ${deferredPrompt ? "" : "hidden"}>⬇ 一鍵安裝到主畫面 Install</button>
          <div class="ig-tabs" role="tablist">
            <button type="button" role="tab" data-tab="ios" aria-selected="${tab === "ios"}"><b>iPhone</b><span>Safari</span></button>
            <button type="button" role="tab" data-tab="ipad" aria-selected="${tab === "ipad"}"><b>iPad</b><span>Safari</span></button>
            <button type="button" role="tab" data-tab="android" aria-selected="${tab === "android"}"><b>Android</b><span>Chrome</span></button>
          </div>
          <ol class="ig-steps">${steps[tab].map(s => `<li>${s}</li>`).join("")}</ol>
          <button type="button" class="ig-copy">🔗 複製本站連結 Copy link</button>
        </div>`;
      host.querySelector(".ig-toggle").addEventListener("click", () => {
        open = !open;
        try { localStorage.setItem(KEY, open ? "1" : "0"); } catch (e) { /* ignore */ }
        render();
      });
      host.querySelectorAll("[data-tab]").forEach(b => b.addEventListener("click", () => { tab = b.dataset.tab; render(); }));
      const inst = host.querySelector("[data-pwa-install]");
      if (inst) inst.addEventListener("click", promptInstall);
      const copy = host.querySelector(".ig-copy");
      if (copy) copy.addEventListener("click", e => copyLink(e.currentTarget));
    }
    render();
  }

  function start() { inAppBar(); guide(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
