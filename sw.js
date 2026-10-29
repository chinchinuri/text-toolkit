// Service worker mdconv — кешування для роботи без інтернету.
// Файл генерується під час збірки (vite.config.js) із sw.template.js.
const VERSION = '2.0.0-mvtlexvz';
const CACHE = 'mdconv-' + VERSION;
const CORE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon.svg",
  "./icon-192.png",
  "./icon-512.png",
  "./assets/KaTeX_AMS-Regular-BQhdFMY1.woff2",
  "./assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2",
  "./assets/KaTeX_Main-Italic-NWA7e6Wa.woff2",
  "./assets/KaTeX_Main-Regular-B22Nviop.woff2",
  "./assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2",
  "./assets/KaTeX_Math-Italic-t53AETM-.woff2",
  "./assets/KaTeX_Size1-Regular-mCD8mA8B.woff2",
  "./assets/KaTeX_Size2-Regular-Dy4dx90m.woff2",
  "./assets/KaTeX_Size3-Regular-gV2CO0n9.woff2",
  "./assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2",
  "./assets/KaTeX_Main-Bold-Cx986IdX.woff2",
  "./assets/onest-cyrillic-300-normal-Dcqa6NY4.woff2",
  "./assets/onest-cyrillic-400-normal-BTdD9fLi.woff2",
  "./assets/onest-latin-400-normal-9AYXx_QC.woff2",
  "./assets/onest-cyrillic-500-normal-CJRUgmys.woff2",
  "./assets/onest-latin-500-normal-2-RsuwM3.woff2",
  "./assets/onest-cyrillic-600-normal-BZYKVyuq.woff2",
  "./assets/onest-latin-600-normal-DM19Lk_j.woff2",
  "./assets/lora-cyrillic-400-normal-CbVom6TB.woff2",
  "./assets/lora-latin-400-normal-DnxXpLNu.woff2",
  "./assets/lora-cyrillic-400-italic-BZqWJcgY.woff2",
  "./assets/lora-latin-400-italic-DYjZp4sZ.woff2",
  "./assets/lora-cyrillic-600-normal-DuzuWObJ.woff2",
  "./assets/lora-latin-600-normal-B-3RcLOQ.woff2",
  "./assets/jetbrains-mono-cyrillic-400-normal-BEIGL1Tu.woff2",
  "./assets/jetbrains-mono-latin-400-normal-V6pRDFza.woff2",
  "./assets/jetbrains-mono-cyrillic-500-normal-DmUKJPL_.woff2",
  "./assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2",
  "./assets/jetbrains-mono-cyrillic-400-italic-siMXSBys.woff2",
  "./assets/jetbrains-mono-latin-400-italic-B9rkokqX.woff2",
  "./assets/onest-latin-300-normal-CQb7Hhx7.woff2",
  "./assets/markdown-D4q-1yIy.css",
  "./assets/index-DSzv7riT.css",
  "./assets/codemirror-CUhtNSJO.js",
  "./assets/data-BrFtMUp3.js",
  "./assets/hljs-DKHsPV9u.js",
  "./assets/turndown.browser.es-kLzRgxYD.js",
  "./assets/turndown-plugin-gfm.es-DzXe-JUf.js",
  "./assets/index-SntYTCOK.js",
  "./assets/index-BTH_eOOn.js",
  "./assets/index-CbtXUYX0.js",
  "./assets/index-BUphIgQZ.js",
  "./assets/index-CphARFty.js",
  "./assets/apl-B4CMkyY2.js",
  "./assets/asciiarmor-Df11BRmG.js",
  "./assets/asn1-EdZsLKOL.js",
  "./assets/asterisk-B-8jnY81.js",
  "./assets/brainfuck-C4LP7Hcl.js",
  "./assets/cobol-CWcv1MsR.js",
  "./assets/clike-B9uivgTg.js",
  "./assets/clojure-BMjYHr_A.js",
  "./assets/css-BnMrqG3P.js",
  "./assets/cmake-BQqOBYOt.js",
  "./assets/coffeescript-S37ZYGWr.js",
  "./assets/commonlisp-DBKNyK5s.js",
  "./assets/cypher-C_CwsFkJ.js",
  "./assets/python-BuPzkPfP.js",
  "./assets/crystal-SjHAIU92.js",
  "./assets/d-pRatUO7H.js",
  "./assets/diff-DbItnlRl.js",
  "./assets/dockerfile-BKs6k2Af.js",
  "./assets/simple-mode-GW_nhZxv.js",
  "./assets/dtd-DF_7sFjM.js",
  "./assets/dylan-DwRh75JA.js",
  "./assets/ebnf-CDyGwa7X.js",
  "./assets/ecl-Cabwm37j.js",
  "./assets/eiffel-CnydiIhH.js",
  "./assets/elm-vLlmbW-K.js",
  "./assets/erlang-BNw1qcRV.js",
  "./assets/sql-D0XecflT.js",
  "./assets/factor-kuTfRLto.js",
  "./assets/fcl-Kvtd6kyn.js",
  "./assets/forth-Ffai-XNe.js",
  "./assets/fortran-DYz_wnZ1.js",
  "./assets/mllike-CXdrOF99.js",
  "./assets/gas-Bneqetm1.js",
  "./assets/gherkin-heZmZLOM.js",
  "./assets/groovy-D9Dt4D0W.js",
  "./assets/haskell-Cw1EW3IL.js",
  "./assets/haxe-H-WmDvRZ.js",
  "./assets/http-DBlCnlav.js",
  "./assets/idl-BEugSyMb.js",
  "./assets/javascript-iXu5QeM3.js",
  "./assets/julia-DuME0IfC.js",
  "./assets/livescript-BwQOo05w.js",
  "./assets/lua-VAEuO923.js",
  "./assets/mirc-CjQqDB4T.js",
  "./assets/mathematica-DTrFuWx2.js",
  "./assets/modelica-Dc1JOy9r.js",
  "./assets/mumps-BT43cFF4.js",
  "./assets/mbox-CNhZ1qSd.js",
  "./assets/nginx-DdIZxoE0.js",
  "./assets/nsis-LY0VT_u5.js",
  "./assets/ntriples-BfvgReVJ.js",
  "./assets/octave-Ck1zUtKM.js",
  "./assets/oz-BzwKVEFT.js",
  "./assets/pascal--L3eBynH.js",
  "./assets/perl-CdXCOZ3F.js",
  "./assets/pig-CevX1Tat.js",
  "./assets/powershell-CFHJl5sT.js",
  "./assets/properties-C78fOPTZ.js",
  "./assets/protobuf-ChK-085T.js",
  "./assets/pug-DeIclll2.js",
  "./assets/puppet-DMA9R1ak.js",
  "./assets/q-pXgVlZs6.js",
  "./assets/r-B6wPVr8A.js",
  "./assets/rpm-CTu-6PCP.js",
  "./assets/ruby-BK5aLJev.js",
  "./assets/sas-B4kiWyti.js",
  "./assets/scheme-C41bIUwD.js",
  "./assets/shell-CjFT_Tl9.js",
  "./assets/sieve-C3Gn_uJK.js",
  "./assets/smalltalk-CnHTOXQT.js",
  "./assets/solr-DehyRSwq.js",
  "./assets/sparql-DkYu6x3z.js",
  "./assets/spreadsheet-BCZA_wO0.js",
  "./assets/stylus-B533Al4x.js",
  "./assets/swift-BzpIVaGY.js",
  "./assets/stex-C3f8Ysf7.js",
  "./assets/verilog-C6RDOZhf.js",
  "./assets/tcl-DVfN8rqt.js",
  "./assets/textile-CnDTJFAw.js",
  "./assets/tiddlywiki-DO-Gjzrf.js",
  "./assets/tiki-DGYXhP31.js",
  "./assets/toml-Bm5Em-hy.js",
  "./assets/troff-wAsdV37c.js",
  "./assets/ttcn-CfJYG6tj.js",
  "./assets/ttcn-cfg-B9xdYoR4.js",
  "./assets/turtle-B1tBg_DP.js",
  "./assets/webidl-ZXfAyPTL.js",
  "./assets/vb-CmGdzxic.js",
  "./assets/vbscript-BuJXcnF6.js",
  "./assets/velocity-D8B20fx6.js",
  "./assets/vhdl-lSbBsy5d.js",
  "./assets/xquery-DzFWVndE.js",
  "./assets/yacas-BJ4BC0dw.js",
  "./assets/z80-Hz9HOZM7.js",
  "./assets/mscgen-BA5vi2Kp.js",
  "./assets/index-C1hzcH6V.js",
  "./assets/index-BYbfOmZh.js",
  "./assets/diff-DfrG12Sw.js",
  "./assets/index-BEym2N6n.js",
  "./assets/index-CYFsrYUD.js",
  "./assets/index-BtA82nlw.js",
  "./assets/index-D6VIQoXf.js",
  "./assets/index-B_GMKKdF.js",
  "./assets/index-B3KIoU6S.js",
  "./assets/index-hGW1toaR.js",
  "./assets/index-CDO_5b3F.js",
  "./assets/index-B2paR5Va.js",
  "./assets/index-Y7erahSi.js"
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('mdconv-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // Навігація: мережа → кеш (щоб швидко отримувати оновлення)
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put('./index.html', copy));
        return res;
      }).catch(() => caches.match('./index.html', { ignoreSearch: true, ignoreVary: true })),
    );
    return;
  }

  // Ресурси збірки мають хеш у назві → кеш → мережа (і докешувати)
  event.respondWith(
    caches.match(req, { ignoreSearch: true, ignoreVary: true }).then(hit => hit || fetch(req).then(res => {
      if (res.ok && (url.pathname.includes('/assets/') || /\.(png|svg|webmanifest)$/.test(url.pathname))) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
      }
      return res;
    })),
  );
});
