(function(){
"use strict";
var KEY=window.CAPL_KEY;
var IMG="img/";
var state={a:{},done:{}};
try{var s=localStorage.getItem(KEY);if(s)state=JSON.parse(s);}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch(e){}}
var subMode="hide";try{subMode=localStorage.getItem(KEY+"-sub")||"hide";}catch(e){}
var aud=document.getElementById("aud");
var app=document.getElementById("app");
var L="ABC";
var PLAY='<svg viewBox="0 0 10 10"><path d="M1 0l9 5-9 5z"/></svg>';
var PAUSE='<svg viewBox="0 0 10 10"><path d="M1 0h3v10H1zM6 0h3v10H6z"/></svg>';
var rate=1;
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function el(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e;}
function fmt(t){t=Math.max(0,t);var m=Math.floor(t/60),s=Math.floor(t%60);return m+":"+(s<10?"0":"")+s;}
function status(m){document.getElementById("audioStatus").textContent=m;}

// ---------- speech (years without a recording) ----------
var synth=window.speechSynthesis||null, VO={f:null,m:null};
var FEM=/female|woman|samantha|zira|aria|jenny|ava|allison|susan|karen|moira|tessa|serena|victoria|libby|sonia|emma|michelle|google us english|google uk english female/i;
var MAL=/\bmale\b|\bman\b|david|guy|daniel|alex|fred|mark|george|ryan|eric|christopher|tom|aaron|google uk english male/i;
function pickVoices(){
  if(!synth)return;var vs=synth.getVoices().filter(function(v){return /^en[-_](US|GB|AU|CA|IE)/i.test(v.lang)||/^en$/i.test(v.lang);});
  if(!vs.length)return;
  var us=vs.filter(function(v){return /US/i.test(v.lang);});var pool=us.length?us:vs;
  VO.f=pool.filter(function(v){return FEM.test(v.name)&&!/male\b/i.test(v.name.replace(/female/i,""));})[0]||vs.filter(function(v){return FEM.test(v.name);})[0]||pool[0];
  VO.m=pool.filter(function(v){return MAL.test(v.name)&&!FEM.test(v.name);})[0]||vs.filter(function(v){return MAL.test(v.name)&&!FEM.test(v.name);})[0]||null;
}
if(synth){pickVoices();if(synth.onvoiceschanged!==undefined)synth.onvoiceschanged=pickVoices;}
function isMale(sp){return /^(M|M1|M2|B|Man|Boy|Anchor)$/.test(sp);}
function sayText(t){return t.replace(/\[[^\]]*\]|\([^)]*\)/g," ").replace(/\s+/g," ").trim();}
var ttsTok=0, ttsU=null;
function ttsStop(){ttsTok++;if(synth)synth.cancel();if(ttsU){paint(ttsU,false);ttsU=null;}}
function ttsRun(U,seq){ // seq: list of line indexes, -1 = pause
  if(!synth){status("這個瀏覽器不支援語音朗讀，請改用 Chrome、Edge 或 Safari。");return;}
  stopAudio();ttsStop();var tok=++ttsTok;ttsU=U;cur=U;paint(U,true);var k=0;
  function next(){
    if(tok!==ttsTok)return;
    if(k>=seq.length){paint(U,false);ttsU=null;mark(U,-1);U.prog.firstChild.style.width="100%";return;}
    var i=seq[k++];U.prog.firstChild.style.width=(k/seq.length*100)+"%";
    if(i<0){mark(U,-1);setTimeout(next,1400);return;}
    var ln=U.u.sub[i],txt=sayText(ln[1]);mark(U,i);
    if(!txt||ln[0]==="♪"){setTimeout(next,300);return;}
    var u=new SpeechSynthesisUtterance(txt);u.lang="en-US";u.rate=0.92*rate;
    var male=isMale(ln[0]);
    if(male&&VO.m){u.voice=VO.m;}else if(!male&&VO.f){u.voice=VO.f;}else if(VO.f){u.voice=VO.f;}
    if(male&&!VO.m)u.pitch=0.7;else if(!male)u.pitch=1.1;
    u.onend=function(){setTimeout(next,ln[0]==="Q"?500:250);};u.onerror=function(){setTimeout(next,200);};
    synth.speak(u);
  }
  next();
}
function fullSeq(U){var a=[];U.u.sub.forEach(function(_,i){a.push(i);});return a.concat([-1],a);}
function fromSeq(U,i){var a=[];for(var j=i;j<U.u.sub.length;j++)a.push(j);return a;}

