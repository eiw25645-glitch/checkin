/* ===== เช็คชื่อคนงาน ===== */
const ADMIN_CODE='5555';
const S={come:['มา','ม'],leave:['ลา','ล'],late:['สาย','ส'],absent:['ขาด','ข'],half:['ครึ่งวัน','ค']};
const WD=['อา.','จ.','อ.','พ.','พฤ.','ศ.','ส.'];
const SEED=[["กฤษฎา", "สาแก้ว", "สมจิตร", "ขับรถแม็คโคร", "080-124-3772"], ["สุวิทย์", "ตันเขื่อนแก้ว", "วิทย์", "ขับรถแม็คโคร", "089-597-8521"], ["อาทิตย์", "อุตรชน", "สงกาน", "ขับรถแม็คโคร", "084-368-1595"], ["ไชยชนะ", "พูลศิลป์", "นะ", "ขับรถหัวลาก", "089-059-2117"], ["สม", "ขัดโน", "สม", "ขับรถแม็คโคร", "063-594-3452"], ["วรกร", "ก้อนสันทะ", "เกียรติ", "ขับรถ 10 ล้อ", "096-226-3490"], ["พีรดล", "โนจร", "เติ้ล", "เซอร์เวย์", "093-808-1534"], ["สุชินทร์", "นิลคง", "ชิน", "ขับรถบดหนาม", "092-587-5784"], ["สุนิสา", "กาวิน", "น้ำตาล", "บัญชี", "093-248-7188"], ["ชุติเทพ", "ธัญญะ", "เทพ", "ขับรถเกรด", "084-756-4355"], ["กฤษฎา", "ยาธิ", "แบงค์", "ขับรถ 10 ล้อ", "083-200-2965"], ["ทรัพทวี", "พิชัย", "วี", "เซอร์เวย์", "065-010-3660"], ["กชกฤกษณ์", "ป้องแก้ว", "มอส", "ขับรถแม็คโคร", "062-441-0442"], ["สนธิยา", "วงศ์พุฒ", "อิ๋ว", "ธุรการ", "064-546-9128"], ["โยธิน", "จรุงพันธ์", "โย", "ขับรถน้ำ", "063-117-9124"], ["ชัชวาล", "สุวรรณ์", "กบ", "ผู้ช่วยเซอร์เวย์", "093-313-6408"], ["นิพพิชฌน์", "แก้วโก๋", "ทีม", "ผู้ช่วยเซอร์เวย์", "098-785-5786"], ["สมนึก", "วงศ์พุธคำ", "นึก", "ขับรถเทรลเลอร์", "098-538-1854"], ["สมศักดิ์", "ผงลังกา", "สมศักดิ์", "ขับรถ 10 ล้อ", "097-996-8193"], ["ศรีทุ่ง", "มะนิลทิพ", "ทุ่ง", "ขับรถแม็คโคร", "064-281-8741"], ["ศราวุธ", "ขันชัย", "แก่น", "ขับรถตัก", "061-654-2832"], ["เอกชัย", "บุญมี", "มี่", "ผู้ช่วยเซอร์เวย์", "081-316-4365"], ["นิคม", "เทพก๋อง", "คม", "ขับรถแม็คโคร", "095-706-4954"], ["ธนพล", "สุริยะ", "ต้า", "ผู้ช่วยเซอร์เวย์", "081-306-9742"], ["คมเพชร", "ท่าคำ", "หนึ่ง", "ขับรถ 10 ล้อ", "096-142-1412"], ["วิมล", "โพธ์ประเสริฐ", "วิมล", "ขับรถ 6 ล้อ", "088-615-5618"], ["วัทน์สิริ", "ขัตติยะ", "ดอม", "ขับรถ 10 ล้อ", "093-156-6923"], ["ณรงค์พันธ์", "สมควร", "วิค", "ผู้ช่วยเซอร์เวย์", "081-663-4874"], ["พัฒนะ", "โพนไสว", "อ้น", "ขับรถเทรลเลอร์", "083-319-0334"], ["คมสัน", "กิตติยะ", "เจ", "ขับรถแม็คโคร", ""], ["วิมล", "สิงสาร", "หมวด", "ขับรถ 10 ล้อ", "095-383-3132"], ["มนูญ", "สิงสาร", "แม็ก", "ขับรถแม็คโคร", "096-016-2669"]];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const KEY='checkin-v2';
let db;
try{db=JSON.parse(localStorage.getItem(KEY))}catch(e){}
if(!db||!db.workers)db={workers:SEED.map((x,i)=>({id:'w'+(i+1),first:x[0],last:x[1],nick:x[2],pos:x[3],phone:x[4],active:true})),att:{}};
const persist=()=>localStorage.setItem(KEY,JSON.stringify(db));
const pad=n=>String(n).padStart(2,'0');
const fmt=d=>d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());
const parse=s=>{const[a,b,c]=s.split('-').map(Number);return new Date(a,b-1,c)};
const thDate=s=>{const d=parse(s);return d.getDate()+'/'+(d.getMonth()+1)+'/'+(d.getFullYear()+543)};
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const full=w=>(w.first+' '+(w.last||'')).trim();

