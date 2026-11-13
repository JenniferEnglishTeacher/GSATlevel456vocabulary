// Extract DEFS and QUESTION_POOL from the LiveABC unit quiz pages.  node liveabc_extract.js <repo dir> <out json>
const fs = require("fs"), vm = require("vm"), path = require("path");
const [dir, outFile] = process.argv.slice(2);
const out = {};
for (const f of fs.readdirSync(dir)) {
  const m = /^(basic|advanced)-u(\d+)\.html$/.exec(f);
  if (!m) continue;
  const s = fs.readFileSync(path.join(dir, f), "utf8");
  const grab = (name, open, close) => {
    const i = s.search(new RegExp("(?:const|let|var)\\s+" + name + "\\s*=\\s*\\" + open));
    if (i < 0) return null;
    const j = s.indexOf("\n" + close + ";", i);
    return s.slice(s.indexOf("=", i) + 1, j + 2);
  };
  try {
    const DEFS = vm.runInNewContext("(" + grab("DEFS", "{", "}") + ")");
    const POOL = vm.runInNewContext("(" + grab("QUESTION_POOL", "[", "]") + ")");
    const title = (/<title>(.*?)<\/title>/.exec(s) || [])[1];
    (out[m[1]] = out[m[1]] || {})[m[2]] = { file: f, title, DEFS, POOL };
  } catch (e) { console.log("ERR", f, e.message); }
}
fs.writeFileSync(outFile, JSON.stringify(out));
for (const k of Object.keys(out)) console.log(k, Object.keys(out[k]).map(Number).sort((a, b) => a - b).map(u => `${u}:${out[k][u].POOL.length}/${Object.keys(out[k][u].DEFS).length}${out[k][u].file.startsWith(k) ? "" : "*"}`).join(" "));
