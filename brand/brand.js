/* TRE™ in Singapore brand guidelines: interactions. No dependencies. */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var RM = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var paused = RM;

  /* ---------- helpers ---------- */
  var toastT;
  function toast(msg) { var t = $('#toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove('on'); }, 1600); }
  function copy(text, label) {
    var done = function () { toast('Copied ' + (label || text)); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, done); else done();
  }
  function hexRgb(h) { h = h.replace('#', ''); return [0, 2, 4].map(function (i) { return parseInt(h.substr(i, 2), 16); }); }
  function lum(rgb) { var a = rgb.map(function (v) { v /= 255; return v <= .04045 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }); return .2126 * a[0] + .7152 * a[1] + .0722 * a[2]; }
  function ratio(a, b) { var l1 = lum(hexRgb(a)), l2 = lum(hexRgb(b)); var hi = Math.max(l1, l2), lo = Math.min(l1, l2); return (hi + .05) / (lo + .05); }
  function cmyk(rgb) {
    var r = rgb[0] / 255, g = rgb[1] / 255, b = rgb[2] / 255, k = 1 - Math.max(r, g, b);
    if (k >= 1) return [0, 0, 0, 100];
    return [(1 - r - k) / (1 - k), (1 - g - k) / (1 - k), (1 - b - k) / (1 - k), k].map(function (v) { return Math.round(v * 100); });
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* ---------- reveal ---------- */
  if ('IntersectionObserver' in window) {
    var rvo = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); rvo.unobserve(e.target); } }); }, { threshold: .08, rootMargin: '0px 0px -4% 0px' });
    $$('.rv').forEach(function (el, i) { el.style.transitionDelay = (i % 4) * 90 + 'ms'; rvo.observe(el); });
  } else { $$('.rv').forEach(function (el) { el.classList.add('in'); }); }

  /* ---------- rail: active chapter, mobile menu, charge/release/settle ---------- */
  var rail = $('#rail'), links = $$('#railList a'), chapters = links.map(function (a) { return $(a.getAttribute('href')); });
  var cur = 0;
  function setActive(i) {
    cur = i;
    links.forEach(function (a, j) { a.classList.toggle('on', j === i); if (j === i) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
    var step = Math.min(2, Math.floor(i / (links.length / 3)));
    [0, 1, 2].forEach(function (k) { $('#st' + k).classList.toggle('on', k === step); });
    devPlay();
    var a = links[i]; if (a && window.innerWidth > 900) { var lst = $('#railList'); var top = a.offsetTop - lst.clientHeight / 2; lst.scrollTo({ top: top, behavior: 'auto' }); }
  }
  function onScroll() {
    var y = window.scrollY + window.innerHeight * .35, idx = 0;
    chapters.forEach(function (c, i) { if (c && c.offsetTop <= y) idx = i; });
    if (idx !== cur) setActive(idx);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  var rb = $('#railBtn');
  rb.addEventListener('click', function () { var o = rail.classList.toggle('open'); rb.setAttribute('aria-expanded', o); rb.textContent = o ? 'Close' : 'Menu'; });
  links.forEach(function (a) { a.addEventListener('click', function () { rail.classList.remove('open'); rb.setAttribute('aria-expanded', 'false'); rb.textContent = 'Menu'; }); });

  /* tremor path: charge (small, growing), release (large), settle (flat) */
  function tremorPath(w, h, t, n) {
    var mid = h / 2, d = 'M0 ' + mid;
    for (var i = 1; i <= n; i++) {
      var x = w * i / n, p = i / n, env;
      if (t < .33) env = (t / .33) * .25 * p * 1.2;
      else if (t < .72) env = 1 * Math.sin(Math.PI * (t - .33) / .39) * (.4 + .6 * p) + .25 * p;
      else env = .25 * Math.max(0, 1 - (t - .72) / .28);
      var y = mid + Math.sin(i * .62 + t * 34) * env * (h * .38) * (i % 2 ? 1 : .6);
      d += 'L' + x.toFixed(1) + ' ' + y.toFixed(1);
    }
    return d;
  }
  function animateLine(path, w, h, n, dur, onStep, done) {
    var t0 = null;
    function f(ts) {
      if (t0 === null) t0 = ts; var t = Math.min(1, (ts - t0) / dur);
      path.setAttribute('d', tremorPath(w, h, t, n)); if (onStep) onStep(t);
      if (t < 1) requestAnimationFrame(f); else { path.setAttribute('d', 'M0 ' + h / 2 + 'H' + w); if (done) done(); }
    }
    requestAnimationFrame(f);
  }
  var devBusy = false;
  function devPlay() {
    if (paused || devBusy) return; devBusy = true;
    animateLine($('#devLine'), 224, 30, 40, 1600, null, function () { devBusy = false; });
  }
  var moBusy = false;
  function moPlay() {
    var p = $('#moLine'), steps = [$('#ms0'), $('#ms1'), $('#ms2')];
    if (paused) { steps.forEach(function (s, i) { s.classList.toggle('on', i === 2); }); p.setAttribute('d', 'M0 60H800'); return; }
    if (moBusy) return; moBusy = true;
    animateLine(p, 800, 120, 140, 3600, function (t) { var k = t < .33 ? 0 : t < .72 ? 1 : 2; steps.forEach(function (s, i) { s.classList.toggle('on', i === k); }); }, function () { moBusy = false; });
  }
  $('#moPlay').addEventListener('click', function () { var was = paused; paused = false; moPlay(); paused = was; });
  if ('IntersectionObserver' in window) new IntersectionObserver(function (es, o) { if (es[0].isIntersecting) { moPlay(); o.disconnect(); } }, { threshold: .5 }).observe($('.mo-demo'));
  else moPlay();

  var sw = $('#motionSw');
  sw.addEventListener('click', function () {
    paused = !paused; sw.setAttribute('aria-pressed', paused); sw.textContent = paused ? 'Resume motion' : 'Pause motion';
    document.body.classList.toggle('still', paused);
    var im = $('#coverStage img'); if (im) im.style.animationPlayState = paused ? 'paused' : 'running';
  });
  if (RM) { sw.setAttribute('aria-pressed', 'true'); sw.textContent = 'Resume motion'; }

  /* ---------- tremor canvases ---------- */
  function tremorField(canvas, opts) {
    var ctx = canvas.getContext('2d'), W = 0, H = 0, dpr = Math.min(2, window.devicePixelRatio || 1), mx = -999, my = -999, amp = 0, vis = true, t = 0, lastMove = 0;
    var N = opts.lines || 9;
    function size() { var r = canvas.getBoundingClientRect(); W = r.width; H = r.height; canvas.width = W * dpr; canvas.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); draw(); }
    function draw() {
      ctx.clearRect(0, 0, W, H);
      var fade = opts.fade || .46;
      for (var l = 0; l < N; l++) {
        var y0 = H * (.14 + .72 * l / (N - 1)), col = l % 2 ? opts.c1 : opts.c2;
        ctx.beginPath();
        for (var x = 0; x <= W; x += 6) {
          var xf = x / W, a = Math.max(0, 1 - xf / fade), d = Math.abs(x - mx) + Math.abs(y0 - my) * .6;
          var near = Math.max(0, 1 - d / 220) * amp, y = y0 + Math.sin(x * .045 + t * 1.6 + l) * (1.2 + 5 * near) * (.4 + a) + Math.sin(x * .11 - t * 2.3 + l * 2) * 3 * near;
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = col; ctx.globalAlpha = (opts.alpha || .55); ctx.lineWidth = 1.4;
        var g = ctx.createLinearGradient(0, 0, W * Math.max(.5, fade + .1), 0); g.addColorStop(0, col); g.addColorStop(1, 'rgba(201,164,92,0)'); ctx.strokeStyle = g;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }
    function loop() { if (!vis) return; if (!paused) { t += .016; amp = Math.max(0, amp - .012); if (performance.now() - lastMove > 90 && amp < .02) amp = 0; } draw(); requestAnimationFrame(loop); }
    var host = canvas.parentNode;
    host.addEventListener('pointermove', function (e) { var r = canvas.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; amp = 1; lastMove = performance.now(); });
    host.addEventListener('pointerleave', function () { mx = -999; });
    window.addEventListener('resize', size); size();
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { var v = es[0].isIntersecting; if (v && !vis) { vis = true; loop(); } vis = v; }, { threshold: 0 }).observe(canvas);
    loop();
  }
  tremorField($('#coverTremor'), { lines: 11, c1: '#c9a45c', c2: '#b89a72', fade: .5, alpha: .8 });
  tremorField($('#field canvas'), { lines: 8, c1: '#c9a45c', c2: '#b89a72', fade: .9, alpha: .85 });

  /* ---------- colour ---------- */
  var PRIMARY = [
    ['Navy', '#1C3D7A', 'Headings, navy buttons.'],
    ['Bronze', '#8B6B45', 'Taglines, labels, tremor lines.'],
    ['Cream', '#FAF6EF', 'Section ground.'],
    ['Orange', '#E08A2E', 'The one primary call to action in view.'],
    ['Gold', '#C9A45C', 'Accents, dividers, tremor lines.']
  ];
  var MORE = [
    ['Navy deep', '#132B56', 'Footer, dark bands.'], ['Navy ink', '#0F1F3D', 'Hero fields; label on orange.'], ['Blue', '#2A63A8', 'Links.'], ['Blue tint', '#F4F7FC', 'Soft fills.'],
    ['Bronze soft', '#B89A72', 'Soft lines.'], ['Gold soft', '#F3E8D2', 'Soft panels, gold badges.'], ['Brown', '#5F4630', 'The word “Singapore”; gold badge text.'], ['Orange deep', '#C4741D', 'Call-to-action hover.'],
    ['Cream 2', '#F2E9DB', 'Second cream ground.'], ['Ink', '#1B2536', 'Body text.'], ['Muted', '#5F6B7D', 'Secondary text, the lightest allowed.'], ['Line', '#E4DFD6', 'Hairlines.'],
    ['Green', '#2F8F5B', 'Success.'], ['Red', '#B9412F', 'Errors.'], ['Logo navy', '#003769', 'Inside the logo artwork.'], ['Logo bronze', '#73533B', 'Inside the logo artwork.']
  ];
  function swCard(c) {
    var rgb = hexRgb(c[1]), k = cmyk(rgb), onC = ratio(c[1], '#FFFFFF') >= ratio(c[1], '#0F1F3D') ? '#fff' : '#0F1F3D';
    var li = document.createElement('li'); li.className = 'sw rv in';
    li.innerHTML = '<div class="sw-chip" style="background:' + c[1] + ';color:' + onC + (c[1] === '#FAF6EF' || c[1] === '#F4F7FC' || c[1] === '#F3E8D2' || c[1] === '#F2E9DB' || c[1] === '#E4DFD6' ? ';box-shadow:inset 0 0 0 1px #e4dfd6' : '') + '">' + c[1] + '</div><div class="sw-body"><h4>' + esc(c[0]) + '</h4><p class="role">' + esc(c[2]) + '</p><div class="sw-vals">' +
      '<button type="button" data-copy="' + c[1] + '"><i>HEX</i>' + c[1] + '</button><button type="button" data-copy="' + rgb.join(', ') + '"><i>RGB</i>' + rgb.join(', ') + '</button><button type="button" data-copy="' + k.join(', ') + '"><i>CMYK</i>' + k.join(', ') + '</button></div></div>';
    return li;
  }
  PRIMARY.forEach(function (c) { $('#swPrimary').appendChild(swCard(c)); });
  MORE.forEach(function (c) { $('#swMore').appendChild(swCard(c)); });
  document.addEventListener('click', function (e) { var b = e.target.closest('[data-copy]'); if (b) copy(b.dataset.copy); });

  var PROP = [['Cream + white', 58, '#FAF6EF'], ['Navy', 26, '#1C3D7A'], ['Bronze + gold', 10, '#8B6B45'], ['Call to action', 6, '#E08A2E']];
  PROP.forEach(function (p) {
    var s = document.createElement('span'); s.style.setProperty('--w', p[1]); s.style.setProperty('--c', p[2]); s.title = p[0] + ' ' + p[1] + '%'; $('#propbar').appendChild(s);
    var li = document.createElement('li'); li.style.setProperty('--c', p[2]); li.innerHTML = '<i></i>' + p[0] + ' <b class="num">' + p[1] + '</b>'; $('#propkey').appendChild(li);
  });

  var FG = [['Ink', '#1B2536'], ['Navy', '#1C3D7A'], ['Navy ink', '#0F1F3D'], ['Blue', '#2A63A8'], ['Bronze', '#8B6B45'], ['Brown', '#5F4630'], ['Muted', '#5F6B7D'], ['Gold', '#C9A45C'], ['Orange', '#E08A2E'], ['White', '#FFFFFF']];
  var BG = [['White', '#FFFFFF'], ['Cream', '#FAF6EF'], ['Gold soft', '#F3E8D2'], ['Navy deep', '#132B56'], ['Navy ink', '#0F1F3D'], ['Orange', '#E08A2E']];
  function cell(r) {
    var tier = r >= 7 ? 'AAA' : r >= 4.5 ? 'AA' : r >= 3 ? 'AA large' : 'Fail';
    var bg = r >= 4.5 ? '#e5f3ea' : r >= 3 ? '#fbf0d9' : '#f7e3df', fg = r >= 4.5 ? '#1d6b42' : r >= 3 ? '#7a5410' : '#8a2e20';
    return '<td><span style="background:' + bg + ';color:' + fg + '">' + r.toFixed(2) + ':1<small>' + tier + '</small></span></td>';
  }
  var ct = '<thead><tr><th scope="col">Text colour</th>' + BG.map(function (b) { return '<th scope="col"><span class="chip-sq" style="background:' + b[1] + '"></span>on ' + b[0] + '</th>'; }).join('') + '</tr></thead><tbody>';
  FG.forEach(function (f) { ct += '<tr><th scope="row"><span class="chip-sq" style="background:' + f[1] + '"></span>' + f[0] + '</th>' + BG.map(function (b) { return f[1] === b[1] ? '<td class="muted">&mdash;</td>' : cell(ratio(f[1], b[1])); }).join('') + '</tr>'; });
  $('#ct').innerHTML = ct + '</tbody>';

  var A11 = [['Navy ink on orange', '#0F1F3D', '#E08A2E', 'Button label'], ['White on orange', '#FFFFFF', '#E08A2E', 'Banned'], ['Bronze on white', '#8B6B45', '#FFFFFF', 'Taglines, labels'], ['Gold on navy ink', '#C9A45C', '#0F1F3D', 'Accent on dark'], ['Gold on white', '#C9A45C', '#FFFFFF', 'Never as text on light'], ['Muted on white', '#5F6B7D', '#FFFFFF', 'Lightest text allowed'], ['Ink on white', '#1B2536', '#FFFFFF', 'Body']];
  var at = '<thead><tr><th scope="col">Pair</th><th scope="col">Ratio, computed</th><th scope="col">Use</th></tr></thead><tbody>';
  A11.forEach(function (a) { at += '<tr><th scope="row"><span class="chip-sq" style="background:' + a[1] + '"></span><span class="chip-sq" style="background:' + a[2] + '"></span>' + a[0] + '</th>' + cell(ratio(a[1], a[2])) + '<td style="text-align:left">' + a[3] + '</td></tr>'; });
  $('#a11y').innerHTML = at + '</tbody>';

  /* ---------- type scale ---------- */
  var SC = [
    ['Hero H1', "font:700 clamp(30px,4.6vw,48px)/1.1 var(--f-d);letter-spacing:-.025em;color:var(--navy)", 'Release Stress. <em style="color:var(--bronze)">Improve Wellbeing.</em>', 'Jakarta 700, up to 56 px · −.025em · accent gold on navy, bronze on light'],
    ['Heading', "font:700 clamp(24px,3vw,32px)/1.12 var(--f-d);letter-spacing:-.015em;color:var(--navy)", 'One hub for TRE™ in Singapore', 'Jakarta 700, 26 to 38 px · −.015em'],
    ['Title', "font:700 19.5px/1.12 var(--f-d);letter-spacing:-.015em;color:var(--navy)", 'Try TRE™ for the first time', 'Jakarta 700 · 1.22 rem'],
    ['Stat', "font:800 40px/1 var(--f-d);letter-spacing:-.03em;color:var(--navy)", '7', 'Jakarta 800 · 40 px · navy'],
    ['Body', "font:400 16px/1.65 var(--f-b);color:var(--ink)", 'Seven exercises, one natural reflex. You control the intensity and can stop at any time.', 'Inter 400 · 16 px / 1.65'],
    ['Lead', "font:400 18.2px/1.6 var(--f-b);color:var(--ink-2)", 'Whether you want to try TRE™ for the first time, book a provider for your team, or train to teach it yourself, start here.', 'Inter 400 · 1.14 rem / 1.6'],
    ['Badge', "font:700 11.5px/1 var(--f-d);letter-spacing:.04em;text-transform:uppercase;color:var(--bronze)", 'Certified provider', 'Jakarta 700 · .72 rem · caps · .04em'],
    ['Link arrow', "font:700 14.7px/1 var(--f-d);color:var(--navy)", 'Explore the pathway →', 'Jakarta 700 · .92 rem · arrow bronze'],
    ['Button', "font:700 15px/1 var(--f-d);color:var(--navy)", 'See how TRE™ works', 'Jakarta 700 · .93 rem']
  ];
  $('#scale').innerHTML = SC.map(function (s) { return '<div class="scale-row rv in"><div class="meta"><b>' + s[0] + '</b>' + s[3] + '</div><div class="smp" style="' + s[1] + '">' + s[2] + '</div></div>'; }).join('');
  var tT = $('#tText'), tS = $('#tSize'), tO = $('#tOut'), tF = 'd';
  function tApply() { tO.textContent = tT.value || ' '; tO.style.fontFamily = tF === 'd' ? 'var(--f-d)' : 'var(--f-b)'; tO.style.fontWeight = tF === 'd' ? 700 : 400; tO.style.fontSize = tS.value + 'px'; tO.style.lineHeight = tF === 'd' ? 1.12 : 1.5; tO.style.letterSpacing = tF === 'd' ? '-.02em' : '0'; $('#tSizeV').textContent = tS.value; }
  tT.addEventListener('input', tApply); tS.addEventListener('input', tApply);
  $$('.seg button').forEach(function (b) { b.addEventListener('click', function () { tF = b.dataset.f; $$('.seg button').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); tApply(); }); });
  tApply();

  /* ---------- photography ---------- */
  var PH = [
    ['hero-poster', 'A TRE™ session room', 'Rooms'], ['hero-education-1600', 'A calm session room', 'Rooms'], ['hero-events-1600', 'Floor cushions and daylight', 'Rooms'],
    ['module2-sep2026-2', 'Module 2 in session with Simba Stenqvist, Singapore, September 2026', 'Rooms'], ['module2-sep2026-4', 'TRE™ Module 2, September 2026', 'Rooms'], ['module2-sep2026-5', 'TRE™ Module 2, September 2026', 'Rooms'],
    ['module2-sep2026-1', 'Isabelle teaching, TRE™ Module 2, September 2026', 'Training'], ['module2-sep2026-3', 'Sharing circle, TRE™ Module 2, September 2026', 'Training'],
    ['hero-about-1600', 'A cohort together', 'Cohorts'], ['module2-sep2026-6', 'TRE™ Module 2 cohort, 26 to 27 September 2026, Singapore', 'Cohorts'], ['isabelle-students-module1-may2026', 'TRE™ Module 1, May 2026', 'Cohorts'], ['tre-module1-2026', 'TRE™ Module 1, January 2026', 'Cohorts'], ['uk-tre-providers-2', 'With UK TRE™ provider students', 'Cohorts'],
    ['asia-tre-trainers-david', 'Asia TRE™ trainers with David Berceli', 'Trainers'], ['isabelle-david-simba-nikki', 'Isabelle with David Berceli, Simba Stenqvist and Nikki Tay', 'Trainers'], ['danang-tre-conference-nov2025', 'Da Nang TRE™ Conference, November 2025', 'Trainers'], ['isabelle-vietnam-tre', 'TRE™ Asia Conference, Vietnam', 'Trainers']
  ];
  var cats = ['All'].concat(PH.reduce(function (a, p) { if (a.indexOf(p[2]) < 0) a.push(p[2]); return a; }, []));
  var lib = $('#lib'), flt = $('#filters'), curCat = 'All';
  lib.innerHTML = PH.map(function (p, i) { return '<button class="tile" type="button" data-i="' + i + '" data-c="' + p[2] + '"><img src="img/' + p[0] + '.webp" alt="' + esc(p[1]) + '" loading="lazy" width="600" height="450"><span>' + esc(p[1]) + '</span></button>'; }).join('');
  flt.innerHTML = cats.map(function (c) { return '<button type="button" aria-pressed="' + (c === 'All') + '" data-c="' + c + '">' + c + ' <span class="num">' + (c === 'All' ? PH.length : PH.filter(function (p) { return p[2] === c; }).length) + '</span></button>'; }).join('');
  flt.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return; curCat = b.dataset.c;
    $$('button', flt).forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
    $$('.tile', lib).forEach(function (t) { t.hidden = !(curCat === 'All' || t.dataset.c === curCat); });
  });
  var lb = $('#lb'), li = 0;
  function vis() { return $$('.tile', lib).filter(function (t) { return !t.hidden; }).map(function (t) { return +t.dataset.i; }); }
  function fill(i) { li = i; $('#lbImg').src = 'img/' + PH[i][0] + '.webp'; $('#lbImg').alt = PH[i][1]; $('#lbCap').textContent = PH[i][1]; }
  function step(d) { var v = vis(), p = v.indexOf(li); fill(v[(p + d + v.length) % v.length]); }
  var opener;
  lib.addEventListener('click', function (e) { var t = e.target.closest('.tile'); if (!t) return; opener = t; fill(+t.dataset.i); if (lb.showModal) lb.showModal(); else lb.setAttribute('open', ''); });
  $('#lbPrev').addEventListener('click', function () { step(-1); }); $('#lbNext').addEventListener('click', function () { step(1); });
  $('#lbClose').addEventListener('click', function () { lb.close(); });
  lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });
  lb.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') { e.preventDefault(); step(1); } if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); } });
  lb.addEventListener('close', function () { if (opener) opener.focus(); });

  /* ---------- settle demo ---------- */
  var st = $('#settle'), dot = st.firstElementChild;
  st.addEventListener('pointerenter', function () {
    if (paused) return; var t0 = null;
    (function f(ts) { if (t0 === null) t0 = ts; var t = Math.min(1, (ts - t0) / 1100), x = t * (st.clientWidth - 56), amp = Math.sin(Math.PI * Math.min(1, t * 1.1)) * 10 * (1 - t);
      dot.style.transform = 'translate(' + x + 'px,' + (Math.sin(t * 38) * amp) + 'px)'; if (t < 1) requestAnimationFrame(f); else dot.style.transform = 'translate(' + x + 'px,0)'; })(performance.now());
  });
  st.addEventListener('pointerleave', function () { dot.style.transition = 'transform .6s cubic-bezier(.16,1,.3,1)'; dot.style.transform = 'none'; setTimeout(function () { dot.style.transition = ''; }, 650); });

  /* ---------- backgrounds ---------- */
  var BGS = [
    ['Cream ground', 'The default section ground.', 'background:#FAF6EF', '#FAF6EF', '#0F1F3D', 'background:#FAF6EF'],
    ['Navy field', 'Hero fields and the close band.', 'background:linear-gradient(140deg,#0F1F3D,#132B56 55%,#1C3D7A)', '#fff', '', 'background:linear-gradient(140deg,#0F1F3D,#132B56 55%,#1C3D7A)'],
    ['Soft wash', 'A blue wash fading into cream, behind quiet content.', 'background:radial-gradient(closest-side,#CFE0F5,#FAF6EF)', '#FAF6EF', '#1B2536', 'background:radial-gradient(closest-side,#CFE0F5,#FAF6EF)'],
    ['Hero grade', 'A navy grade over a real room, strongest at the left.', 'background:linear-gradient(90deg,rgba(15,31,61,.86),rgba(15,31,61,.25)),url(img/hero-poster.webp) center/cover', '#fff', '', 'background:linear-gradient(90deg,rgba(15,31,61,.86),rgba(15,31,61,.25)),url(img/hero-poster.webp) center/cover']
  ];
  $('#bgGrid').innerHTML = BGS.map(function (b) {
    var css = b[2].replace('url(img/hero-poster.webp)', 'url(your-photo.jpg)');
    return '<div class="bgt rv in"><div class="fill" style="' + b[2] + ';color:' + (b[4] || '#fff') + '">' + b[0] + '</div><div class="meta"><p>' + b[1] + '</p><button type="button" data-copy="' + esc(css) + '">' + esc(css) + '</button></div></div>';
  }).join('');

  /* ---------- icons ---------- */
  var IC = [
    ['Arrow', '<path d="M5 12h14M13 6l6 6-6 6"/>'], ['Check', '<path d="M5 12.5l4.5 4.5L19 7.5"/>'], ['Calendar', '<rect x="4" y="5.5" width="16" height="14" rx="2.5"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/>'],
    ['Location', '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0113 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>'], ['Globe', '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.6 2.4 3.8 5.2 3.8 8.5s-1.2 6.1-3.8 8.5c-2.6-2.4-3.8-5.2-3.8-8.5S9.4 5.9 12 3.5z"/>'],
    ['People', '<circle cx="9" cy="9" r="3.2"/><path d="M3 19c.6-3.3 3-5 6-5s5.4 1.7 6 5"/><circle cx="17" cy="8.2" r="2.4"/><path d="M17.5 13.6c2.2.2 3.5 1.7 3.9 4.4"/>'],
    ['Clock', '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'], ['Mail', '<rect x="3.5" y="5.5" width="17" height="13" rx="2.5"/><path d="M4 7.5l8 6 8-6"/>'],
    ['Breath', '<path d="M3 9h10.5a2.5 2.5 0 10-2.5-2.5M3 14h14a2.5 2.5 0 11-2.5 2.5M3 19h7"/>']
  ];
  $('#iconGrid').innerHTML = IC.map(function (i) { return '<div class="ic rv in"><svg viewBox="0 0 24 24" aria-hidden="true">' + i[1] + '</svg><span>' + i[0] + '</span></div>'; }).join('');

  /* init */
  setActive(0); onScroll();
})();