// ---------- units ----------
var units=[], cur=null, stopAt=null, lineMode=false, lastLine=-1;
function buildUnit(sec,u){
  var t=u.audio?(TIMES[u.id]||null):null;
  var box=el("div","unit");box.id=u.id;
  var head=el("div","uhead");head.appendChild(el("h3",null,esc(u.label)));
  head.appendChild(el("span","tag",u.audio?"🎧 原音":"🗣 語音朗讀"));
  box.appendChild(head);
  var pl=el("div","player");
  var btn=el("button","play",PLAY+"<span>播放這一題</span>");btn.type="button";
  var prog=el("div","prog");prog.appendChild(el("i"));
  var time=el("span","time",t?("0:00 / "+fmt(t.e-t.s)):"念兩遍");
  pl.appendChild(btn);pl.appendChild(prog);pl.appendChild(time);
  var tg=el("button","btn subtoggle","顯示字幕");tg.type="button";pl.appendChild(tg);
  box.appendChild(pl);
  if(u.img){var im=el("div","imgs");u.img.forEach(function(src,i){var g=document.createElement("img");g.src=IMG+src;g.alt=(u.alt&&u.alt[i])||"";g.loading="lazy";im.appendChild(g);});box.appendChild(im);}
  var sub=el("div","sub");sub.hidden=true;
  sub.appendChild(el("div","hint","點任一句從那裡播放；「只播這句」可以一句一句練。"));
  u.sub.forEach(function(line,i){var p=el("p",null,(line[0]?'<span class="sp">'+esc(line[0])+'</span>':'')+esc(line[1]));p.dataset.i=i;sub.appendChild(p);});
  var one=el("button","btn","只播這句");one.type="button";one.style.marginTop="6px";one.disabled=true;sub.appendChild(one);
  box.appendChild(sub);
  var U={id:u.id,box:box,t:t,sub:sub,btn:btn,prog:prog,time:time,tg:tg,one:one,sel:-1,u:u};
  units.push(U);
  btn.addEventListener("click",function(){toggle(U);});
  prog.addEventListener("click",function(ev){if(!t)return;var r=prog.getBoundingClientRect();var f=(ev.clientX-r.left)/r.width;start(U,t.s+f*(t.e-t.s),t.e,false);});
  tg.addEventListener("click",function(){setSub(U,sub.hidden);});
  sub.addEventListener("click",function(ev){var p=ev.target.closest("p");if(!p)return;var i=+p.dataset.i;U.sel=i;one.disabled=false;
    if(t){var ln=t.lines[i];if(ln)start(U,ln[0],t.e,false);}else ttsRun(U,fromSeq(U,i));});
  one.addEventListener("click",function(){if(U.sel<0)return;if(t){var ln=t.lines[U.sel];start(U,ln[0],ln[1],true);}else ttsRun(U,[U.sel]);});
  box.appendChild(buildQ(U,u.qs));
  return box;
}
function setSub(U,show){U.sub.hidden=!show;U.tg.textContent=show?"隱藏字幕":"顯示字幕";}
function buildQ(U,qs){
  var wrap=el("div"),picks={};
  qs.forEach(function(q){
    var key=String(q.n),qd=el("div","q");
    var o=el("div","opts"+(q.opts?"":" pics"));var n=q.opts?q.opts.length:3;
    picks[key]={q:q,ans:q.ans,btns:[]};
    for(var i=0;i<n;i++){
      var b=el("button","opt","<b>("+L[i]+")</b><span>"+(q.opts?esc(q.opts[i]):"")+"</span>");b.type="button";b.dataset.l=L[i];b.setAttribute("aria-pressed","false");
      (function(b){b.addEventListener("click",function(){var P=picks[key];if(P.locked)return;
        P.btns.forEach(function(x){x.setAttribute("aria-pressed",String(x===b));});state.a[key]=b.dataset.l;save();});})(b);
      picks[key].btns.push(b);o.appendChild(b);
    }
    qd.appendChild(o);wrap.appendChild(qd);
    if(state.a[key])picks[key].btns.forEach(function(x){x.setAttribute("aria-pressed",String(state.a[key]===x.dataset.l));});
  });
  var act=el("div","actions");
  var chk=el("button","btn primary","對答案");chk.type="button";
  var rst=el("button","btn","重新作答");rst.type="button";
  var ver=el("span","verdict");
  act.appendChild(chk);act.appendChild(rst);act.appendChild(ver);wrap.appendChild(act);
  var notes=el("div","notes");notes.hidden=true;
  (U.u.notes||[]).forEach(function(nt){
    var h='<div class="note"><h4>第 '+nt.n+' 題解析　答案 ('+esc(U.u.qs[0].ans)+')</h4><span class="lab">答題關鍵</span><p>'+esc(nt.key)+'</p>';
    if(nt.wrong&&nt.wrong.length)h+='<span class="lab w">其他選項為什麼不對</span><ul>'+nt.wrong.map(function(x){return"<li>"+esc(x)+"</li>";}).join("")+"</ul>";
    if(nt.words)h+='<span class="lab v">單字</span><p>'+esc(nt.words)+"</p>";
    notes.insertAdjacentHTML("beforeend",h+"</div>");});
  wrap.appendChild(notes);
  function grade(){
    var all=0,ok=0;
    Object.keys(picks).forEach(function(k){var P=picks[k];P.locked=true;all++;
      var got=(P.btns.filter(function(x){return x.getAttribute("aria-pressed")==="true";})[0]||{dataset:{}}).dataset.l||"";
      if(got===P.ans)ok++;
      P.btns.forEach(function(x){x.disabled=true;var l=x.dataset.l;if(P.ans===l)x.classList.add("right");else if(got===l)x.classList.add("wrong");});
      state.done[k]=(got===P.ans)?1:0;});
    ver.textContent=ok===all?"答對 ✓":"答錯 ✗";ver.className="verdict "+(ok===all?"ok":"bad");
    notes.hidden=false;setSub(U,true);chk.disabled=true;save();refresh();
  }
  chk.addEventListener("click",function(){
    var empty=Object.keys(picks).some(function(k){return !picks[k].btns.some(function(x){return x.getAttribute("aria-pressed")==="true";});});
    if(empty&&!confirm("還沒選答案，確定要對答案嗎？"))return;grade();});
  rst.addEventListener("click",function(){Object.keys(picks).forEach(function(k){var P=picks[k];P.locked=false;P.btns.forEach(function(x){x.disabled=false;x.classList.remove("right","wrong");x.setAttribute("aria-pressed","false");});delete state.a[k];delete state.done[k];});
    ver.textContent="";chk.disabled=false;notes.hidden=true;setSub(U,subMode==="show");save();refresh();});
  if(Object.keys(picks).every(function(k){return state.done[k]!==undefined;}))setTimeout(grade,0);
  return wrap;
}
function render(){
  var toc=document.getElementById("toc"),qm=document.getElementById("qmap");
  DATA.forEach(function(sec){
    var s=el("section","sec");s.id=sec.id;
    s.appendChild(el("h2",null,esc(sec.title)));
    s.appendChild(el("p","rule",esc(sec.rule)));
    sec.units.forEach(function(u){s.appendChild(buildUnit(sec,u));});
    app.appendChild(s);
    var a=el("a",null,esc(sec.title));a.href="#"+sec.id;toc.appendChild(a);
    sec.units.forEach(function(u){u.qs.forEach(function(q){var a=el("a",null,q.n);a.href="#"+u.id;a.dataset.n=q.n;qm.appendChild(a);});});
  });
  refresh();
}
function refresh(){
  var tot=0,ok=0,done=0;
  document.querySelectorAll("#qmap a").forEach(function(a){var k=a.dataset.n;tot++;a.className="";if(state.done[k]!==undefined){done++;if(state.done[k]){ok++;a.className="ok";}else a.className="bad";}});
  document.getElementById("tally").textContent="已作答 "+done+"/"+tot+"　答對 "+ok;
}
function mark(U,li){
  if(li===lastLine&&U===cur)return;lastLine=li;
  U.sub.querySelectorAll("p").forEach(function(p){p.classList.toggle("cur",+p.dataset.i===li);});
  if(li>=0){document.getElementById("now").textContent=U.u.label+"　"+U.u.sub[li][1];var p=U.sub.querySelector('p[data-i="'+li+'"]');if(p&&!U.sub.hidden){var r=p.getBoundingClientRect();if(r.top<60||r.bottom>innerHeight-10)p.scrollIntoView({block:"center",behavior:"smooth"});}}
}

