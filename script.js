/* =========================================================
   EDIT THIS PART — all the words on the site live here
   ========================================================= */
const CONFIG = {
  herName: 'Tikki',

  welcomeText: 'Dudu se galti ho gayi... aur Dudu bhot bhot sorry hai 🥺 Kuch questions ke answer dogi?',

  questions: [
    'Bubu, dekho ye sorry website kaisi lgi, maine tmhare liye banai hai. Kya tmhe ye acha lga?',
    'Dudu, jaada time nhi de paata hai ab pehle ki trh. Dudu ko maaf kr do iske liye',
    'Dudu ne birthday pe story nahi laga paaya tha toh dudu ko saja dena pr baat krna mt chhorna bububu',
    'Bububu ko pta hai na ki dudu bhot pyaar krta hai bububu se apni',
    'Kya dudu ko chance milna chahiye apni glti sudharne ke liye?',
    'Kya Dudu tumhe sorry bolne ke liye ek cute si hug deserve karta hai?',
    'Kya tum Dudu ko maaf kar sakti ho, bas thodi si?',
    'Kya Bubu ab Dudu se baat karegi? 💕',
  ],

  // What the NO button says after each tap. After the last one, YES takes over the whole screen.
  noTexts: ['No', 'Pakka? 🥺', 'Sach mein?? 😿', 'Ek baar aur soch lo 🥺', 'Pleaseee Bubu 😿', 'Dudu ka dil toot jayega 💔'],

  // Little line under the buttons (same order as noTexts)
  hints: [
    'Tap NO if you dare... 😼',
    'Hmm? Yes button thoda bada ho gaya na? 👀',
    'Dudu ki aankhein bhar aayi 🥲',
    'Yes button aur bada... samajh jao na Bubu 😿',
    'Bas karo, kitty ro rahi hai 😭',
    'Last chance... warna Yes poori screen kha jayega 😼',
  ],

  // Speech bubble above the big kitty (same order as noTexts)
  bubbles: ['holding breath... 🥺', 'sniff... 😿', 'aankhein bhar aayi 🥲', 'Dudu ro raha hai 😭', 'bhot zor se ro raha hai 😭', '😭😭😭'],

  yesToasts: ['Yayyy! 🥰', 'Hehe, pata tha 💖', 'Dudu khush ho gaya! 😻', 'Awww thank youuu 🫶'],

  finalTitle: 'YAYYY! 💖',
  finalSub: 'Pata tha meri pyaari si tikki maan jayegi 🥰',
  finalMessage: 'Thank you Bubu 🫶 Dudu promise karta hai ki ab tumhe zyada time dega aur kabhi itna wait nahi karayega. Tum Dudu ki pyaari si bubu ho aur dudu tmko hamesha bhot saara pyaar krega. Love you sooo much bchaa meraaa💗',
  finalSign: '— Tumhara Dudu 🎀',
  hugToast: 'Hug sent! Dudu ko mil gayi 🤗💞',
};

/* =========================================================
   Kitty + heart drawings
   ========================================================= */
const INK = '#8A1146';
const FURS = { white: '#FFFFFF', cream: '#FFF3DF', grey: '#EDE7F1', peach: '#FFE4D6' };
const HEART_D = 'M0 -4C-3 -10 -13 -9 -13 -1C-13 5 -5 9 0 14C5 9 13 5 13 -1C13 -9 3 -10 0 -4Z';

function heartSVG(color, stroke = '') {
  const s = stroke ? ` stroke="${stroke}" stroke-width="2.5" stroke-linejoin="round"` : '';
  return `<svg viewBox="-15 -12 30 28" aria-hidden="true"><path d="${HEART_D}" fill="${color}"${s}/></svg>`;
}

