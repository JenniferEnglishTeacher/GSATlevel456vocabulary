// Two-voice reading for "A: … B: …" dialogues (TOEIC pages): A = a male voice, B = a female voice,
// each picked from the US or UK English voices on the device (accents mixed at random).
// Load after app.js / the quiz app: it wraps their global speak(); any other text is read as before.
(function () {
  if (typeof window.speak !== "function" || !("speechSynthesis" in window)) return;
  const original = window.speak;
  const FEMALE = /female|woman|zira|samantha|susan|hazel|libby|aria|jenny|sonia|karen|moira|tessa|serena|victoria|allison|ava|emma|michelle|natasha|kate|catherine|linda|heather|google us english|google uk english female/i;
  const MALE = /\bmale\b|\bman\b|david|mark|guy|daniel|alex|fred|george|ryan|thomas|james|christopher|eric|roger|aaron|arthur|oliver|brian|andrew|richard|google uk english male/i;
  let voices = [];
  const load = () => { voices = speechSynthesis.getVoices().filter(v => /^en[-_](US|GB)/i.test(v.lang)); };
  load();
  speechSynthesis.addEventListener && speechSynthesis.addEventListener("voiceschanged", load);
  const pick = list => list[Math.floor(Math.random() * list.length)] || null;
  function voiceFor(who) {
    if (!voices.length) load();
    const female = voices.filter(v => FEMALE.test(v.name));
    const male = voices.filter(v => MALE.test(v.name) && !FEMALE.test(v.name));
    return who === "A" ? pick(male) : pick(female);
  }
  function clean(s) {
    return String(s).replace(/【[^】]*】/g, "").replace(/_{3,}/g, "blank").replace(/<[^>]+>/g, " ").trim();
  }
  window.speak = function (text, rate) {
    const m = /^\s*A\s*[:：]\s*([\s\S]*?)\s+B\s*[:：]\s*([\s\S]+)$/.exec(String(text || ""));
    if (!m) return original.apply(this, arguments);
    speechSynthesis.cancel();
    const parts = [["A", clean(m[1])], ["B", clean(m[2])]];
    const say = i => {
      if (i >= parts.length) return;
      const [who, line] = parts[i];
      const u = new SpeechSynthesisUtterance(line);
      const v = voiceFor(who);
      if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = Math.random() < 0.5 ? "en-US" : "en-GB"; }
      u.rate = 1;  // natural speed and pitch for both speakers
      u.pitch = 1;
      u.onend = () => setTimeout(() => say(i + 1), 250);
      speechSynthesis.speak(u);
    };
    say(0);
  };
})();
