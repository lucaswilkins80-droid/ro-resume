<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>OfficialMxsery's Roblox Resume</title>
<style>
:root{--bg:#000;--mute:rgba(255,255,255,.55);--glass:rgba(255,255,255,.06);--line:rgba(255,255,255,.14)}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:var(--bg);color:#fff;font-family:Inter,system-ui,-apple-system,sans-serif;overflow-x:hidden;line-height:1.7}
#glow{position:fixed;width:500px;height:500px;border-radius:50%;pointer-events:none;z-index:0;background:radial-gradient(circle,rgba(255,255,255,.12),transparent 65%);transform:translate(-50%,-50%);left:50%;top:30%;transition:left .25s,top .25s}
.orb{position:fixed;border-radius:50%;border:1px solid var(--line);z-index:0;animation:float 14s ease-in-out infinite}
.o1{width:300px;height:300px;top:8%;right:-80px}
.o2{width:160px;height:160px;bottom:12%;left:-40px;animation-delay:-5s}
@keyframes float{50%{transform:translateY(-40px) rotate(20deg)}}
nav{position:fixed;top:16px;left:50%;transform:translateX(-50%);z-index:10;display:flex;gap:6px;padding:6px;background:var(--glass);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid var(--line);border-radius:99px;animation:drop 1s both}
nav a{color:var(--mute);text-decoration:none;font-size:13px;padding:8px 14px;border-radius:99px;transition:.3s}
nav a:hover{color:#000;background:#fff}
@keyframes drop{from{opacity:0;transform:translate(-50%,-30px)}}
section{position:relative;z-index:1;max-width:1000px;margin:auto;padding:110px 24px}
#home{min-height:100vh;display:flex;flex-direction:column;justify-content:center}
.tag{font-size:12px;letter-spacing:.3em;color:var(--mute);text-transform:uppercase}
h1{font-size:clamp(40px,9vw,100px);line-height:1.02;letter-spacing:-.04em;margin:16px 0}
h1 span{display:inline-block;animation:rise .9s both}
@keyframes rise{from{opacity:0;transform:translateY(60px);filter:blur(10px)}}
.type{font-size:clamp(16px,3vw,22px);color:var(--mute);min-height:34px}
.type i{border-right:2px solid #fff;margin-left:3px;animation:blink 1s steps(1) infinite}
@keyframes blink{50%{border-color:transparent}}
.btns{margin-top:32px;display:flex;gap:12px;flex-wrap:wrap}
.btn{padding:14px 26px;border-radius:99px;text-decoration:none;font-size:14px;border:1px solid var(--line);color:#fff;background:var(--glass);backdrop-filter:blur(12px);transition:.35s}
.btn.solid{background:#fff;color:#000}
.btn:hover{transform:translateY(-4px);box-shadow:0 10px 40px rgba(255,255,255,.18)}
h2{font-size:clamp(28px,6vw,52px);letter-spacing:-.03em;margin-bottom:28px}
.card{background:var(--glass);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid var(--line);border-radius:24px;padding:26px;transition:.4s}
.card:hover{transform:translateY(-6px);border-color:rgba(255,255,255,.4);background:rgba(255,255,255,.09)}
.intro p{color:rgba(255,255,255,.82);font-size:16px;margin-bottom:14px}
.intro p:last-child{margin:0}
.intro b{color:#fff}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:14px}
.grid .card h3{font-size:19px;margin-bottom:10px}
.row{font-size:13px;color:var(--mute);display:flex;gap:8px;margin-top:4px}
.row em{font-style:normal;color:#fff;min-width:78px;opacity:.5;text-transform:uppercase;font-size:11px;letter-spacing:.12em;padding-top:2px}
.row span{color:rgba(255,255,255,.85)}
.note{font-size:13px;color:var(--mute);margin:-12px 0 20px}
input{width:100%;background:var(--glass);border:1px solid var(--line);border-radius:99px;padding:14px 22px;color:#fff;font:inherit;outline:none;margin-bottom:20px;transition:.3s}
input:focus{border-color:#fff;box-shadow:0 0 24px rgba(255,255,255,.15)}
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:14px;margin-top:16px}
.num{font-size:44px;font-weight:700;letter-spacing:-.03em;line-height:1.2}
.stats p{color:var(--mute);font-size:13px}
.marq{overflow:hidden;border-block:1px solid var(--line);padding:18px 0;position:relative;z-index:1;white-space:nowrap}
.marq div{display:inline-block;animation:slide 24s linear infinite;font-size:20px;color:var(--mute)}
.marq b{margin:0 26px;color:#fff;font-weight:500}
@keyframes slide{to{transform:translateX(-50%)}}
.rv{opacity:0;transform:translateY(40px);filter:blur(8px);transition:.9s cubic-bezier(.2,.8,.2,1)}
.rv.on{opacity:1;transform:none;filter:none}
footer{position:relative;z-index:1;text-align:center;padding:40px;color:var(--mute);font-size:13px}
@media(max-width:560px){nav a{padding:8px 10px;font-size:12px}}
</style>
</head>
<body>
<div id="glow"></div><div class="orb o1"></div><div class="orb o2"></div>

<nav><a href="#home">Home</a><a href="#intro">Introduction</a><a href="#work">Resume</a></nav>

<section id="home">
<p class="tag">Roblox</p>
<h1 id="title"></h1>
<p class="type"><span id="typed"></span><i></i></p>
<div class="btns">
<a class="btn solid" href="#work">View Resume</a>
<a class="btn" href="#intro">Introduction</a>
</div>
</section>

<div class="marq"><div id="m"></div></div>

<section id="intro">
<h2 class="rv">Introduction</h2>
<div class="card intro rv">
<p>Greetings everyone! If you are reading this it probably means I'm applying for a rank within <b>YOUR</b> community and that's a privilege because I am indeed very hardworking and active. I may add I can work very well under higher pressure and I am amazing in making situations better.</p>
<p>So, as you may know, I am <b>OfficialMxsery</b> on Roblox and on discord I am known as <b>Lucas</b>, <b>Mxsery</b> or <b>flourescentroses</b>. Alright, that's enough about who I am/ what's my name, I wanna show you my work experience!</p>
<p>Below you may find places I work at within the Roblox industry, I work in Bakery's, Restaurants, Juice Bars, Cafes and more! Those are just some genres I usually apply to work in or even just get noticed at.</p>
<p>Thank you for reading this and as I said, below is my resume it is updated every time I get a new work experience or get promoted, I hope to be working with you! Also, these groups are all the ones I am Middle Rank+ in and the groups and roles are NOT in order.</p>
</div>
<div class="stats">
<div class="card rv"><div class="num" data-n="24" id="count">0</div><p>Communities</p></div>
<div class="card rv"><div class="num" data-n="5">0</div><p>Ownership roles</p></div>
<div class="card rv"><div class="num" data-n="100">0</div><p>% active &amp; hardworking</p></div>
</div>
</section>

<section id="work">
<h2 class="rv">OfficialMxsery's Roblox Resume</h2>
<p class="note">Updated every time I get a new work experience or get promoted. Groups and roles are NOT in order.</p>
<input id="q" placeholder="Search community, rank or department...">
<div class="grid" id="grid"></div>
</section>

<footer>© <span id="y"></span> OfficialMxsery · Lucas · Mxsery · flourescentroses</footer>

<script>
const data=[
["Akirá Restaurant","Owner","Overseer"],
["Solara Bakery","Former Senior Corporate","Public Relations"],
["Bay Cafe","Corporate Intern","Public Relations"],
["Cafe Vinto","Corporate Director","Human Resources"],
["Juhaso","Corporate Assistant","Human Resources"],
["Chick N' Fry","Public Relations Lead","Public Relations"],
["Coastal Swim n' Dine","Public Relations Lead","Public Relations"],
["Comoda","Kitchen Assistant","(to be updated)"],
["Ivory Plate","Former Head Developer & Corporate","Public Relations"],
["Kaezí","Former Executive Officer (Department Lead)","Staffing Management"],
["Konai Kitchen","Co- Owner","Overseer"],
["Nefertari","Leadership Intern","Don't have Departments"],
["Personi","External Relations Lead","External Relations"],
["Yanago","Restaurant Assistant","Don't have departments"],
["Gluze","Co Owner","Overseer"],
["Floreá","Staff Intern","Don't have departments"],
["Vex Builds","Corporate Team","Public Relations"],
["Fleurdary Creations","Moderator","Don't have departments"],
["love, lumora","Moderator",""],
["Konbu Bakery","Corporate Assistant","Human Resources"],
["Sconioa'","Co Owner","Overseer"],
["Cress","Kitchen Manager","N/A"],
["Jolibee","Board Of Directors","Communications"]
];
const grid=document.getElementById('grid');
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;
  e.target.classList.add('on');
  const n=e.target.querySelector('[data-n]');
  if(n){let v=0,max=+n.dataset.n;const id=setInterval(()=>{v+=Math.ceil(max/40);if(v>=max){v=max;clearInterval(id)}n.textContent=v},35)}
  io.unobserve(e.target);
}),{threshold:.15});
const reveal=(el,i)=>{el.style.transitionDelay=(i%3)*.08+'s';io.observe(el)};

function render(list){
  grid.innerHTML=list.map(d=>`<div class="card rv"><h3>${d[0]}</h3>
  <div class="row"><em>Rank</em><span>${d[1]}</span></div>
  ${d[2]?`<div class="row"><em>Dept</em><span>${d[2]}</span></div>`:''}</div>`).join('');
  grid.querySelectorAll('.rv').forEach(reveal);
}
render(data);
document.getElementById('q').addEventListener('input',e=>{
  const v=e.target.value.toLowerCase();
  render(data.filter(d=>d.join(' ').toLowerCase().includes(v)));
});
document.getElementById('count').dataset.n=data.length;

// Title letters
const t=document.getElementById('title');
["OfficialMxsery's","Roblox","Resume"].forEach((word,wi)=>{
  const line=document.createElement('div');
  [...word].forEach((c,i)=>{const s=document.createElement('span');s.textContent=c;s.style.animationDelay=(.3+wi*.35+i*.05)+'s';line.appendChild(s)});
  t.appendChild(line);
});
// Typewriter
const words=["Hardworking.","Active.","Amazing at making situations better.","Hoping to work with you!"];
let w=0,c=0,del=false;const el=document.getElementById('typed');
(function tick(){
  const word=words[w];el.textContent=word.slice(0,c);
  if(!del&&c++===word.length){del=true;return setTimeout(tick,1400)}
  if(del&&c--===0){del=false;w=(w+1)%words.length}
  setTimeout(tick,del?35:80);
})();
// Marquee
const items=["Bakeries","Restaurants","Juice Bars","Cafes","Public Relations","Human Resources","Overseer","Moderation"];
document.getElementById('m').innerHTML=Array(4).fill(items.map(i=>`<b>${i}</b>·`).join('')).join('');
// Glow + reveal init
addEventListener('pointermove',e=>{const g=document.getElementById('glow');g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'});
document.querySelectorAll('.card.rv, h2.rv').forEach(reveal);
document.getElementById('y').textContent=new Date().getFullYear();
</script>
</body>
</html>