function kittySVG({ fur = 'white', mood = 'normal', acc = 'none', label = '' } = {}) {
  const f = FURS[fur] || FURS.white;
  const line = `stroke="${INK}" stroke-linejoin="round" stroke-linecap="round"`;

  const bigEyes = `
    <path d="M32 47Q40 42 49 47M88 47Q80 42 71 47" fill="none" ${line} stroke-width="3"/>
    <g class="k-eyes">
      <ellipse cx="42" cy="62" rx="9" ry="10" fill="#3F001B"/>
      <circle cx="38.5" cy="57.5" r="3.6" fill="#fff"/><circle cx="45" cy="66.5" r="1.7" fill="#fff"/>
      <ellipse cx="78" cy="62" rx="9" ry="10" fill="#3F001B"/>
      <circle cx="74.5" cy="57.5" r="3.6" fill="#fff"/><circle cx="81" cy="66.5" r="1.7" fill="#fff"/>
    </g>`;

  const eyes = {
    normal: `
      <g class="k-eyes">
        <ellipse cx="43" cy="62" rx="6" ry="7" fill="#3F001B"/><circle cx="41" cy="59.5" r="2.3" fill="#fff"/>
        <ellipse cx="77" cy="62" rx="6" ry="7" fill="#3F001B"/><circle cx="75" cy="59.5" r="2.3" fill="#fff"/>
      </g>`,
    pleading: bigEyes,
    sad: bigEyes + `<path class="k-tear" d="M36 73Q31 81 36 85Q41 81 36 73Z" fill="#9FD3FF" stroke="#6FB6EE" stroke-width="1.5"/>`,
    happy: `<path d="M34 65Q42 54 50 65M70 65Q78 54 86 65" fill="none" stroke="#3F001B" stroke-width="4.5" stroke-linecap="round"/>`,
    sleepy: `<path d="M35 62Q42 69 49 62M71 62Q78 69 85 62" fill="none" stroke="#3F001B" stroke-width="3.5" stroke-linecap="round"/>`,
  }[mood];

  const mouth = {
    happy: `<path d="M51 76Q60 92 69 76Z" fill="#B70053" ${line} stroke-width="3"/><ellipse cx="60" cy="84" rx="5" ry="3" fill="#FF8FB5"/>`,
    sad: `<path d="M54 81Q60 76 66 81" fill="none" ${line} stroke-width="3"/>`,
  }[mood] || `<path d="M53 76Q56.5 80.5 60 76Q63.5 80.5 67 76" fill="none" ${line} stroke-width="3"/>`;

  const paw = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="10" ry="7.5" fill="${f}" ${line} stroke-width="3"/>`;
  const extras = {
    none: '',
    paws: paw(44, 101) + paw(76, 101),
    heart: `<path transform="translate(60 106) scale(1.15)" d="${HEART_D}" fill="#FF1F7A" ${line} stroke-width="2.6"/>` + paw(44, 104) + paw(76, 104),
    bow: `<g transform="translate(90 22) rotate(18)" ${line} stroke-width="2.5">
            <path d="M0 0L-13 -8V8Z" fill="#E6007E"/><path d="M0 0L13 -8V8Z" fill="#E6007E"/><circle r="4" fill="#FF1F7A"/>
          </g>`,
    zzz: `<g font-family="Fredoka, sans-serif" font-weight="700" fill="${INK}">
            <text x="94" y="28" font-size="13">z</text><text x="102" y="16" font-size="17">Z</text>
          </g>`,
    sign: `<rect x="18" y="96" width="84" height="28" rx="12" fill="#fff" ${line} stroke-width="3"/>
           <text x="60" y="115" text-anchor="middle" font-family="Fredoka, sans-serif" font-weight="700" font-size="13" fill="#B70053">${label}</text>`
          + paw(22, 99) + paw(98, 99),
  }[acc] || '';

  return `<svg viewBox="0 0 120 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M22 52L27 13Q29 8 34 12L57 31Z" fill="${f}" ${line} stroke-width="4"/>
    <path d="M98 52L93 13Q91 8 86 12L63 31Z" fill="${f}" ${line} stroke-width="4"/>
    <path d="M31 40L33 21L46 31Z" fill="#FFB1C2"/>
    <path d="M89 40L87 21L74 31Z" fill="#FFB1C2"/>
    <ellipse cx="60" cy="64" rx="46" ry="38" fill="${f}" ${line} stroke-width="4"/>
    ${fur === 'grey' ? '<path d="M52 30v8M60 28v10M68 30v8" stroke="#C9BCD2" stroke-width="3.5" stroke-linecap="round"/>' : ''}
    <ellipse cx="29" cy="75" rx="7.5" ry="4.5" fill="#FF8FB5" opacity="${mood === 'happy' ? 0.95 : 0.65}"/>
    <ellipse cx="91" cy="75" rx="7.5" ry="4.5" fill="#FF8FB5" opacity="${mood === 'happy' ? 0.95 : 0.65}"/>
    <path d="M2 63L20 66M2 72L20 71M118 63L100 66M118 72L100 71" stroke="${INK}" stroke-opacity=".3" stroke-width="2" stroke-linecap="round"/>
    ${eyes}
    <path d="M56.5 70h7l-3.5 4z" fill="#FF1F7A" stroke="#FF1F7A" stroke-width="1.5" stroke-linejoin="round"/>
    ${mouth}
    ${extras}
  </svg>`;
}

/* =========================================================
   Background: lots of kitties floating in place + hearts
   ========================================================= */
// x/y are % of the screen, size is px on a phone
const BG_KITTIES = [
  { x: 3,  y: 5,  size: 62, fur: 'white', acc: 'heart', rot: -8 },
  { x: 80, y: 3,  size: 56, fur: 'cream', acc: 'bow',   rot: 10 },
  { x: 44, y: 0,  size: 44, fur: 'peach', acc: 'heart', rot: -6 },
  { x: -4, y: 25, size: 68, fur: 'grey',  acc: 'zzz',   rot: 6, mood: 'sleepy' },
  { x: 86, y: 21, size: 52, fur: 'peach', acc: 'none',  rot: -6 },
  { x: 58, y: 31, size: 40, fur: 'cream', acc: 'zzz',   rot: -8, mood: 'sleepy' },
  { x: 5,  y: 47, size: 50, fur: 'cream', acc: 'bow',   rot: 8 },
  { x: 87, y: 43, size: 64, fur: 'white', acc: 'heart', rot: -10 },
  { x: -3, y: 67, size: 60, fur: 'peach', acc: 'heart', rot: 12 },
  { x: 84, y: 63, size: 54, fur: 'grey',  acc: 'bow',   rot: -4 },
  { x: 30, y: 75, size: 44, fur: 'white', acc: 'bow',   rot: 10 },
  { x: 8,  y: 85, size: 68, fur: 'white', acc: 'zzz',   rot: -6, mood: 'sleepy' },
  { x: 42, y: 90, size: 50, fur: 'grey',  acc: 'none',  rot: 0 },
  { x: 74, y: 83, size: 70, fur: 'cream', acc: 'heart', rot: 8 },
];

const HEART_COLORS = ['#FF1F7A', '#E6007E'];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const bg = document.getElementById('bg');

function seeded(seed) {
  return () => (seed = (seed * 16807) % 2147483647) / 2147483647;
}

function renderBackground(forceMood) {
  bg.querySelectorAll('.kitty, .bg-heart').forEach((el) => el.remove());
  const rand = seeded(7);

  for (let i = 0; i < 20; i++) {
    const h = document.createElement('div');
    h.className = 'bg-heart';
    h.style.left = `${rand() * 96}%`;
    h.style.top = `${rand() * 96}%`;
    h.style.setProperty('--size', `${14 + rand() * 22}px`);
    h.style.setProperty('--rot', `${-25 + rand() * 50}deg`);
    h.style.setProperty('--dur', `${2.4 + rand() * 2}s`);
    h.style.setProperty('--delay', `${-rand() * 3}s`);
    h.innerHTML = heartSVG(HEART_COLORS[i % 2]);
    bg.appendChild(h);
  }

  BG_KITTIES.forEach((k, i) => {
    const el = document.createElement('div');
    el.className = 'kitty';
    el.style.left = `${k.x}%`;
    el.style.top = `${k.y}%`;
    el.style.setProperty('--size', `${k.size}px`);
    el.style.setProperty('--rot', `${k.rot}deg`);
    el.style.setProperty('--dur', `${3 + (i % 4) * 0.6}s`);
    el.style.setProperty('--delay', `${-(i * 0.45)}s`);
    el.style.setProperty('--blink', `${3.5 + (i % 5) * 0.7}s`);
    el.style.setProperty('--blink-delay', `${-(i * 0.8)}s`);
    const mood = forceMood || k.mood || 'normal';
    el.innerHTML = kittySVG({ fur: k.fur, mood, acc: mood === 'sleepy' ? k.acc : k.acc === 'zzz' ? 'heart' : k.acc });
    bg.appendChild(el);
  });
}

function spawnRisingHeart() {
  if (document.hidden) return;
  const h = document.createElement('div');
  h.className = 'rise-heart';
  h.style.left = `${Math.random() * 95}%`;
  h.style.setProperty('--size', `${14 + Math.random() * 18}px`);
  h.style.setProperty('--dur', `${7 + Math.random() * 4}s`);
  h.style.setProperty('--drift', `${-40 + Math.random() * 80}px`);
  h.style.setProperty('--rot', `${-40 + Math.random() * 80}deg`);
  h.innerHTML = heartSVG(HEART_COLORS[Math.random() < 0.5 ? 0 : 1]);
  h.addEventListener('animationend', () => h.remove());
  bg.appendChild(h);
}

/* =========================================================
   Effects
   ========================================================= */
function burstHearts(fromEl, count = 16) {
  if (reduceMotion) return;
  const r = fromEl.getBoundingClientRect();
  const cx = r.left + r.width / 2;
  const cy = r.top + r.height / 2;
  const colors = ['#FF1F7A', '#E6007E', '#FF8FB5', '#FFFFFF'];
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2 + Math.random() * 0.4;
    const dist = 80 + Math.random() * 90;
    const h = document.createElement('div');
    h.className = 'burst-heart';
    h.style.left = `${cx}px`;
    h.style.top = `${cy}px`;
    h.style.setProperty('--size', `${16 + Math.random() * 18}px`);
    h.style.setProperty('--dx', `${Math.cos(angle) * dist}px`);
    h.style.setProperty('--dy', `${Math.sin(angle) * dist}px`);
    h.style.setProperty('--rot', `${-60 + Math.random() * 120}deg`);
    h.innerHTML = heartSVG(colors[i % colors.length], '#FFFFFF');
    h.addEventListener('animationend', () => h.remove());
    document.body.appendChild(h);
  }
}

function confetti(count = 110) {
  if (reduceMotion) return;
  const colors = ['#FF1F7A', '#E6007E', '#FFB1C2', '#FFFFFF', '#FFD166'];
  for (let i = 0; i < count; i++) {
    const c = document.createElement('div');
    const color = colors[i % colors.length];
    const isHeart = Math.random() < 0.45;
    c.className = isHeart ? 'confetti' : 'confetti bit';
    c.style.left = `${Math.random() * 100}vw`;
    c.style.setProperty('--size', `${10 + Math.random() * 14}px`);
    c.style.setProperty('--dur', `${3 + Math.random() * 2.5}s`);
    c.style.setProperty('--delay', `${Math.random() * 2.5}s`);
    c.style.setProperty('--drift', `${-80 + Math.random() * 160}px`);
    c.style.setProperty('--spin', `${360 + Math.random() * 720}deg`);
    c.style.setProperty('--color', color);
    if (isHeart) c.innerHTML = heartSVG(color);
    c.addEventListener('animationend', () => c.remove());
    document.body.appendChild(c);
  }
}

const toastEl = document.getElementById('toast');
let toastTimer;
function toast(text, ms = 1200) {
  toastEl.textContent = text;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), ms);
}

/* =========================================================
   Game
   ========================================================= */
const $ = (id) => document.getElementById(id);
const yesBtn = $('yesBtn');
const noBtn = $('noBtn');
const answers = $('answers');
const hero = $('heroKitty');
const bubble = $('kittyBubble');
const card = $('questionCard');
const takeover = $('yesTakeover');

const YES_SIZES = [18, 24, 31, 40, 48, 56];
const NO_SIZES = [18, 16, 14, 13, 12, 11];
const MAX_NO = CONFIG.noTexts.length;

let current = 0;
let noCount = 0;
let busy = false;
let heroMood = '';

new Image().src = 'assets/crying-kitty.jpg';
new Image().src = 'assets/dancing-kitties.jpg';

function showScreen(id) {
  document.querySelectorAll('.screen').forEach((s) => s.classList.toggle('is-active', s.id === id));
  window.scrollTo(0, 0);
}

function setHeroMood(mood) {
  if (mood === heroMood) return;
  heroMood = mood;
  hero.innerHTML = mood === 'crying'
    ? '<img class="hero-photo" src="assets/crying-kitty.jpg" alt="A kitten crying with its paws together">'
    : kittySVG({ fur: 'white', mood, acc: mood === 'happy' ? 'heart' : 'paws' });
}

function renderHearts() {
  $('progressHearts').innerHTML = CONFIG.questions.map((_, i) => {
    if (i < current) return `<span class="p-heart">${heartSVG('#FF1F7A', '#FFFFFF')}</span>`;
    if (i === current) return `<span class="p-heart current">${heartSVG('#E6007E', '#FFFFFF')}</span>`;
    return `<span class="p-heart">${heartSVG('rgba(255,255,255,.85)', '#FFB1C2')}</span>`;
  }).join('');
  $('progressLabel').textContent = `Question ${current + 1} of ${CONFIG.questions.length}`;
}

function renderAnswers() {
  const n = noCount;
  answers.dataset.no = n;
  yesBtn.style.setProperty('--yes-size', `${YES_SIZES[n]}px`);
  noBtn.style.setProperty('--no-size', `${NO_SIZES[n]}px`);
  yesBtn.classList.toggle('wide', n >= 3);
  yesBtn.textContent = n >= 3 ? 'YES 💖' : 'Yes 💖';
  noBtn.textContent = CONFIG.noTexts[n];
  $('hint').textContent = CONFIG.hints[n];
  bubble.textContent = CONFIG.bubbles[n];
  setHeroMood(n === 0 ? 'pleading' : n < 3 ? 'sad' : 'crying');
}

function loadQuestion() {
  noCount = 0;
  $('questionText').textContent = CONFIG.questions[current];
  renderHearts();
  renderAnswers();
  busy = false;
}

function onNo() {
  if (busy) return;
  noCount++;
  if (navigator.vibrate) navigator.vibrate(30);
  if (noCount >= MAX_NO) {
    bubble.textContent = '😭😭😭';
    takeover.hidden = false;
    return;
  }
  renderAnswers();
  noBtn.classList.remove('wiggle');
  void noBtn.offsetWidth; // restart the wiggle animation
  noBtn.classList.add('wiggle');
}

function onYes(e) {
  if (busy) return;
  busy = true;
  burstHearts(e.currentTarget);
  takeover.hidden = true;
  setHeroMood('happy');
  bubble.textContent = 'yayyy 😻';
  const msgs = CONFIG.yesToasts;
  toast(msgs[Math.floor(Math.random() * msgs.length)]);
  setTimeout(nextQuestion, 1300);
}

function nextQuestion() {
  current++;
  if (current >= CONFIG.questions.length) {
    showFinal();
    return;
  }
  card.classList.add('swap-out');
  setTimeout(() => {
    card.classList.remove('swap-out');
    loadQuestion();
    card.classList.add('swap-in');
    card.addEventListener('animationend', () => card.classList.remove('swap-in'), { once: true });
  }, 250);
}

function showFinal() {
  showScreen('final');
  document.body.classList.add('celebrate');
  renderBackground('happy');
  confetti();
  busy = false;
}

function restart() {
  current = 0;
  document.body.classList.remove('celebrate');
  renderBackground();
  showScreen('welcome');
}

/* ---------- Wire it up ---------- */
$('herName').textContent = CONFIG.herName;
$('welcomeText').textContent = CONFIG.welcomeText;
$('welcomeKitty').innerHTML = kittySVG({ fur: 'white', mood: 'pleading', acc: 'sign', label: 'sowwy... 🥺' });
$('takeoverKitty').innerHTML = kittySVG({ fur: 'white', mood: 'pleading', acc: 'heart' });
$('finalTitle').textContent = CONFIG.finalTitle;
$('finalSub').textContent = CONFIG.finalSub;
$('finalMessage').textContent = CONFIG.finalMessage;
$('finalSign').textContent = CONFIG.finalSign;

$('startBtn').addEventListener('click', () => {
  current = 0;
  showScreen('quiz');
  loadQuestion();
});
yesBtn.addEventListener('click', onYes);
takeover.addEventListener('click', onYes);
noBtn.addEventListener('click', onNo);
$('hugBtn').addEventListener('click', (e) => {
  burstHearts(e.currentTarget, 22);
  confetti(40);
  toast(CONFIG.hugToast, 1800);
});
$('againBtn').addEventListener('click', restart);

renderBackground();
if (!reduceMotion) setInterval(spawnRisingHeart, 1400);