/* ---- นำทาง ---- */
$$('#nav button').forEach(b=>b.onclick=()=>{
  if($('#check').classList.contains('on'))commit();
  $$('#nav button').forEach(x=>x.classList.toggle('on',x===b));
  $$('.page').forEach(p=>p.classList.toggle('on',p.id===b.dataset.p));
  ({check:drawCheck,workers:drawWorkers,report:drawReport})[b.dataset.p]();
});

/* ---- เช็คชื่อ ---- */
let date=fmt(new Date()),draft={},dirty=false;
function load(){draft=JSON.parse(JSON.stringify(db.att[date]||{}));dirty=false}
function commit(){if(!dirty)return;db.att[date]=draft;persist();dirty=false}
function setDate(d){commit();date=d;load();drawCheck()}
$('#date').onchange=e=>e.target.value&&setDate(e.target.value);
$('#prev').onclick=()=>{const d=parse(date);d.setDate(d.getDate()-1);setDate(fmt(d))};
$('#next').onclick=()=>{const d=parse(date);d.setDate(d.getDate()+1);setDate(fmt(d))};
$('#today').onclick=()=>setDate(fmt(new Date()));
function drawCheck(){
  $('#date').value=date;
  const c=parse(date);
  $('#strip').innerHTML=[-2,-1,0,1,2].map(o=>{const d=new Date(c);d.setDate(c.getDate()+o);return`<button data-d="${fmt(d)}" class="${o?'':'on'}"><b>${d.getDate()}</b>${WD[d.getDay()]}</button>`}).join('');
  $$('#strip button').forEach(b=>b.onclick=()=>setDate(b.dataset.d));
  const ws=db.workers.filter(w=>w.active);
  $('#list').innerHTML=ws.map(w=>{const r=draft[w.id]||{};return`<div class="row ${r.s?'st-'+r.s:''}" data-id="${w.id}">
   <div class="av">${esc([...w.nick][0]||"?")}</div><div class="who"><b>${esc(w.nick)}</b><small>${esc(full(w))}${w.pos?' · '+esc(w.pos):''}</small></div>
   ${w.phone?`<a class="call" href="tel:${esc(w.phone.replace(/[^\d+]/g,''))}">📞 ${esc(w.phone)}</a>`:'<span class="call none">ไม่มีเบอร์</span>'}
   <div class="chips">${Object.entries(S).map(([k,v])=>`<button data-s="${k}" class="${r.s===k?'on':''}">${v[0]}</button>`).join('')}</div>
   <input class="note" placeholder="หมายเหตุ" value="${esc(r.n||'')}"></div>`}).join('')||'<p>ยังไม่มีรายชื่อ ไปที่แท็บ “รายชื่อ”</p>';
  drawSum();
}
function drawSum(){
  const n={};Object.values(draft).forEach(r=>r.s&&(n[r.s]=(n[r.s]||0)+1));
  $('#sum').innerHTML=Object.entries(S).map(([k,v])=>`<span>${v[0]} ${n[k]||0}</span>`).join('');
}
$('#list').addEventListener('click',e=>{
  const b=e.target.closest('.chips button');if(!b)return;
  const row=b.closest('.row'),id=row.dataset.id,r=draft[id]=draft[id]||{};
  r.s=r.s===b.dataset.s?'':b.dataset.s;dirty=true;
  row.className='row '+(r.s?'st-'+r.s:'');
  row.querySelectorAll('.chips button').forEach(x=>x.classList.toggle('on',x.dataset.s===r.s));drawSum();
});
$('#list').addEventListener('input',e=>{
  if(!e.target.classList.contains('note'))return;
  const id=e.target.closest('.row').dataset.id;(draft[id]=draft[id]||{}).n=e.target.value;dirty=true;
});
$('#save').onclick=()=>{dirty=true;commit();const b=$('#save');b.textContent='✅ บันทึกแล้ว';setTimeout(()=>b.textContent='💾 บันทึกข้อมูล',1400)};

