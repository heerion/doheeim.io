/* ============================================================
   ▼▼▼ 전시 기록. 여기만 채우면 그리드·연도별 목록·미리보기에 모두 반영됩니다.
   d 는 "YYYY.MM" 형식으로 적어주세요 (연도별 정리에 사용됩니다).
   img 는 이미지 경로 (예: "img/ex-01.jpg"). 비워두면 회색 패턴이 나옵니다.
   url 은 클릭했을 때 열릴 주소. 미술관의 전시 소개 페이지를 넣으면 됩니다.
   ============================================================ */
const EX = [
  // 2026년도
  { t:"명상관", v:"뮤지엄 산",     d:"2026.07", img:"", url:"https://www.museumsan.org/meditation?tab=intro"},
  { t:"제임스 터렐관", v:"뮤지엄 산",     d:"2026.07", img:"", url:"https://www.museumsan.org/james-turrell"},
  { t:"En attendant: 기다리며", v:"뮤지엄 산",     d:"2026.07", img:"", url:"https://www.museumsan.org/art-museum?tab=exhibition-intro"},
  { t:"단원 김홍도, 시대를 그리다", v:"국립중앙박물관",     d:"2026.07", img:"", url:"https://www.museum.go.kr/MUSEUM/contents/M0202010000.do?menuId=current&schM=view&act=current&exhiSpThemId=3515965&listType=list"},
  { t:"어메이징 타일랜드: 태국미술명품전", v:"국립중앙박물관",     d:"2026.07", img:"", url:"https://www.museum.go.kr/MUSEUM/contents/M0202010000.do?menuId=current&exhiSpThemId=3529711&schM=view&listType=list" },
  { t:"금기숙 작품전 - 비움을 엮다",                  v:"진주실크박물관",              d:"2026.07", img:"", url:"https://www.jinju.go.kr/jinjusilk/sub4_1" },
  { t:"이미지의 미래들 서사하는 기억, 채색화를 넘어 - 내면의 풍경", v:"진주시립 이성자박물관", d:"2026.07", img:"", url:"https://www.jinju.go.kr/rheesjmuseum/b/exhibition/3001" },
  { t:"이미지의 미래들 서사하는 기억, 채색화를 넘어 - 광장의 기억", v:"철도문화공원", d:"2026.07", img:"", url:"https://www.jinju.go.kr/rheesjmuseum/b/exhibition/3002" },
  { t:"이미지의 미래들 서사하는 기억, 채색화를 넘어 - 시간의 중첩", v:"국립진주박물관", d:"2026.07", img:"", url:"https://www.jinju.go.kr/rheesjmuseum/b/exhibition/3002" },
  { t:"에메랄드 정원", v:"푸투라서울", d:"2026.07", img:"", url:"https://www.lecolevancleefarpels.com/kr/ko/exhibition/garden-of-emeralds-seoul" },
  { t:"이것은 개념미술이 (아니)다", v:"국립현대미술관 서울", d:"2026.07", img:"", url:"https://www.mmca.go.kr/exhibitions/exhibitionsDetail.do?exhFlag=1&exhId=202601060002027"},
  { t:"서서울의 투명한 |청소년| 기계", v:"서울시립 서서울미술관", d:"2026.07", img:"", url:"https://sema.seoul.go.kr/kr/whatson/exhibition/detail?exNo=1528398"},

  { t:"페르난도 보테로: 형태의 미학", v:"예술의전당 한가람디자인미술관", d:"2026.06", img:"", url:"https://www.sac.or.kr/site/main/show/show_view?SN=76470"},
  { t:"각角진 백자 이야기", v:"국립중앙박물관", d:"2026.06", img:"", url:"https://www.museum.go.kr/MUSEUM/contents/M0202030000.do?schM=view&menuId=past&exhiSpThemId=3056031&listType=list "},
  { t:"깨달음으로 이끄는 부처 안동 봉정사 괘불", v:"국립중앙박물관", d:"2026.06", img:"", url:"https://www.museum.go.kr/MUSEUM/contents/M0202030000.do?menuId=past&schM=view&act=past&exhiSpThemId=3465083&listType=list"},
  { t:"더 하이브리드", v:"서울공예박물관", d:"2026.06", img:"", url:"https://craftmuseum.seoul.go.kr/exhibit/plan/view/180"},
  { t:"색유만개 : 권순형 기증특별전시", v:"서울공예박물관", d:"2026.06", img:"", url:"https://craftmuseum.seoul.go.kr/exhibit/plan/view/185"},

  { t:"고미술 소장품", v:"리움미술관", d:"2026.05", img:"", url:"https://www.leeumhoam.org/leeum/exhibition/73?params=Y"},
  { t:"유영국: 산은 내 안에 있다", v:"서울시립미술관 서소문본관", d:"2026.05", img:"", url:"https://sema.seoul.go.kr/kr/whatson/exhibition/detail?exNo=1529410"},

  { t:"Till 7, From 7", v:"드로잉 룸", d:"2026.03", img:"", url:"https://www.drawingroom.kr/exhibition/past/till-7-from-7-1%EB%B6%80"},


  // 2025년도
  { t:"오랑주리 - 오르세미술관 특별전 : 세잔, 르누아르",              v:"예술의전당 한가람디자인미술관",         d:"2025.12", img:"", url:"https://www.sac.or.kr/site/main/show/show_view?SN=70064" },
  { t:"올해의 작가상 2025",                 v:"국립현대미술관 서울", d:"2025.12", img:"", url:"https://www.mmca.go.kr/exhibitions/exhibitionsDetail.do?exhFlag=3&exhId=202501060001895" },

  { t:"김창열", v:"국립현대미술관 서울", d:"2025.10", img:"", url:"https://www.mmca.go.kr/exhibitions/exhibitionsDetail.do?exhFlag=3&exhId=202501060001894"},
  { t:"한국현대미술 하이라이트", v:"국립현대미술관 서울", d:"2025.10", img:"", url:"https://www.mmca.go.kr/exhibitions/exhibitionsDetail.do?exhFlag=3&exhId=202501060001886"},

  { t:"서화관", v:"국립중앙박물관", d:"2025.7", img:"", url:"https://www.museum.go.kr/MUSEUM/contents/M0201050100.do?showHallId=758&showroomCode=DM0028"},

  { t:"론 뮤익", v:"국립현대미술관 서울", d:"2025.04", img:"", url:"https://www.mmca.go.kr/exhibitions/exhibitionsDetail.do?exhFlag=3&exhId=202501060001881"},

  // 2024년도
  { t:"올해의 작가상 2024",            v:"국립현대미술관 서울",         d:"2024.10", img:"", url:"https://www.mmca.go.kr/exhibitions/exhibitionsDetail.do?exhFlag=3&exhId=202403060001752"},

  // 2023년도 
  { t:"MSCHF: NOTHING IS SACRED",     v:"대림미술관",   d:"2023.11", img:"", url:"https://www.daelimmuseum.org/exhibition/current/PRG202309220002" },

  // 2022년도
  { t:"Sambypen Conspiracy Vol. 1: Player",                v:"갤러리 스탠",      d:"2022.11", img:"", url:"https://www.gallerystan.com/sambypenconpiracy"},
  { t:"어반브레이크 2022",                  v:"코엑스",              d:"2022.07", img:"", url:"https://www.coex.co.kr/exhibitions/%EC%96%B4%EB%B0%98%EB%B8%8C%EB%A0%88%EC%9D%B4%ED%81%AC-2022/#;&g=share" },
  { t:"조선의 승려 장인",                  v:"국립중앙박물관",              d:"2022.02", img:"", url:"https://www.museum.go.kr/MUSEUM/contents/M0202010000.do?menuId=current&schM=view&exhiSpThemId=631858&listType="},
];

