(function(){
  // The page framework can re-run scripts inside <helmet>; run once per page or the
  // injected styles and observers multiply until the tab hangs.
  if (window.__bzPdfLoaded) return;
  window.__bzPdfLoaded = true;
  var raw =decodeURIComponent((location.pathname.split('/').pop() || '')).replace(/\.dc\.html$|\.html$/i,'').replace(/-print$/i,'').trim();
  // Self-hosted, unhinted Carlito (Calibri metrics) for screen AND print — no local Calibri, no hinted Google copy — so PDF glyph weights (I, l, 1) match the screen on every machine.
  (function(){
    var LAT='U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD';
    var EXT='U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF';
    var css='';
    [['latin',LAT],['latin-ext',EXT]].forEach(function(sub){['400','700'].forEach(function(w){['normal','italic'].forEach(function(s){
      var src="url('fonts/carlito-clean-"+sub[0]+'-'+w+'-'+s+".ttf') format('truetype')";
      ['Carlito','Calibri'].forEach(function(fam){ css+="@font-face{font-family:'"+fam+"';font-style:"+s+";font-weight:"+w+";font-display:block;src:"+src+";unicode-range:"+sub[1]+"}"; });
    });});});
    css+='html,body{-webkit-font-smoothing:antialiased;font-synthesis:none;font-kerning:normal;font-variant-ligatures:common-ligatures}@media print{*{text-rendering:geometricPrecision;font-synthesis:none;-webkit-print-color-adjust:exact;print-color-adjust:exact}}';
    var st=document.createElement('style'); st.id='bz-carlito-unhinted'; st.textContent=css;
    (document.head||document.documentElement).appendChild(st);
    function dropGoogle(){ try{ Array.prototype.forEach.call(document.styleSheets,function(sh){ var r; try{ r=sh.cssRules; }catch(e){ return; } for(var i=r.length-1;i>=0;i--){ if(r[i].type===3 && /fonts\.googleapis\.com\/css2\?family=Carlito/i.test(r[i].href||'')) sh.deleteRule(i); } }); }catch(e){} }
    function last(){ dropGoogle(); if(st.parentNode && st.parentNode.lastElementChild!==st) st.parentNode.appendChild(st); }
    document.addEventListener('DOMContentLoaded', last); window.addEventListener('load', last); window.addEventListener('beforeprint', last);
    // Keep the font override last while the page framework adds head styles. The framework also
    // re-orders the head, so an unbounded observer ping-pongs with it and hangs the page: cap the moves.
    try{
      var moves=0, mo=new MutationObserver(function(){
        if (!st.parentNode || st.parentNode.lastElementChild===st) return;
        if (++moves>25) { mo.disconnect(); return; }
        last();
      });
      mo.observe(document.head,{childList:true});
      window.addEventListener('load', function(){ setTimeout(function(){ mo.disconnect(); last(); }, 3000); });
    }catch(e){}
    if (document.fonts && document.fonts.load) ['400 12px Carlito','700 12px Carlito','italic 400 12px Carlito','italic 700 12px Carlito'].forEach(function(f){ document.fonts.load(f).catch(function(){}); });
  })();
  if (!raw || /hub/i.test(raw) || raw === 'index') return;
  var C = {1:'Governance',2:'Strategy',3:'Risk',4:'Resilience',5:'Governance'};
  var BRAND = /^(Business Card|Cufflinks|Jacket|Lapel Pin|Polo Shirt|Assets)/i;
  function pdfName(){
    var m;
    if ((m = raw.match(/^BZ\s*-\s*FY27\s*-\s*C(\d)\s*-\s*(.+)$/i))) return 'BZ - ' + (C[m[1]]||'Governance') + ' - ' + m[2];
    if ((m = raw.match(/^BZ\s*-\s*GM\s*-\s*(.+)$/i))) return 'BZ - GM - ' + m[1];
    if ((m = raw.match(/^BZ\s*-\s*FY27\s*-\s*(.+)$/i))) return 'BZ - Strategy - ' + m[1];
    if ((m = raw.match(/^BZ Governance Trends\s*-\s*(.+)$/i))) return 'BZ - Governance - Governance Trends ' + m[1];
    if ((m = raw.match(/^BZ\s*-\s*(.+)$/i))) return 'BZ - ' + (BRAND.test(m[1]) ? 'Brand' : 'Corporate') + ' - ' + m[1];
    return 'BZ - Corporate - ' + raw;
  }
  // House filename format: [Document description] - vYYYYMMDD (Perth date).
  function perthStamp(){
    try {
      var p = new Intl.DateTimeFormat('en-AU',{timeZone:'Australia/Perth',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date()), o = {};
      p.forEach(function(x){ o[x.type] = x.value; });
      return o.year + o.month + o.day;
    } catch(e) {
      var d = new Date(); return '' + d.getFullYear() + ('0'+(d.getMonth()+1)).slice(-2) + ('0'+d.getDate()).slice(-2);
    }
  }
  var NAME = (pdfName() + ' - v' + perthStamp()).replace(/[\\/:*?"<>|]/g,'-'), prev = null;
  function setT(){ if (document.title !== NAME){ prev = document.title; document.title = NAME; } }
  function resetT(){ if (prev !== null){ document.title = prev; prev = null; } }
  window.addEventListener('beforeprint', setT);
  window.addEventListener('afterprint', resetT);

  var css = '.bz-pdfbtn{position:fixed;right:18px;bottom:18px;z-index:99999;display:inline-flex;align-items:center;gap:7px;background:#284B63;color:#fff;border:0;border-radius:999px;padding:10px 16px 10px 14px;font:700 13px/1 Carlito,Calibri,"Segoe UI",sans-serif;cursor:pointer;box-shadow:0 4px 14px rgba(21,62,90,.3);transition:background 200ms ease}'
    + '.bz-pdfbtn:hover{background:#153E5A}.bz-pdfbtn:active{background:#12354d}.bz-pdfbtn svg{width:15px;height:15px;flex:none}'
    + '@media print{.bz-pdfbtn,.bz-backhub,.bz-pdfbar{display:none!important}}';
  function mount(){
    if (document.querySelector('.bz-pdfbtn')) return;
    var s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'bz-pdfbtn'; b.title = 'Saves as "' + NAME + '.pdf"';
    b.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"></path><path d="m7 11 5 5 5-5"></path><path d="M4 20h16"></path></svg>Print / Save as PDF';
    b.onclick = function(){ setT(); var go=function(){ window.print(); setTimeout(resetT, 1500); }; (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(go, go); };
    document.body.appendChild(b);
    // Hide duplicate in-page print buttons so they don't overlap
    setTimeout(function(){
      var own = Array.prototype.filter.call(document.querySelectorAll('button'), function(x){
        return x !== b && /print|save as pdf|download pdf/i.test(x.textContent || '') && getComputedStyle(x).position === 'fixed';
      });
      own.forEach(function(x){ x.style.display = 'none'; });
    }, 1800);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();
})();