/* ---- จัดการรายชื่อ (แอดมิน) ---- */
let unlocked=false,tabActive=true,editId=null;
function admin(){if(unlocked)return true;const c=prompt('ใส่รหัสแอดมิน');if(c===null)return false;if(c===ADMIN_CODE){unlocked=true;return true}alert('รหัสไม่ถูกต้อง');return false}
$$('.tabs button[data-a]').forEach(b=>b.onclick=()=>{tabActive=b.dataset.a==='1';$$('.tabs button[data-a]').forEach(x=>x.classList.toggle('on',x===b));drawWorkers()});
function drawWorkers(){
  $('#wlist').innerHTML=db.workers.filter(w=>w.active===tabActive).map(w=>`<div class="w" data-id="${w.id}">
   <div class="av">${esc([...w.nick][0]||"?")}</div><div class="who"><b>${esc(w.nick)}</b><small> ${esc(full(w))}${w.pos?' · '+esc(w.pos):''}</small><br><small>${esc(w.phone||'-')}</small></div>
   ${tabActive?`<button class="btn" data-x="edit">✏️ แก้ไข</button><button class="btn" data-x="del">🗑 ลบ</button>`:`<button class="btn" data-x="res">↩️ กู้คืน</button>`}</div>`).join('')||'<p>ไม่มีรายการ</p>';
}
$('#add').onclick=()=>{if(!admin())return;openDlg(null)};
$('#wlist').onclick=e=>{
  const b=e.target.closest('[data-x]');if(!b||!admin())return;
  const w=db.workers.find(x=>x.id===b.closest('.w').dataset.id);
  if(b.dataset.x==='edit')openDlg(w);
  else if(b.dataset.x==='del'){if(confirm('ย้าย “'+w.nick+'” ไปแท็บ “ออกแล้ว”?\n(ประวัติเดิมยังอยู่ กู้คืนได้)')){w.active=false;persist();drawWorkers()}}
  else{w.active=true;persist();drawWorkers()}
};
function openDlg(w){
  editId=w?w.id:null;$('#dt').textContent=w?'แก้ไขข้อมูลคนงาน':'เพิ่มคนงานใหม่';
  const f=$('#frm');['first','last','nick','pos','phone'].forEach(k=>f[k].value=w?w[k]||'':'');$('#dlg').showModal();
}
$('#cancel').onclick=()=>$('#dlg').close();
$('#frm').onsubmit=()=>{
  const f=$('#frm'),v={first:f.first.value.trim(),last:f.last.value.trim(),nick:f.nick.value.trim(),pos:f.pos.value.trim(),phone:f.phone.value.trim()};
  if(editId)Object.assign(db.workers.find(x=>x.id===editId),v);
  else db.workers.push({id:'w'+Date.now(),active:true,...v});
  persist();drawWorkers();
};

