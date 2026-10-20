<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>เช็คชื่อคนงาน</title>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;500;700&display=swap" rel="stylesheet">
<link rel="icon" href="logo.png.jpg">
<link rel="apple-touch-icon" href="logo.png.jpg">
<link rel="stylesheet" href="style.css">
<style>
.hint{color:var(--mut);font-size:14px;margin:-8px 0 14px}
.addcard{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;text-align:left;font:inherit;color:var(--ink);background:var(--pur);border:1.2px solid var(--ink);border-radius:28px;padding:18px 20px;box-shadow:0 5px 0 var(--ink);cursor:pointer;margin-bottom:18px}
.addcard b{font-size:20px}
.addcard small{display:block;color:#4a4670;font-size:14px}
.addcard i{font-style:normal;flex:none;width:44px;height:44px;border-radius:50%;background:var(--yel);border:1.2px solid var(--ink);display:grid;place-items:center;font-weight:700;font-size:20px}
.addcard:active{transform:translateY(3px);box-shadow:0 2px 0 var(--ink)}
.tabs button[data-a].on{background:var(--yel);color:var(--ink);box-shadow:0 3px 0 var(--ink)}
.w{border-radius:22px;padding:14px 16px;margin-bottom:12px}
.w .who b{font-size:20px}
.w .btn{padding:8px 16px;font-size:16px;font-weight:400}
.ph{display:inline-block;margin-top:6px;background:var(--mint);border:1.2px solid var(--ink);border-radius:99px;padding:3px 12px;font-weight:700;font-size:15px;color:var(--ink);text-decoration:none}
.search{position:relative;margin-bottom:12px}
.search input{width:100%;padding-left:42px;border-radius:99px}
.search::before{content:"";position:absolute;left:15px;top:50%;width:18px;height:18px;transform:translateY(-50%);pointer-events:none;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238a8a98' stroke-width='1.9' stroke-linecap='round'%3E%3Ccircle cx='10.5' cy='10.5' r='6'/%3E%3Cpath d='M15.2 15.2L20 20'/%3E%3C/svg%3E") center/contain no-repeat}
.row[class*="st-"] .chips button:not(.on){display:none}
/* ย่อส่วนหัวหน้าเช็คชื่อ และปุ่มบันทึก */
#check h1{font-size:23px;margin:2px 0 10px}
#check .strip{padding:7px 5px;margin-bottom:10px;border-radius:20px}
#check .strip button{padding:6px 0;font-size:13px;border-radius:12px}
#check .strip button b{font-size:20px}
#check .datebar{gap:7px;margin-bottom:10px}
#check .datebar .btn,#check .datebar input{padding:8px 13px;font-size:16px;border-radius:12px}
#check .sum{gap:7px;margin-bottom:10px}
#check .sum span{padding:4px 13px;font-size:14px}
#check .dash{padding:9px;font-size:15px;margin-bottom:10px;border-radius:14px}
#check .search input{padding-top:9px;padding-bottom:9px;font-size:15px}
.savebar .btn.big{padding:11px;font-size:16px;border-radius:14px}
/* ย่อแถบเมนูด้านล่าง (มือถือ) */
@media(max-width:799px){
 nav{padding:4px 8px calc(4px + env(safe-area-inset-bottom))}
 nav button{padding:4px 2px;border-radius:12px}
 nav button i{font-size:17px;line-height:1.2}
 nav button span{font-size:11px;line-height:1.2}
 main{padding-bottom:calc(96px + env(safe-area-inset-bottom))!important}
 .savebar{bottom:calc(54px + env(safe-area-inset-bottom))}
}
/* ย่อการ์ดรายชื่อให้เห็นหลายคนต่อหน้าจอ (มือถือ) */
@media(max-width:799px){
 .row{padding:8px 10px;margin-bottom:7px;gap:6px 8px;border-radius:16px;grid-template-columns:30px 1fr auto}
 .row .av{width:30px;height:30px;border-radius:9px;font-size:14px}
 .row .who b{font-size:16px}
 .row .who small{font-size:12px;line-height:1.2}
 .row .call{padding:4px 9px;font-size:13px;border-radius:10px}
 .row .chips button{padding:6px 0;font-size:14px;border-radius:10px}
 .row .note{padding:6px 10px;font-size:14px;border-radius:10px}
 .row[class*="st-"]{grid-template-columns:30px 54px 1fr auto;grid-template-areas:"av who who call" "chips chips note note"}
}
.sum span{cursor:pointer;user-select:none}
.sum span.on{box-shadow:0 0 0 3px var(--ink)}
/* ตารางรายงาน: ลงสีเฉพาะ ลา สาย ขาด ครึ่งวัน หยุด (มา ไม่ลงสี) */
.t.allv .c-come{background:#fff}
.pick{display:grid;gap:8px}
.pick .btn{padding:12px 14px;font-size:16px;text-align:left}
/* รายบุคคล: แบบใบตอกบัตรเข้างาน */
.tc{border:2px solid var(--ink);border-radius:14px;overflow:hidden;background:#fffef6}
.tc-h{display:flex;justify-content:space-between;gap:8px;background:var(--ink);color:#fff;padding:9px 12px;font-weight:700}
.tc-who{padding:8px 12px;border-bottom:2px dashed var(--ink);line-height:1.5}
.tc-who b{font-size:20px}
.t.tc-tb{font-size:14px}
.t.tc-tb th{background:#3a3a46}
.t.tc-tb th,.t.tc-tb td{border:1px solid #999}
.t.tc-tb td{padding:3px 6px}
.t.tc-tb td.c-come{background:#a8f0c2}
.tc-sum{display:flex;flex-wrap:wrap;gap:6px;padding:9px 12px;border-top:2px solid var(--ink)}
.tc-sum .sw{border-radius:99px;padding:3px 11px;font-size:14px}
.tc-sig{display:flex;justify-content:space-around;gap:16px;padding:22px 12px 10px;border-top:1px dashed var(--ink)}
.tc-sig span{flex:1;border-top:1px solid var(--ink);text-align:center;padding-top:4px;font-size:13px}
.found{min-height:18px;margin:-6px 4px 10px;font-size:14px;color:var(--mut);font-weight:700}

/* ===== โทนสีสบายตา: ลดสี ขอบเทาบาง ไม่มีเงาหนา ===== */
:root{--line:#dcdce3}
.row,.row[class*="st-"],.card,.w,.addcard,.strip,.dash,.datebar .btn,.datebar input,.search input,.note,.ph,.row .call,.sum span,.tabs button,.tc-sum .sw{border:1px solid var(--line)!important;box-shadow:none!important}
.row,.row[class*="st-"],.w,.card,.strip{background:#fff!important}
.row .av{background:#f1f1f5!important;border:1px solid var(--line)!important}
/* สีเฉพาะปุ่มสถานะ และลดความจัดของสีลง */
.row .chips button{border:1px solid var(--line)!important;box-shadow:none!important;font-weight:500}
.row .chips button.on,.sum span,.tc-sum .sw{filter:saturate(.55) brightness(1.04)}
.row .call,.ph{background:#f1f5f4!important;color:#2f3b38!important;font-weight:500}
.row .who b{color:var(--ink)!important}
/* การ์ดเพิ่มคนงาน / ปุ่มบันทึก / แท็บ */
.addcard{background:#fff!important}
.addcard i{background:#f1f1f5!important;border:1px solid var(--line)!important}
.addcard small{color:var(--mut)}
.tabs button[data-a].on{background:#ececf2!important;box-shadow:none!important}
.sum span.on{box-shadow:0 0 0 2px #9a9aa8!important}
.savebar .btn.big{background:#4a5060!important;color:#fff!important;border:1px solid #4a5060!important;box-shadow:none!important}
nav,nav button{box-shadow:none!important}
nav{border-color:var(--line)!important}
nav button.on{background:#ececf2!important;border:1px solid var(--line)!important}
/* รายบุคคล: ขนาดเท่าบัตรตอก (คอม) */
.tc{border:1px solid #bdbdc8;border-radius:10px}
.tc-h{background:#4a5060}
.tc-who{border-bottom:1px dashed #bdbdc8}
.tc-sum,.tc-sig{border-top:1px solid var(--line)}
.t.tc-tb th{background:#6b7080}
.t.tc-tb th,.t.tc-tb td{border:1px solid #e0e0e6}
.t.tc-tb td.c-come{background:none!important;font-weight:700}
.t.tc-tb tr.we td:not([class^="c-"]),.t.tc-tb tr.we td.c-come{background:#ececf2}
@media(min-width:800px){
 #area:has(.tc){max-width:420px;margin:0 auto;padding:10px}
 #area:has(.tc) .tc-tb{font-size:13px}
 #area:has(.tc) .tc-tb td{padding:2px 6px}
 .exports:has(#bSave:not([style*="none"])){max-width:420px;margin-left:auto;margin-right:auto}
}

/* ===== ไอคอน + ปุ่มแก้ไข (ดินสอ) ===== */
.ic{display:inline-block;vertical-align:-.2em;flex:none}
.btn .ic,.call .ic,.ph .ic,.hint .ic,.addcard b .ic,.tc-who .ic{margin-right:.4em}
nav i{display:inline-flex;align-items:center;justify-content:center}
nav i .ic{vertical-align:middle;margin:0;width:1.25em;height:1.25em}
.addcard i .ic{margin:0;width:20px;height:20px}
.logo{display:grid;place-items:center}
#editBtn{position:fixed;top:calc(10px + env(safe-area-inset-top,0px));right:12px;z-index:60;width:42px;height:42px;padding:0;border-radius:50%;display:grid;place-items:center;background:#fff;border:1px solid var(--line);color:#6b7080;cursor:pointer;font:inherit}
#editBtn>.ic{width:21px;height:21px;margin:0}
#editBtn.on{background:#4a5060;border-color:#4a5060;color:#fff}
#editBtn .bd{position:absolute;right:-3px;bottom:-3px;width:18px;height:18px;border-radius:50%;background:#fff;border:1px solid var(--line);color:#6b7080;display:grid;place-items:center}
#editBtn .bd .ic{width:10px;height:10px;margin:0;vertical-align:0}
#editBtn:active{transform:scale(.94)}
.w{display:flex;align-items:center;gap:8px}
.w .who{flex:1;min-width:0}
.ib{flex:none;width:40px;height:40px;padding:0;border-radius:50%;display:grid;place-items:center;background:#fff;border:1px solid var(--line)!important;box-shadow:none!important;color:#6b7080;cursor:pointer}
.ib .ic{width:19px;height:19px;margin:0}
.ib[data-x="edit"]{color:#4a5060}
.ib:active{background:#ececf2}
/* แถบบันทึก: ซ่อนไว้ เด้งขึ้นเมื่อแอดมินปลดล็อก */
.savebar{transform:translateY(160%);opacity:0;visibility:hidden;pointer-events:none;transition:transform .28s ease,opacity .2s ease,visibility 0s linear .28s}
body.admin .savebar{transform:none;opacity:1;visibility:visible;pointer-events:auto;transition:transform .28s ease,opacity .2s ease}
@media(max-width:799px){body:not(.admin) main{padding-bottom:calc(64px + env(safe-area-inset-bottom))!important}}
/* ปุ่มแก้ไข/ลบ/กู้คืนในรายชื่อ: เห็นเฉพาะแอดมิน */
body:not(.admin) .ib,body:not(.admin) .addcard{display:none}
@media print{#editBtn,.savebar{display:none}}
#dimg{border:1px solid var(--line);border-radius:16px;padding:14px;max-width:min(92vw,420px);max-height:92vh;overflow:auto}
#dimg h2{margin:0 0 4px;font-size:18px}
.dimg-t{margin:0 0 10px;color:var(--mut);font-size:14px}
#dimg img{display:block;width:100%;height:auto;border:1px solid var(--line);border-radius:8px;-webkit-touch-callout:default}
#dimg .acts{margin-top:10px;display:flex;justify-content:flex-end}
</style>
</head>
<body>
<nav id="nav">
  <div class="logo"><span data-ic="check"></span></div>
  <button data-p="check" class="on"><i data-ic="clipboard"></i><span>เช็คชื่อ</span></button>
  <button data-p="workers"><i data-ic="hardhat"></i><span>รายชื่อ</span></button>
  <button data-p="report"><i data-ic="chart"></i><span>รายงาน</span></button>
</nav>
<button id="editBtn" type="button" aria-label="แก้ไข"></button>
<main>
  <section id="check" class="page on">
    <h1>เช็คชื่อรายวัน</h1>
    <div class="card strip" id="strip"></div>
    <div class="datebar">
      <button class="btn ghost" id="prev">◀</button>
      <input type="date" id="date">
      <button class="btn ghost" id="next">▶</button>
      <button class="btn ghost" id="today">วันนี้</button>
    </div>
    <div class="sum" id="sum"></div>
    <div class="search"><input type="search" id="q1" placeholder="ค้นหา ชื่อ / ชื่อเล่น / ตำแหน่ง / เบอร์โทร"></div>
    <div class="found" id="c1"></div>
    <div id="list"></div>
    <div class="savebar"><button class="btn red big" id="save"><span data-ic="save"></span>บันทึกข้อมูล</button></div>
  </section>

  <section id="workers" class="page">
    <h1>จัดการรายชื่อคนงาน</h1>
    <p class="hint"><span data-ic="lock"></span>ต้องใช้รหัสแอดมินจึงแก้ไขได้</p>
    <button class="addcard" id="add">
      <span><b><span data-ic="plus"></span>เพิ่มคนงานใหม่</b><small>ชื่อ-นามสกุล ชื่อเล่น เบอร์โทร</small></span><i data-ic="arrow"></i>
    </button>
    <div class="search"><input type="search" id="q2" placeholder="ค้นหา ชื่อ / ชื่อเล่น / ตำแหน่ง / เบอร์โทร"></div>
    <div class="found" id="c2"></div>
    <div class="tabs"><button class="on" data-a="1">ทำงานอยู่</button><button data-a="0">ออกแล้ว</button></div>
    <div id="wlist"></div>
  </section>

  <section id="report" class="page">
    <h1>สรุปและรายงาน</h1>
    <div class="datebar">
      <input type="month" id="month">
      <div class="tabs inline"><button class="on" data-v="all">ภาพรวมทุกคน</button><button data-v="one">รายบุคคล</button></div>
      <select id="person"></select>
      <select id="sym"><option value="✓">มา แสดงเป็น ✓</option><option value="I">มา แสดงเป็น I</option><option value="ม">มา แสดงเป็น ม</option></select>
    </div>
    <div class="exports">
      <button class="btn ghost" id="bPrint"><span data-ic="printer"></span>พิมพ์</button>
      <button class="btn ghost" id="bPdf"><span data-ic="file"></span>โหลด PDF</button>
      <button class="btn ghost" id="bSave" style="display:none"><span data-ic="download"></span>บันทึกบัตร</button>
      <button class="btn ghost" id="bAllPdf"><span data-ic="files"></span>PDF บัตรทุกคน</button>
      <button class="btn ghost" id="bXls"><span data-ic="table"></span>Excel</button>
      <button class="btn ghost" id="bImg"><span data-ic="image"></span>รูปภาพ</button>
    </div>
    <div id="area" class="card"></div>
  </section>
</main>

<dialog id="dlg">
  <form method="dialog" id="frm">
    <h2 id="dt">เพิ่มคนงานใหม่</h2>
    <label>ชื่อ<input name="first" required></label>
    <label>นามสกุล<input name="last"></label>
    <label>ชื่อเล่น<input name="nick" required></label>
    <label>ตำแหน่ง<input name="pos"></label>
    <label>เบอร์โทรศัพท์<input name="phone" type="tel" inputmode="tel" placeholder="0812345678"></label>
    <div class="acts"><button type="button" class="btn ghost" id="cancel">ยกเลิก</button><button class="btn red">บันทึก</button></div>
  </form>
</dialog>

<dialog id="dimg">
  <h2>บันทึกรูปบัตร</h2>
  <p class="dimg-t">กดค้างที่รูป แล้วเลือก “บันทึกรูปภาพ”</p>
  <img id="dimgPic" alt="บัตรบันทึกเวลาทำงาน">
  <div class="acts"><button type="button" class="btn ghost" id="dimgX">ปิด</button></div>
</dialog>

<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="app.js"></script>
<script>
/* ===== ส่วนเสริม ===== */
(()=>{
  /* ไอคอน: ใส่ไอคอนในปุ่มที่ระบุ data-ic */
  $$('[data-ic]').forEach(el=>{el.innerHTML=ic(el.dataset.ic)});
  /* ปุ่มแก้ไข (ดินสอ) มุมขวาสุด: แตะเพื่อปลดล็อกแอดมิน / แตะอีกครั้งเพื่อล็อก */
  const eb=$('#editBtn');
  const syncEdit=()=>{
    eb.classList.toggle('on',unlocked);document.body.classList.toggle('admin',unlocked);
    const t=unlocked?'โหมดแก้ไขเปิดอยู่ (แตะเพื่อล็อก)':'แก้ไข (ต้องใส่รหัสแอดมิน)';
    eb.title=t;eb.setAttribute('aria-label',t);
    eb.innerHTML=ic('pencil')+'<span class="bd">'+ic(unlocked?'unlock':'lock')+'</span>';
  };
  const _admin=admin;
  admin=function(){const r=_admin();syncEdit();return r};
  eb.onclick=()=>{if(unlocked){commit();unlocked=false}else if(!admin())return;syncEdit()};
  syncEdit();
})();
(()=>{
  /* 1) เฉพาะแอดมินเช็คชื่อได้ */
  const gate=(el,test)=>el.addEventListener('click',e=>{
    if(test&&!test(e))return;
    if(!admin()){e.stopImmediatePropagation();e.preventDefault()}
  },true);
  gate($('#save'));
  gate($('#list'),e=>e.target.closest('.chips button'));
  $('#list').addEventListener('focusin',e=>{
    if(!e.target.classList.contains('note')||unlocked)return;
    const t=e.target;t.blur();if(admin())t.focus();
  });
  commit=function(){if(!dirty||!unlocked)return;db.att[date]=draft;persist();dirty=false};

  /* 2) กดเบอร์โทรออกได้ทุกหน้า */
  const tel=p=>p?`<a class="ph" href="tel:${esc(p.replace(/[^\d+]/g,''))}">${ic('phone','#2f3b38')}${esc(p)}</a>`:'';
  drawWorkers=function(){
    $('.tabs button[data-a="1"]').textContent='ทำงานอยู่ ('+db.workers.filter(w=>w.active).length+')';
    $('#wlist').innerHTML=db.workers.filter(w=>w.active===tabActive).map(w=>`<div class="w" data-id="${w.id}">
     <div class="who"><b>${esc(w.nick)}</b><small>${esc(full(w))}${w.pos?' · '+esc(w.pos):''}</small>${tel(w.phone)}</div>
     ${tabActive?`<button class="ib" data-x="del" title="ลบ" aria-label="ลบ">${ic('trash')}</button><button class="ib" data-x="edit" title="แก้ไข" aria-label="แก้ไข">${ic('pencil')}</button>`:`<button class="ib" data-x="res" title="กู้คืน" aria-label="กู้คืน">${ic('undo')}</button>`}</div>`).join('')||'<p>ไม่มีรายการ</p>';
    run2();
  };
  /* เตรียมรูปบัตรไว้ล่วงหน้า เพื่อให้กดบันทึกแล้วเปิดหน้าต่างแชร์ได้ทันที (มือถือบังคับให้เรียกทันทีหลังแตะ) */
  let cardB=null,cardP=null,cardT=0,cardTimer=null;
  const mkCard=()=>snap(640).then(c=>new Promise((ok,no)=>c.toBlob(x=>x?ok(x):no(),'image/png')));
  function resetCard(){cardT++;cardB=null;cardP=null;clearTimeout(cardTimer)}
  function prepCard(){
    resetCard();const t=cardT;if(!window.html2canvas)return;
    cardTimer=setTimeout(()=>{const p=mkCard();cardP=p;p.then(x=>{if(t===cardT)cardB=x}).catch(()=>{})},300);
  }
  const dr=drawReport;
  drawReport=function(){
    dr();
    const p=$('#area p');
    if(p)p.innerHTML=p.innerHTML.replace(/โทร\s+([\d\-+]+)/,(m,n)=>tel(n));
    const t=$('#tbl');
    if(t&&view==='all')t.classList.add('allv');   // ตารางรวม: "มา" ไม่ลงสี
    if(view==='one'){timecard();prepCard()}else resetCard();
    // รายบุคคล: รวมปุ่มส่งออกเป็นปุ่มเดียวให้เลือกรูปแบบ
    ['bPrint','bPdf','bXls','bImg'].forEach(i=>$('#'+i).style.display=view==='one'?'none':'');
    $('#bSave').style.display=view==='one'?'':'none';
  };
  /* รายบุคคล แบบใบตอกบัตรเข้างาน */
  function tcHTML(w,m){
    m=m||$('#month').value||date.slice(0,7);const [y,mo]=m.split('-').map(Number),nd=new Date(y,mo,0).getDate(),n={};
    let rows='';
    for(let d=1;d<=nd;d++){
      const k=m+'-'+pad(d),wd=new Date(y,mo-1,d).getDay(),r=(db.att[k]||{})[w.id]||{};
      if(r.s)n[r.s]=(n[r.s]||0)+1;
      rows+=`<tr class="${wd%6?'':'we'}"><td class="l">${thDate(k)}</td><td>${WD[wd]}</td>${r.s?`<td class="c-${r.s}">${S[r.s][0]}</td>`:'<td></td>'}<td class="l">${esc(r.n||'')}</td></tr>`;
    }
    return `<div class="tc">
      <div class="tc-h"><span>บัตรบันทึกเวลาทำงาน</span><span>เดือน ${mo}/${y+543}</span></div>
      <div class="tc-who"><b>${esc(w.nick)}</b> ${esc(full(w))}${w.pos?' · '+esc(w.pos):''}${w.phone?'<br>'+tel(w.phone):''}</div>
      <table class="t tc-tb" id="tbl"><tr><th class="l">วันที่</th><th>วัน</th><th>สถานะ</th><th class="l">หมายเหตุ</th></tr>${rows}</table>
      <div class="tc-sum">${Object.entries(S).map(([k,v])=>`<span class="sw c-${k}">${v[0]} <b>${n[k]||0}</b></span>`).join('')}</div>
      <div class="tc-sig"><span>ลงชื่อพนักงาน</span><span>ผู้ตรวจสอบ</span></div></div>`;
  }
  function timecard(){
    const w=db.workers.find(x=>x.id===$('#person').value);if(!w)return;
    $('#area').innerHTML=tcHTML(w);
  }
  $('#month').onchange=$('#sym').onchange=$('#person').onchange=drawReport;

  /* 3) ค้นหารายชื่อ */
  const norm=s=>String(s||'').toLowerCase().replace(/[\s\-]/g,'');
  const hay=id=>{const w=db.workers.find(x=>x.id===id);return w?norm([w.nick,w.first,w.last,w.pos,w.phone].join('')):''};
  /* กรองตามสถานะ: กดที่ป้ายสรุป (มา/ลา/สาย/ขาด/ครึ่งวัน/หยุด/ยังไม่เช็ค) */
  let filt=null;
  const keys=[...Object.keys(S),'none'];
  const fit=id=>{if(!filt)return true;const s=(draft[id]||{}).s||'';return filt==='none'?!s:s===filt};
  const paint=()=>[...$('#sum').children].forEach((x,i)=>x.classList.toggle('on',keys[i]===filt));
  const ds=drawSum;
  drawSum=function(){ds();paint()};
  $('#sum').addEventListener('click',e=>{
    const s=e.target.closest('span');if(!s)return;
    const k=keys[[...$('#sum').children].indexOf(s)];
    filt=filt===k?null:k;paint();run1();
  });
  function run(box,rowSel,cnt){
    const q=norm($(box).value),f=box==='#q1'&&filt;let n=0,t=0;
    $$(rowSel).forEach(el=>{t++;const ok=(!q||hay(el.dataset.id).includes(q))&&(box!=='#q1'||fit(el.dataset.id));el.style.display=ok?'':'none';if(ok)n++});
    $(cnt).textContent=(q||f)?(n?`พบ ${n} จาก ${t} คน`:'ไม่พบรายชื่อ'):'';
  }
  const run1=()=>run('#q1','#list .row','#c1');
  const run2=()=>run('#q2','#wlist .w','#c2');
  const dc=drawCheck;
  drawCheck=function(){dc();run1()};
  $('#q1').addEventListener('input',run1);
  $('#q2').addEventListener('input',run2);

  /* 4) ซิงค์ข้อมูลกลางแบบเรียลไทม์ (/api/db) */
  const API='/api/db',rawSet=Storage.prototype.setItem;
  let rev=0,timer=null,pending=false;
  // แอดมินบันทึกเมื่อไร (persist เขียน localStorage) ส่งขึ้นเซิร์ฟเวอร์ด้วย
  Storage.prototype.setItem=function(k,v){
    rawSet.call(this,k,v);
    if(k!==KEY||!unlocked)return;
    pending=true;clearTimeout(timer);
    timer=setTimeout(async()=>{
      try{
        const r=await fetch(API,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({code:ADMIN_CODE,db})});
        const j=await r.json();if(!j.rev)throw 0;rev=j.rev;
      }catch(e){alert('บันทึกขึ้นเซิร์ฟเวอร์ไม่สำเร็จ ลองกดบันทึกอีกครั้ง')}
      pending=false;
    },400);
  };
  // ทุกคนดึงข้อมูลล่าสุดทุก 5 วินาที
  async function pull(){
    if(pending||(dirty&&unlocked)||$('#dlg').open)return;
    const a=document.activeElement;if(a&&a.classList&&a.classList.contains('note'))return;
    try{
      const j=await (await fetch(API,{cache:'no-store'})).json();
      if(!j.db||j.rev===rev||pending)return;
      rev=j.rev;db=j.db;
      rawSet.call(localStorage,KEY,JSON.stringify(db));
      load();
      ({check:drawCheck,workers:drawWorkers,report:drawReport})[document.querySelector('.page.on').id]();
    }catch(e){}
  }
  pull();setInterval(pull,5000);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)pull()});

  /* 5) ปุ่มโหลด PDF / รูปภาพ / บันทึกบัตร */
  async function snap(w){   // ถ่ายตารางที่ความกว้างเต็ม ให้คมชัดแม้ดูในมือถือ
    const box=document.createElement('div');
    box.style.cssText='position:fixed;left:-99999px;top:0;background:#fff;padding:12px;width:'+w+'px';
    const cl=$('#area').cloneNode(true);
    cl.removeAttribute('id');cl.style.cssText='border:0;border-radius:0;padding:0;margin:0;overflow:visible';
    box.appendChild(cl);document.body.appendChild(box);
    try{return await html2canvas(box,{scale:2,backgroundColor:'#fff'})}finally{box.remove()}
  }
  const fname=()=>{const w=db.workers.find(x=>x.id===$('#person').value);return (view==='one'&&w?'บัตร_'+w.nick:'เช็คชื่อ')+'_'+$('#month').value};
  $('#bPdf').onclick=async()=>{
    if(!window.html2canvas||!window.jspdf)return alert('โหลดตัวสร้าง PDF ไม่ได้ (ต้องต่อเน็ต)');
    const b=$('#bPdf'),old=b.innerHTML;b.textContent='กำลังสร้าง...';
    try{
      const land=view==='all',c=await snap(land?1400:720);
      const pdf=new window.jspdf.jsPDF({orientation:land?'l':'p',unit:'mm',format:'a4'});
      const W=pdf.internal.pageSize.getWidth()-10,H=pdf.internal.pageSize.getHeight()-10;
      const sh=Math.floor(H*c.width/W);          // ความสูง (px) ที่ใส่ได้ต่อหน้า
      for(let y=0,pg=0;y<c.height;y+=sh,pg++){
        const h=Math.min(sh,c.height-y),s=document.createElement('canvas');
        s.width=c.width;s.height=h;
        s.getContext('2d').drawImage(c,0,y,c.width,h,0,0,c.width,h);
        if(pg)pdf.addPage();
        pdf.addImage(s.toDataURL('image/jpeg',.95),'JPEG',5,5,W,h*W/c.width);
      }
      pdf.save(fname()+'.pdf');
    }catch(e){alert('สร้าง PDF ไม่สำเร็จ')}
    b.innerHTML=old;
  };
  $('#bImg').onclick=async()=>{
    if(!window.html2canvas)return alert('โหลดตัวสร้างรูปไม่ได้ (ต้องต่อเน็ต)');
    try{
      const c=await snap(view==='all'?1400:720);
      const a=document.createElement('a');a.href=c.toDataURL('image/png');a.download=fname()+'.png';a.click();
    }catch(e){alert('สร้างรูปไม่สำเร็จ')}
  };
  $('#bAllPdf').onclick=async()=>{
    if(!window.html2canvas||!window.jspdf)return alert('โหลดตัวสร้าง PDF ไม่ได้ (ต้องต่อเน็ต)');
    const ws=db.workers.filter(w=>w.active);if(!ws.length)return alert('ไม่มีรายชื่อคนงาน');
    const b=$('#bAllPdf'),old=b.innerHTML,m=$('#month').value||date.slice(0,7);
    const pdf=new window.jspdf.jsPDF({orientation:'p',unit:'mm',format:'a4'});
    const PW=pdf.internal.pageSize.getWidth(),PH=pdf.internal.pageSize.getHeight(),M=8;
    try{
      for(let i=0;i<ws.length;i++){
        b.textContent='กำลังสร้าง '+(i+1)+'/'+ws.length;
        const box=document.createElement('div');
        box.style.cssText='position:fixed;left:-99999px;top:0;background:#fff;padding:12px;width:560px';
        box.innerHTML=tcHTML(ws[i],m).replace(' id="tbl"','');
        document.body.appendChild(box);
        let c;try{c=await html2canvas(box,{scale:2,backgroundColor:'#fff'})}finally{box.remove()}
        let w=PW-2*M,h=c.height*w/c.width;
        if(h>PH-2*M){h=PH-2*M;w=c.width*h/c.height}
        if(i)pdf.addPage();
        pdf.addImage(c.toDataURL('image/jpeg',.95),'JPEG',(PW-w)/2,M,w,h);
      }
      pdf.save('บัตรตอก_ทุกคน_'+m+'.pdf');
    }catch(e){alert('สร้าง PDF ไม่สำเร็จ')}
    b.innerHTML=old;
  };
  /* บันทึกบัตร = บันทึกเป็นรูปภาพ (มือถือ: เปิดหน้าต่างแชร์ → "บันทึกรูปภาพ" ลงเครื่อง) */
  $('#bSave').onclick=async()=>{
    if(!window.html2canvas)return alert('โหลดตัวสร้างรูปไม่ได้ (ต้องต่อเน็ต)');
    const b=$('#bSave');let blob=cardB;
    if(!blob){
      const old=b.innerHTML;b.textContent='กำลังสร้างรูป...';
      try{blob=await(cardP||mkCard())}catch(e){alert('สร้างรูปไม่สำเร็จ');b.innerHTML=old;return}
      b.innerHTML=old;
    }
    const name=fname()+'.png',file=new File([blob],name,{type:'image/png'});
    if(navigator.canShare&&navigator.canShare({files:[file]})){
      try{await navigator.share({files:[file],title:name});return}
      catch(e){if(e&&e.name==='AbortError')return}
    }
    const url=URL.createObjectURL(blob);
    if(matchMedia('(pointer:coarse)').matches){      // มือถือที่แชร์ไม่ได้: โชว์รูปให้กดค้างบันทึก
      $('#dimgPic').src=url;$('#dimg').showModal();
    }else{
      const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),4000);
    }
  };
  $('#dimgX').onclick=()=>$('#dimg').close();
  $('#dimg').addEventListener('close',()=>{const u=$('#dimgPic').src;$('#dimgPic').removeAttribute('src');if(u.startsWith('blob:'))URL.revokeObjectURL(u)});
})();
</script>
</body>
</html>