// ---------- recorded audio ----------
function toggle(U){
  if(!U.t){if(ttsU===U){ttsStop();return;}ttsRun(U,fullSeq(U));return;}
  if(cur===U&&aud&&!aud.paused){aud.pause();return;}
  if(cur===U&&aud&&aud.currentTime>0&&aud.currentTime<U.t.e-0.2&&!lineMode&&aud.getAttribute("src")===U.u.audio){aud.play();return;}
  start(U,U.t.s,U.t.e,false);
}
function stopAudio(){if(aud&&!aud.paused)aud.pause();}
function start(U,from,to,line){
  ttsStop();
  if(cur&&cur!==U)paint(cur,false);
  cur=U;stopAt=to;lineMode=line;
  var go=function(){try{aud.currentTime=from;}catch(e){}aud.playbackRate=rate;var p=aud.play();if(p&&p.catch)p.catch(function(e){status("無法播放："+e.message);});};
  if(aud.getAttribute("src")!==U.u.audio){aud.setAttribute("src",U.u.audio);aud.addEventListener("loadedmetadata",go,{once:true});aud.load();}
  else if(aud.readyState<1){aud.addEventListener("loadedmetadata",go,{once:true});aud.load();}else go();
}
function paint(U,on){U.btn.classList.toggle("on",on);U.btn.innerHTML=(on?PAUSE+"<span>停止</span>":PLAY+"<span>播放這一題</span>");}
if(aud){
  aud.addEventListener("play",function(){if(cur)paint(cur,true);});
  aud.addEventListener("pause",function(){if(cur&&cur.t)paint(cur,false);});
  aud.addEventListener("waiting",function(){status("錄音載入中……");});
  aud.addEventListener("playing",function(){status("");});
  aud.addEventListener("error",function(){if(aud.getAttribute("src"))status("錄音檔無法載入，請確認網路連線。");});
  aud.addEventListener("timeupdate",function(){
    if(!cur||!cur.t)return;var t=aud.currentTime,T=cur.t;
    if(stopAt!=null&&t>=stopAt){aud.pause();stopAt=null;return;}
    var f=Math.min(1,Math.max(0,(t-T.s)/(T.e-T.s)));cur.prog.firstChild.style.width=(f*100)+"%";cur.time.textContent=fmt(t-T.s)+" / "+fmt(T.e-T.s);
    var li=-1;for(var i=0;i<T.lines.length;i++){if(t>=T.lines[i][0]-0.05)li=i;}
    var endFirst=T.lines[T.lines.length-1][1]+0.6;if(t>endFirst)li=-1;
    mark(cur,li);
  });
}
document.querySelectorAll("[data-rate]").forEach(function(b){b.addEventListener("click",function(){rate=+b.dataset.rate;if(aud)aud.playbackRate=rate;document.querySelectorAll("[data-rate]").forEach(function(x){x.setAttribute("aria-pressed",String(x===b));});});});
function setMode(m){subMode=m;try{localStorage.setItem(KEY+"-sub",m);}catch(e){}document.querySelectorAll("[data-sub]").forEach(function(x){x.setAttribute("aria-pressed",String(x.dataset.sub===m));});
  units.forEach(function(U){var graded=U.box.querySelector(".verdict").textContent;setSub(U,m==="show"||!!graded);});}
document.querySelectorAll("[data-sub]").forEach(function(b){b.addEventListener("click",function(){setMode(b.dataset.sub);});});
document.getElementById("resetAll").addEventListener("click",function(){if(!confirm("清除全部作答紀錄？"))return;state={a:{},done:{}};save();location.reload();});
if(!window.HAS_AUDIO&&!synth)status("這個瀏覽器不支援語音朗讀，請改用 Chrome、Edge 或 Safari。");
window.addEventListener("pagehide",function(){if(synth)synth.cancel();});
render();setMode(subMode);
})();