const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));
const pic = (src, alt) => src ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy">` : "";

/* 최신순 정렬 */
const list = [...EX].sort((a, b) => b.d.localeCompare(a.d));
document.getElementById("cnt").textContent = EX.length;

/* ---------- 그리드 ---------- */
document.getElementById("work").innerHTML = list.map(e => `
  <a class="w rv" href="${esc(e.url)}" target="_blank" rel="noopener">
    <span class="ph">${pic(e.img, e.t)}</span>
    <span class="cap">
      <span class="cap__t">${esc(e.t)}</span>
      <span class="cap__m lbl">${esc(e.v)} · ${esc(e.d)}</span>
    </span>
  </a>`).join("");

/* ---------- 연도별 INDEX ---------- */
const byYear = {};
list.forEach(e => { const y = e.d.slice(0, 4); (byYear[y] = byYear[y] || []).push(e); });
const years = Object.keys(byYear).sort((a, b) => b - a);

document.getElementById("idx").innerHTML = years.map((y, k) => `
  <div class="yr${k === 0 ? " is-open" : ""}">
    <button class="yr__b" aria-expanded="${k === 0}">
      <span class="yr__y">${y}</span>
      <span class="yr__c lbl">전시 ${byYear[y].length}</span>
      <span class="yr__x" aria-hidden="true">+</span>
    </button>
    <div class="yr__p"><div class="yr__in">
      ${byYear[y].map((e, i) => `
        <a class="ir" style="--i:${i}" href="${esc(e.url)}" target="_blank" rel="noopener">
          <span class="ir__n lbl">${String(i + 1).padStart(2, "0")}</span>
          <span class="ir__t">${esc(e.t)}</span>
          <span class="ir__v">${esc(e.v)}</span>
          <span class="ir__d lbl">${esc(e.d)}</span>
        </a>`).join("")}
    </div></div>
  </div>`).join("");

