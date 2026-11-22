// Zinqo · site. Aucun cookie, aucun traceur.
(function () {
  // 1. Apparition douce au défilement, seulement si le mouvement est permis (sinon tout reste visible).
  var root = document.documentElement;
  if (window.IntersectionObserver && window.matchMedia && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    root.classList.add('anim');
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    document.addEventListener('DOMContentLoaded', function () {
      document.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });
    });
  }

  // 2. Extrait vidéo : muet par défaut, lu seulement quand il est visible (et si le mouvement est permis) ;
  // le bouton active ou coupe le son.
  document.addEventListener('DOMContentLoaded', function () {
    var v = document.querySelector('video.clip'), b = document.querySelector('.snd');
    if (!v || !b) return;
    var calme = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    var lire = function () { var p = v.play(); if (p && p.catch) p.catch(function () {}); };
    if (!calme && window.IntersectionObserver) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) lire(); else v.pause(); });
      }, { threshold: 0.4 }).observe(v);
    }
    b.addEventListener('click', function () {
      v.muted = !v.muted;
      b.setAttribute('aria-pressed', String(!v.muted));
      b.textContent = v.muted ? 'Activer le son' : 'Couper le son';
      if (!v.muted) lire();
    });
  });

  // 3. Page Télécharger seulement : lien direct vers le dernier installeur, lu sur l'API publique de GitHub.
  // Si l'appel échoue, le bouton garde l'adresse « dernière version » et le texte générique.
  if (!window.fetch || !document.querySelector('.js-dl')) return;
  var ctrl = window.AbortController ? new AbortController() : null;
  var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, 6000);
  fetch('https://api.github.com/repos/DXTR-Codex/zinqo/releases/latest', {
    headers: { Accept: 'application/vnd.github+json' },
    signal: ctrl ? ctrl.signal : undefined
  }).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (rel) {
      var exe = (rel.assets || []).filter(function (a) { return /^Zinqo-Setup-.*\.exe$/i.test(a.name); })[0];
      if (!exe || !/^https:\/\/github\.com\/DXTR-Codex\/zinqo\//.test(exe.browser_download_url)) return;
      var v = String(rel.tag_name || '').replace(/^v/, '');
      var mo = (exe.size / 1048576).toFixed(1).replace('.', ',');
      var txt = 'Version ' + v + ' · ' + mo + ' Mo · Gratuit · Windows 10 ou 11, 64 bits';
      var go = function () {
        document.querySelectorAll('.js-dl').forEach(function (a) { a.href = exe.browser_download_url; });
        document.querySelectorAll('.js-meta').forEach(function (p) { p.textContent = txt; });
      };
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
    })
    .catch(function () { /* repli : texte et lien par défaut */ })
    .then(function () { clearTimeout(timer); });
})();