/* ---- รายงาน ---- */
let view='all';
$('#month').value=date.slice(0,7);
$$('.tabs button[data-v]').forEach(b=>b.onclick=()=>{view=b.dataset.v;$$('.tabs button[data-v]').forEach(x=>x.classList.toggle('on',x===b));drawReport()});
$('#month').onchange=drawReport;$('#person').onchange=drawReport;
const cell=r=>r&&r.s?`<td class="c-${r.s}">${S[r.s][1]}</td>`:'<td></td>';
function drawReport(){
  const m=$('#month').value||date.slice(0,7),[y,mo]=m.split('-').map(Number),nd=new Date(y,mo,0).getDate();
  const title=`สรุปการมาทำงาน เดือน ${mo}/${y+543}`;
  const days=[...Array(nd)].map((_,i)=>{const k=m+'-'+pad(i+1);return{k,d:i+1,w:new Date(y,mo-1,i+1).getDay()}});
  const all=db.workers.filter(w=>w.active||days.some(d=>(db.att[d.k]||{})[w.id]?.s));
  const sel=$('#person');const cur=sel.value;
  sel.innerHTML=all.map(w=>`<option value="${w.id}">${esc(w.nick)} (${esc(full(w))})</option>`).join('');
  sel.value=cur&&all.some(w=>w.id===cur)?cur:(all[0]||{}).id;
  sel.style.display=view==='one'?'':'none';
  const cnt=id=>{const n={};days.forEach(d=>{const r=(db.att[d.k]||{})[id];if(r&&r.s)n[r.s]=(n[r.s]||0)+1});return n};
  const sumH=Object.values(S).map(v=>`<th>${v[1]}</th>`).join('');
  const sumC=n=>Object.keys(S).map(k=>`<td>${n[k]||''}</td>`).join('');
  let html=`<h3>${title}</h3>`;
  if(view==='all'){
    html+=`<table class="t" id="tbl"><tr><th class="l">ชื่อเล่น</th>${days.map(d=>`<th>${d.d}</th>`).join('')}${sumH}</tr>
     <tr><th class="l"></th>${days.map(d=>`<th>${WD[d.w]}</th>`).join('')}${Object.keys(S).map(()=>'<th></th>').join('')}</tr>
     ${all.map(w=>`<tr><td class="l">${esc(w.nick)}</td>${days.map(d=>cell((db.att[d.k]||{})[w.id])).join('')}${sumC(cnt(w.id))}</tr>`).join('')}</table>`;
  }else{
    const w=all.find(x=>x.id===sel.value);
    if(w){const n=cnt(w.id);
      html+=`<p><b>${esc(full(w))}</b> (${esc(w.nick)}) ${w.phone?'โทร '+esc(w.phone):''}<br>${Object.entries(S).map(([k,v])=>v[0]+' '+(n[k]||0)).join(' | ')}</p>
      <table class="t" id="tbl"><tr><th class="l">วันที่</th><th>วัน</th><th>สถานะ</th><th class="l">หมายเหตุ</th></tr>
      ${days.map(d=>{const r=(db.att[d.k]||{})[w.id]||{};return`<tr class="${d.w%6?'':'we'}"><td class="l">${thDate(d.k)}</td><td>${WD[d.w]}</td>${r.s?`<td class="c-${r.s}">${S[r.s][0]}</td>`:'<td></td>'}<td class="l">${esc(r.n||'')}</td></tr>`}).join('')}</table>`}
  }
  html+=`<div class="lg">ม=มา ล=ลา ส=สาย ข=ขาด ค=ครึ่งวัน</div>`;
  $('#area').innerHTML=html;$('#area').dataset.title=title+(view==='one'?' '+(all.find(x=>x.id===sel.value)||{}).nick:'');
}
$('#bPrint').onclick=()=>window.print();
$('#bXls').onclick=()=>{
  if(!window.XLSX)return alert('โหลดตัวสร้าง Excel ไม่ได้ (ต้องต่อเน็ต)');
  const wb=XLSX.utils.table_to_book($('#tbl'),{sheet:'สรุป'});XLSX.writeFile(wb,'เช็คชื่อ_'+$('#month').value+'.xlsx');
};
$('#bImg').onclick=async()=>{
  if(!window.html2canvas)return alert('โหลดตัวสร้างรูปไม่ได้ (ต้องต่อเน็ต)');
  const c=await html2canvas($('#area'),{scale:2,backgroundColor:'#fff',windowWidth:$('#area').scrollWidth+40});
  const a=document.createElement('a');a.href=c.toDataURL('image/png');a.download='เช็คชื่อ_'+$('#month').value+'.png';a.click();
};

load();drawCheck();