/* 열림/닫힘 */
function setH(yr){
  const p = yr.querySelector(".yr__p");
  p.style.maxHeight = yr.classList.contains("is-open") ? p.firstElementChild.scrollHeight + "px" : "0px";
}
document.querySelectorAll(".yr").forEach(setH);

document.getElementById("idx").addEventListener("click", e => {
  const b = e.target.closest(".yr__b");
  if (!b) return;
  const yr = b.closest(".yr");
  const open = yr.classList.toggle("is-open");
  b.setAttribute("aria-expanded", open);
  setH(yr);
});

/* ---------- Grid / Index ---------- */
const bG = document.getElementById("vGrid"), bL = document.getElementById("vList");
function view(isList){
  document.body.classList.toggle("is-list", isList);
  bG.setAttribute("aria-pressed", !isList);
  bL.setAttribute("aria-pressed", isList);
  if (isList) document.querySelectorAll(".yr").forEach(setH);
  else document.querySelectorAll("#work .rv").forEach(el => el.classList.add("on"));
}
bG.onclick = () => view(false);
bL.onclick = () => view(true);

/* 사진이 한 장도 없으면 Grid는 빈 화면이 되므로 전환 버튼 자체를 숨김.
   EX 의 img 에 경로를 하나라도 넣으면 버튼이 자동으로 다시 나타납니다. */
const hasPhoto = EX.some(e => e.img && e.img.trim());
document.querySelector(".vw").style.display = hasPhoto ? "" : "none";

/* 기본 화면을 Index 로. 사진을 다 채운 뒤 Grid 를 기본으로 하고 싶으면
   아래 view(true) 를 view(false) 로 바꾸면 됩니다. */
view(true);

/* ---------- reveal ----------/* ---------- reveal ---------- */
const io = new IntersectionObserver(es => {
  es.forEach(x => { if (x.isIntersecting) { x.target.classList.add("on"); io.unobserve(x.target); } });
}, { threshold: .1, rootMargin: "0px 0px -4% 0px" });
document.querySelectorAll(".rv").forEach(el => io.observe(el));


/* ---------- 이름 크기를 화면 폭에 맞춤 ---------- */
const nm = document.querySelector(".hero__nm");
const hero = document.querySelector(".hero");
function fitName(){
  const cs = getComputedStyle(hero);
  const box = hero.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
  nm.style.fontSize = "100px";
  const w = nm.getBoundingClientRect().width;
  nm.style.fontSize = (100 * box / w * 0.998).toFixed(1) + "px";
}
fitName();
if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitName);

/* ---------- 상단바 높이 기록 + 메뉴 클릭 이동 ---------- */
const bar = document.querySelector(".top");
function setTopH(){
  document.documentElement.style.setProperty("--top-h", bar.offsetHeight + "px");
}
setTopH();

const smooth = !matchMedia("(prefers-reduced-motion: reduce)").matches;
document.querySelectorAll("[data-go]").forEach(b => {
  b.addEventListener("click", () => {
    const t = b.dataset.go;
    if (t === "top"){
      scrollTo({ top:0, behavior: smooth ? "smooth" : "auto" });
      return;
    }
    const el = document.querySelector(t);
    if (el) el.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block:"start" });
  });
});

/* ---------- 화면 크기 바뀔 때 다시 계산 ---------- */
let t;
addEventListener("resize", () => {
  clearTimeout(t);
  t = setTimeout(() => {
    fitName();
    setTopH();
    document.querySelectorAll(".yr").forEach(setH);
  }, 120);
});