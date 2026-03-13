// ============================================================
// DATA
// ============================================================
const AREAS_BY_DIVISION = {
  dhaka: ["Mirpur","Uttara","Dhanmondi","Gulshan","Banani","Mohammadpur","Rampura","Badda","Motijheel","Old Dhaka"],
  chattogram: ["Agrabad","Nasirabad","Panchlaish","Halishahar","Khulshi","Bayazid","Chandgaon","Sitakund"],
  rajshahi: ["Shaheb Bazar","Rajpara","Boalia","Motihar","Puthia","Bagha"],
  khulna: ["Khulna Sadar","Sonadanga","Khalishpur","Daulatpur","Boyra","Rupsha"],
  sylhet: ["Sylhet Sadar","Ambarkhana","Zindabazar","Moulvibazar","Sunamganj","Habiganj"],
  barishal: ["Barishal Sadar","Natun Bazar","Kashipur","Wazirpur","Agailjhara"],
  mymensingh: ["Mymensingh Sadar","Muktagacha","Trishal","Bhaluka","Gaffargaon"],
  rangpur: ["Rangpur Sadar","Mithapukur","Badarganj","Kaunia","Pirganj"]
};

const SCHEDULE_DATA = [
  {division:"dhaka",area:"Mirpur",slots:[{time:"10:00 AM – 12:00 PM",status:"scheduled",duration:"2 hrs"},{time:"06:00 PM – 07:30 PM",status:"possible",duration:"1.5 hrs"}]},
  {division:"dhaka",area:"Uttara",slots:[{time:"08:00 AM – 10:00 AM",status:"scheduled",duration:"2 hrs"},{time:"03:00 PM – 05:00 PM",status:"scheduled",duration:"2 hrs"}]},
  {division:"dhaka",area:"Dhanmondi",slots:[{time:"11:00 AM – 12:30 PM",status:"scheduled",duration:"1.5 hrs"},{time:"08:00 PM – 09:00 PM",status:"possible",duration:"1 hr"}]},
  {division:"dhaka",area:"Gulshan",slots:[{time:"All Day",status:"clear",duration:"—"}]},
  {division:"dhaka",area:"Banani",slots:[{time:"All Day",status:"clear",duration:"—"}]},
  {division:"dhaka",area:"Mohammadpur",slots:[{time:"09:00 AM – 11:00 AM",status:"scheduled",duration:"2 hrs"},{time:"04:00 PM – 05:30 PM",status:"scheduled",duration:"1.5 hrs"},{time:"09:00 PM – 10:00 PM",status:"possible",duration:"1 hr"}]},
  {division:"dhaka",area:"Rampura",slots:[{time:"01:00 PM – 03:00 PM",status:"scheduled",duration:"2 hrs"}]},
  {division:"dhaka",area:"Badda",slots:[{time:"07:00 AM – 09:00 AM",status:"scheduled",duration:"2 hrs"},{time:"05:00 PM – 06:30 PM",status:"possible",duration:"1.5 hrs"}]},
  {division:"dhaka",area:"Motijheel",slots:[{time:"12:00 PM – 01:30 PM",status:"scheduled",duration:"1.5 hrs"}]},
  {division:"dhaka",area:"Old Dhaka",slots:[{time:"10:30 AM – 12:30 PM",status:"scheduled",duration:"2 hrs"},{time:"07:00 PM – 08:30 PM",status:"scheduled",duration:"1.5 hrs"}]},
  {division:"chattogram",area:"Agrabad",slots:[{time:"09:00 AM – 11:00 AM",status:"scheduled",duration:"2 hrs"}]},
  {division:"chattogram",area:"Nasirabad",slots:[{time:"01:00 PM – 03:00 PM",status:"scheduled",duration:"2 hrs"},{time:"07:00 PM – 08:00 PM",status:"possible",duration:"1 hr"}]},
  {division:"chattogram",area:"Panchlaish",slots:[{time:"All Day",status:"clear",duration:"—"}]},
  {division:"chattogram",area:"Halishahar",slots:[{time:"11:00 AM – 01:00 PM",status:"scheduled",duration:"2 hrs"},{time:"05:00 PM – 06:00 PM",status:"possible",duration:"1 hr"}]},
  {division:"chattogram",area:"Khulshi",slots:[{time:"All Day",status:"clear",duration:"—"}]},
  {division:"chattogram",area:"Bayazid",slots:[{time:"08:00 AM – 10:30 AM",status:"scheduled",duration:"2.5 hrs"}]},
  {division:"chattogram",area:"Chandgaon",slots:[{time:"02:00 PM – 04:00 PM",status:"scheduled",duration:"2 hrs"}]},
  {division:"chattogram",area:"Sitakund",slots:[{time:"10:00 AM – 12:00 PM",status:"scheduled",duration:"2 hrs"},{time:"04:00 PM – 06:00 PM",status:"scheduled",duration:"2 hrs"}]},
  {division:"rajshahi",area:"Shaheb Bazar",slots:[{time:"09:00 AM – 11:00 AM",status:"scheduled",duration:"2 hrs"}]},
  {division:"rajshahi",area:"Rajpara",slots:[{time:"01:00 PM – 03:00 PM",status:"possible",duration:"2 hrs"}]},
  {division:"rajshahi",area:"Boalia",slots:[{time:"10:00 AM – 12:00 PM",status:"scheduled",duration:"2 hrs"},{time:"06:00 PM – 07:00 PM",status:"possible",duration:"1 hr"}]},
  {division:"rajshahi",area:"Motihar",slots:[{time:"All Day",status:"clear",duration:"—"}]},
  {division:"rajshahi",area:"Puthia",slots:[{time:"08:00 AM – 10:00 AM",status:"scheduled",duration:"2 hrs"},{time:"03:00 PM – 05:00 PM",status:"scheduled",duration:"2 hrs"}]},
  {division:"rajshahi",area:"Bagha",slots:[{time:"11:00 AM – 01:00 PM",status:"scheduled",duration:"2 hrs"}]},
  {division:"khulna",area:"Khulna Sadar",slots:[{time:"09:30 AM – 12:00 PM",status:"scheduled",duration:"2.5 hrs"},{time:"06:00 PM – 08:00 PM",status:"scheduled",duration:"2 hrs"}]},
  {division:"khulna",area:"Sonadanga",slots:[{time:"01:00 PM – 03:00 PM",status:"scheduled",duration:"2 hrs"}]},
  {division:"khulna",area:"Khalishpur",slots:[{time:"All Day",status:"clear",duration:"—"}]},
  {division:"khulna",area:"Daulatpur",slots:[{time:"10:00 AM – 12:00 PM",status:"possible",duration:"2 hrs"}]},
  {division:"khulna",area:"Boyra",slots:[{time:"08:00 AM – 10:00 AM",status:"scheduled",duration:"2 hrs"},{time:"04:00 PM – 06:00 PM",status:"possible",duration:"2 hrs"}]},
  {division:"khulna",area:"Rupsha",slots:[{time:"11:00 AM – 01:00 PM",status:"scheduled",duration:"2 hrs"}]},
  {division:"sylhet",area:"Sylhet Sadar",slots:[{time:"10:00 AM – 12:00 PM",status:"scheduled",duration:"2 hrs"},{time:"08:00 PM – 09:00 PM",status:"possible",duration:"1 hr"}]},
  {division:"sylhet",area:"Ambarkhana",slots:[{time:"01:00 PM – 03:00 PM",status:"scheduled",duration:"2 hrs"}]},
  {division:"sylhet",area:"Zindabazar",slots:[{time:"All Day",status:"clear",duration:"—"}]},
  {division:"sylhet",area:"Moulvibazar",slots:[{time:"09:00 AM – 11:30 AM",status:"scheduled",duration:"2.5 hrs"},{time:"05:00 PM – 07:00 PM",status:"scheduled",duration:"2 hrs"}]},
  {division:"sylhet",area:"Sunamganj",slots:[{time:"10:00 AM – 01:00 PM",status:"scheduled",duration:"3 hrs"}]},
  {division:"sylhet",area:"Habiganj",slots:[{time:"08:00 AM – 10:00 AM",status:"scheduled",duration:"2 hrs"},{time:"04:00 PM – 05:30 PM",status:"possible",duration:"1.5 hrs"}]},
  {division:"barishal",area:"Barishal Sadar",slots:[{time:"09:00 AM – 11:00 AM",status:"scheduled",duration:"2 hrs"},{time:"05:00 PM – 07:00 PM",status:"scheduled",duration:"2 hrs"}]},
  {division:"barishal",area:"Natun Bazar",slots:[{time:"01:00 PM – 03:30 PM",status:"scheduled",duration:"2.5 hrs"}]},
  {division:"barishal",area:"Kashipur",slots:[{time:"All Day",status:"clear",duration:"—"}]},
  {division:"barishal",area:"Wazirpur",slots:[{time:"10:00 AM – 12:00 PM",status:"possible",duration:"2 hrs"}]},
  {division:"barishal",area:"Agailjhara",slots:[{time:"08:00 AM – 10:00 AM",status:"scheduled",duration:"2 hrs"},{time:"06:00 PM – 08:00 PM",status:"scheduled",duration:"2 hrs"}]},
  {division:"mymensingh",area:"Mymensingh Sadar",slots:[{time:"10:00 AM – 12:00 PM",status:"scheduled",duration:"2 hrs"}]},
  {division:"mymensingh",area:"Muktagacha",slots:[{time:"01:00 PM – 03:00 PM",status:"scheduled",duration:"2 hrs"},{time:"07:00 PM – 08:30 PM",status:"possible",duration:"1.5 hrs"}]},
  {division:"mymensingh",area:"Trishal",slots:[{time:"All Day",status:"clear",duration:"—"}]},
  {division:"mymensingh",area:"Bhaluka",slots:[{time:"09:00 AM – 11:00 AM",status:"scheduled",duration:"2 hrs"}]},
  {division:"mymensingh",area:"Gaffargaon",slots:[{time:"11:00 AM – 01:00 PM",status:"scheduled",duration:"2 hrs"},{time:"05:00 PM – 06:30 PM",status:"possible",duration:"1.5 hrs"}]},
  {division:"rangpur",area:"Rangpur Sadar",slots:[{time:"08:30 AM – 10:30 AM",status:"scheduled",duration:"2 hrs"},{time:"03:00 PM – 05:00 PM",status:"possible",duration:"2 hrs"}]},
  {division:"rangpur",area:"Mithapukur",slots:[{time:"10:00 AM – 12:00 PM",status:"scheduled",duration:"2 hrs"}]},
  {division:"rangpur",area:"Badarganj",slots:[{time:"All Day",status:"clear",duration:"—"}]},
  {division:"rangpur",area:"Kaunia",slots:[{time:"01:00 PM – 03:00 PM",status:"scheduled",duration:"2 hrs"},{time:"07:00 PM – 09:00 PM",status:"scheduled",duration:"2 hrs"}]},
  {division:"rangpur",area:"Pirganj",slots:[{time:"09:00 AM – 11:30 AM",status:"scheduled",duration:"2.5 hrs"}]}
];

const EMERGENCY_DATA = [
  {type:"critical",icon:"🚨",title_en:"Mirpur Zone Emergency Outage",title_bn:"মিরপুর জোন জরুরি বিচ্ছিন্নতা",body_en:"Due to urgent transformer maintenance, Mirpur areas (Section 1–12) will face a 3-hour power outage tomorrow from 9:00 AM – 12:00 PM. DESCO crews will be on-site.",body_bn:"ট্রান্সফর্মার মেরামতের কারণে আগামীকাল সকাল ৯টা–দুপুর ১২টা পর্যন্ত মিরপুর (সেকশন ১–১২) তে ৩ ঘণ্টা বিদ্যুৎ বিচ্ছিন্ন থাকবে।",areas:["Mirpur-1","Mirpur-2","Mirpur-10","Mirpur-12"],date:"Tomorrow, 9:00 AM – 12:00 PM"},
  {type:"critical",icon:"⛈️",title_en:"Storm Warning – Sylhet Division",title_bn:"ঝড় সতর্কতা – সিলেট বিভাগ",body_en:"Severe storm conditions are expected tonight in Sylhet. Power disruptions likely across multiple feeders. Emergency teams are on standby. Please charge all devices before 6 PM.",body_bn:"আজ রাতে সিলেটে তীব্র ঝড়ের পূর্বাভাস রয়েছে। বিদ্যুৎ বিচ্ছিন্নতার সম্ভাবনা আছে। সন্ধ্যা ৬টার আগে সব ডিভাইস চার্জ করুন।",areas:["Sylhet Sadar","Ambarkhana","Moulvibazar"],date:"Tonight after 8:00 PM"},
  {type:"warning",icon:"🔧",title_en:"Maintenance Work – Dhanmondi Feeder",title_bn:"রক্ষণাবেক্ষণ কাজ – ধানমন্ডি ফিডার",body_en:"Scheduled feeder maintenance in Dhanmondi area. Power will be off from 2:00 PM to 5:00 PM today. This is routine maintenance to improve reliability.",body_bn:"ধানমন্ডি ফিডার মেরামতের কারণে আজ দুপুর ২টা–বিকাল ৫টা পর্যন্ত বিদ্যুৎ বন্ধ থাকবে।",areas:["Dhanmondi R/A","Jigatola","Shankar"],date:"Today, 2:00 PM – 5:00 PM"},
  {type:"warning",icon:"⚡",title_en:"High Demand Alert – Peak Hours",title_bn:"উচ্চ চাহিদা সতর্কতা – পিক আওয়ার",body_en:"Electricity demand is critically high today across Dhaka division. Load shedding duration may be extended by 30–60 minutes in some areas. Please reduce non-essential usage.",body_bn:"আজ ঢাকা বিভাগে বিদ্যুতের চাহিদা অত্যন্ত বেশি। কিছু এলাকায় লোডশেডিং ৩০–৬০ মিনিট বাড়তে পারে।",areas:["All Dhaka Areas"],date:"Today, 6:00 PM – 10:00 PM"},
  {type:"info",icon:"✅",title_en:"Restoration Complete – Khulna",title_bn:"সংযোগ পুনরুদ্ধার সম্পন্ন – খুলনা",body_en:"Power has been fully restored in Khulna Sadar and Sonadanga areas after yesterday's emergency maintenance. Normal schedule resumes from today.",body_bn:"গতকালের জরুরি মেরামতের পর খুলনা সদর ও সোনাডাঙ্গা এলাকায় বিদ্যুৎ পুনরুদ্ধার সম্পন্ন হয়েছে।",areas:["Khulna Sadar","Sonadanga"],date:"Today – Fully Restored"},
  {type:"info",icon:"📋",title_en:"New Winter Schedule Effective",title_bn:"নতুন শীতকালীন সময়সূচি কার্যকর",body_en:"DESCO and DPDC have updated load shedding schedules for the winter season. Duration per slot reduced to 1–2 hours. Updated schedules are now reflected on this platform.",body_bn:"DESCO ও DPDC শীতকালীন লোডশেডিং সময়সূচি আপডেট করেছে। প্রতি স্লটের সময় ১–২ ঘণ্টায় কমানো হয়েছে।",areas:["All Divisions"],date:"Effective from this week"}
];

const TIPS_DATA = [
  {icon:"🔋",title_en:"Charge Before Peak Hours",title_bn:"পিক আওয়ারের আগে চার্জ করুন",body_en:"Charge your phone, laptop, and power banks before 6 PM. Evening peak hours (6–10 PM) are when outages are most likely.",body_bn:"বিকাল ৬টার আগে ফোন, ল্যাপটপ এবং পাওয়ার ব্যাংক চার্জ করুন।",tag_en:"Essential",tag_bn:"অপরিহার্য"},
  {icon:"💡",title_en:"Switch to LED Lighting",title_bn:"LED বাল্ব ব্যবহার করুন",body_en:"LED lights use up to 80% less electricity than incandescent bulbs and produce less heat, reducing your AC load too.",body_bn:"LED বাল্ব সাধারণ বাল্বের চেয়ে ৮০% কম বিদ্যুৎ ব্যবহার করে।",tag_en:"Save Money",tag_bn:"অর্থ সাশ্রয়"},
  {icon:"❄️",title_en:"Smart Refrigerator Use",title_bn:"স্মার্ট ফ্রিজ ব্যবহার",body_en:"Keep refrigerator doors closed during outages. A full freezer stays cold for 48 hours; a half-full one for 24 hours.",body_bn:"লোডশেডিংয়ের সময় ফ্রিজ খুলবেন না। পূর্ণ ফ্রিজার ৪৮ ঘণ্টা ঠাণ্ডা থাকে।",tag_en:"Practical",tag_bn:"ব্যবহারিক"},
  {icon:"🔌",title_en:"Unplug Standby Devices",title_bn:"স্ট্যান্ডবাই ডিভাইস আনপ্লাগ করুন",body_en:"TVs, chargers, and routers on standby consume 10–15% of your total electricity. Unplug when not in use.",body_bn:"স্ট্যান্ডবাই ডিভাইস মোট বিদ্যুতের ১০–১৫% ব্যবহার করে। অব্যবহারকালে প্লাগ খুলুন।",tag_en:"Easy Win",tag_bn:"সহজ সঞ্চয়"},
  {icon:"🌬️",title_en:"Use Fans Over AC",title_bn:"AC-এর বদলে ফ্যান ব্যবহার করুন",body_en:"A ceiling fan uses about 75W, while an AC uses 1500W+. Use fans during mild weather to dramatically cut consumption.",body_bn:"সিলিং ফ্যান মাত্র ৭৫ ওয়াট ব্যবহার করে, AC ১৫০০ ওয়াট+।",tag_en:"Big Impact",tag_bn:"বড় প্রভাব"},
  {icon:"🕯️",title_en:"Keep Emergency Supplies Ready",title_bn:"জরুরি সরবরাহ প্রস্তুত রাখুন",body_en:"Keep rechargeable LED lanterns, candles, and a power bank ready. Consider a portable UPS for your router and important devices.",body_bn:"রিচার্জেবল লণ্ঠন, মোমবাতি এবং পাওয়ার ব্যাংক সবসময় প্রস্তুত রাখুন।",tag_en:"Be Prepared",tag_bn:"প্রস্তুত থাকুন"},
  {icon:"📅",title_en:"Plan Heavy Tasks Early",title_bn:"ভারী কাজ সকালে করুন",body_en:"Washing machines, irons, and ovens — use these appliances in the morning (7–11 AM) when power is usually stable.",body_bn:"ওয়াশিং মেশিন, ইস্ত্রি, ওভেন — সকাল ৭–১১টার মধ্যে ব্যবহার করুন।",tag_en:"Smart Planning",tag_bn:"স্মার্ট পরিকল্পনা"},
  {icon:"☀️",title_en:"Consider Solar Solutions",title_bn:"সোলার সমাধান বিবেচনা করুন",body_en:"Even a small solar panel + battery system can power lights, fans, and phone chargers during outages. Government subsidies available.",body_bn:"একটি ছোট সোলার প্যানেল + ব্যাটারি লাইট, ফ্যান ও ফোন চার্জ করতে পারে।",tag_en:"Long-term",tag_bn:"দীর্ঘমেয়াদী"}
];

// ============================================================
// STATE
// ============================================================
let currentResults = null;
let savedAreas = JSON.parse(localStorage.getItem('bidyutbarta_saved') || '[]');
let countdownIntervals = [];

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Hide loader
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    setTimeout(() => document.getElementById('loader').style.display = 'none', 600);
  }, 1400);

  // Set today's date
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('dateSelect').value = today;

  // Render sections
  renderEmergency();
  renderTips();
  renderSavedAreas();

  // Theme
  if (localStorage.getItem('bidyutbarta_dark') === 'true') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('darkBtn').textContent = '☀️';
    document.getElementById('darkBtnMobile').textContent = '☀️';
  }
  // Language
  if (localStorage.getItem('bidyutbarta_lang') === 'bn') {
    document.documentElement.setAttribute('data-lang', 'bn');
    document.getElementById('langBtnText').textContent = 'English';
    document.getElementById('langBtnTextMobile').textContent = 'English';
  }

  // Scroll reveal
  initScrollReveal();

  // Nav scroll
  window.addEventListener('scroll', () => {
    updateActiveNav();
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
  });

  // Feature list stagger reveal
  initFeatureListReveal();

  // Popup after 3s
  setTimeout(() => {
    showPopup('⚡', 'Power Outage Alert!', 'Multiple areas in Dhaka & Sylhet have extended schedules today due to high demand. Check your area now!');
  }, 3000);
});

// ============================================================
// SCROLL REVEAL
// ============================================================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    observer.observe(el);
  });
}

function initFeatureListReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const items = entry.target.querySelectorAll('li');
        items.forEach((li, i) => {
          setTimeout(() => li.classList.add('revealed'), i * 100);
        });
      }
    });
  }, { threshold: 0.1 });

  const fl = document.getElementById('featureList');
  if (fl) observer.observe(fl);
}

// ============================================================
// NAVIGATION
// ============================================================
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburger');
  menu.classList.toggle('open');
  hamburger.classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

function updateActiveNav() {
  const sections = ['home','schedule','emergency','tips','about'];
  const scrollY = window.scrollY + 100;
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.offsetTop, bottom = top + el.offsetHeight;
    document.querySelectorAll('.nav-links a').forEach(a => {
      if (a.getAttribute('href') === '#' + id) {
        a.classList.toggle('active', scrollY >= top && scrollY < bottom);
      }
    });
  });
}

// ============================================================
// DARK MODE & LANGUAGE
// ============================================================
function toggleDark() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  const icon = isDark ? '🌙' : '☀️';
  document.getElementById('darkBtn').textContent = icon;
  document.getElementById('darkBtnMobile').textContent = icon;
  localStorage.setItem('bidyutbarta_dark', !isDark);
  showToast(isDark ? '☀️ Light mode activated' : '🌙 Dark mode activated', 'info');
}

function toggleLang() {
  const isBn = document.documentElement.getAttribute('data-lang') === 'bn';
  document.documentElement.setAttribute('data-lang', isBn ? 'en' : 'bn');
  const btnText = isBn ? 'বাংলা' : 'English';
  document.getElementById('langBtnText').textContent = btnText;
  document.getElementById('langBtnTextMobile').textContent = btnText;
  localStorage.setItem('bidyutbarta_lang', isBn ? 'en' : 'bn');
  showToast(isBn ? '🌐 English activated' : '🌐 বাংলা সক্রিয় হয়েছে', 'info');
}

function getLang() { return document.documentElement.getAttribute('data-lang') || 'en'; }

// ============================================================
// AREA DROPDOWN
// ============================================================
function updateAreas() {
  const division = document.getElementById('divisionSelect').value;
  const areaSelect = document.getElementById('areaSelect');
  areaSelect.innerHTML = '<option value="">-- Select Area --</option>';
  if (division && AREAS_BY_DIVISION[division]) {
    AREAS_BY_DIVISION[division].forEach(area => {
      const opt = document.createElement('option');
      opt.value = area; opt.textContent = area;
      areaSelect.appendChild(opt);
    });
  }
}

// ============================================================
// SCHEDULE CHECK
// ============================================================
function checkSchedule() {
  const division = document.getElementById('divisionSelect').value;
  const area = document.getElementById('areaSelect').value;
  const date = document.getElementById('dateSelect').value;

  if (!division) { showToast('⚠️ Please select a division first', 'error'); return; }
  if (!area) { showToast('⚠️ Please select an area', 'error'); return; }

  countdownIntervals.forEach(clearInterval);
  countdownIntervals = [];

  const result = SCHEDULE_DATA.find(d => d.division === division && d.area === area);
  const panel = document.getElementById('resultsPanel');
  const empty = document.getElementById('resultEmpty');

  if (!result) {
    empty.style.display = 'flex'; panel.innerHTML = ''; panel.appendChild(empty);
    showToast('No data found for this area.', 'error');
    return;
  }

  empty.style.display = 'none';
  const selectedDate = date ? new Date(date).toLocaleDateString('en-GB', {weekday:'long',year:'numeric',month:'long',day:'numeric'}) : 'Today';
  const divName = document.getElementById('divisionSelect').options[document.getElementById('divisionSelect').selectedIndex].text;
  const isSaved = savedAreas.some(s => s.division === division && s.area === area);

  let html = `
    <div class="result-header">
      <div>
        <div class="result-area-name">📍 ${area}</div>
        <div class="result-meta">${divName} Division &nbsp;·&nbsp; ${selectedDate}</div>
      </div>
      <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
        <button class="btn-fav ${isSaved?'saved':''}" id="favBtn" onclick="toggleFavorite('${division}','${area}')">
          ${isSaved ? '⭐ Saved' : '☆ Save Area'}
        </button>
      </div>
    </div>`;

  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  html += `<div class="weekly-toggle">`;
  days.forEach((d,i) => { html += `<button class="week-btn ${i===0?'active':''}" onclick="selectDay(this)">${d}</button>`; });
  html += `</div>`;

  result.slots.forEach((slot, i) => {
    const badgeClass = slot.status==='scheduled'?'badge-red':slot.status==='possible'?'badge-yellow':'badge-green';
    const badgeText_en = slot.status==='scheduled'?'🔴 Scheduled':slot.status==='possible'?'🟡 Possible Outage':'🟢 No Outage';
    const badgeText_bn = slot.status==='scheduled'?'🔴 নির্ধারিত':slot.status==='possible'?'🟡 সম্ভাব্য বিচ্ছিন্নতা':'🟢 কোনো বিচ্ছিন্নতা নেই';
    const icon = slot.status==='scheduled'?'⚡':slot.status==='possible'?'⚠️':'✅';
    const iconBg = slot.status==='clear'?'background:var(--green-bg)':'background:rgba(245,168,0,0.1)';
    const countdownId = `cd_${i}`;
    html += `
      <div class="result-card" style="animation-delay:${i*0.12}s">
        <div class="rc-left">
          <div class="rc-icon" style="${iconBg}">${icon}</div>
          <div>
            <div class="rc-time">${slot.time}</div>
            <div class="rc-duration">
              <span class="lang-en">Duration: ${slot.duration}</span>
              <span class="lang-bn">সময়কাল: ${slot.duration}</span>
            </div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;">
          <span class="badge ${badgeClass}">
            <span class="lang-en">${badgeText_en}</span>
            <span class="lang-bn">${badgeText_bn}</span>
          </span>
          ${slot.status!=='clear'?`
          <div class="countdown-box">
            <div class="countdown-label lang-en">Starts in</div>
            <div class="countdown-label lang-bn">শুরু হবে</div>
            <div class="countdown-timer ${slot.status==='possible'?'green':''}" id="${countdownId}">--:--:--</div>
          </div>`:''}
        </div>
      </div>`;
  });

  panel.innerHTML = html;
  result.slots.forEach((slot, i) => {
    if (slot.status !== 'clear') startCountdown(`cd_${i}`, slot.time);
  });

  showToast(`✅ Schedule loaded for ${area}`, 'success');
  currentResults = { division, area };
  updateFavButton();
}

// ============================================================
// COUNTDOWN TIMER
// ============================================================
function startCountdown(elementId, timeRange) {
  const match = timeRange.match(/^(\d+:\d+\s+[AP]M)/);
  if (!match) return;
  function tick() {
    const el = document.getElementById(elementId);
    if (!el) return;
    const now = new Date();
    const target = parseTimeToday(match[1]);
    if (!target) return;
    const diff = target - now;
    if (diff <= 0) { el.textContent = 'NOW'; el.style.color = 'var(--red)'; return; }
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    el.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }
  tick();
  const iv = setInterval(tick, 1000);
  countdownIntervals.push(iv);
}

function parseTimeToday(timeStr) {
  const [time, period] = timeStr.trim().split(/\s+/);
  const [h, m] = time.split(':').map(Number);
  const date = new Date();
  let hours = h;
  if (period==='PM' && h!==12) hours += 12;
  if (period==='AM' && h===12) hours = 0;
  date.setHours(hours, m, 0, 0);
  return date;
}

// ============================================================
// WEEKLY DAY TOGGLE
// ============================================================
function selectDay(btn) {
  document.querySelectorAll('.week-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// ============================================================
// FAVORITES
// ============================================================
function toggleFavorite(division, area) {
  const idx = savedAreas.findIndex(s => s.division===division && s.area===area);
  if (idx > -1) {
    savedAreas.splice(idx, 1);
    showToast(`Removed ${area} from saved areas`, 'info');
  } else {
    savedAreas.push({division, area});
    showToast(`⭐ ${area} saved!`, 'success');
  }
  localStorage.setItem('bidyutbarta_saved', JSON.stringify(savedAreas));
  updateFavButton();
  renderSavedAreas();
}

function updateFavButton() {
  if (!currentResults) return;
  const btn = document.getElementById('favBtn');
  if (!btn) return;
  const isSaved = savedAreas.some(s => s.division===currentResults.division && s.area===currentResults.area);
  btn.className = `btn-fav ${isSaved?'saved':''}`;
  btn.textContent = isSaved ? '⭐ Saved' : '☆ Save Area';
  btn.onclick = () => toggleFavorite(currentResults.division, currentResults.area);
}

function renderSavedAreas() {
  const section = document.getElementById('savedSection');
  const container = document.getElementById('savedAreas');
  if (savedAreas.length === 0) { section.style.display = 'none'; return; }
  section.style.display = 'block';
  container.innerHTML = savedAreas.map(s => `
    <span class="saved-pill" onclick="loadSaved('${s.division}','${s.area}')">
      📍 ${s.area}
      <span class="remove" onclick="event.stopPropagation();toggleFavorite('${s.division}','${s.area}')">×</span>
    </span>
  `).join('');
}

function loadSaved(division, area) {
  document.getElementById('divisionSelect').value = division;
  updateAreas();
  setTimeout(() => {
    document.getElementById('areaSelect').value = area;
    checkSchedule();
    document.getElementById('schedule').scrollIntoView({behavior:'smooth'});
  }, 50);
}

// ============================================================
// RENDER EMERGENCY
// ============================================================
function renderEmergency() {
  const grid = document.getElementById('emergencyGrid');
  grid.innerHTML = EMERGENCY_DATA.map((e, i) => `
    <div class="alert-card ${e.type} reveal" style="transition-delay:${i*0.1}s">
      <span class="alert-icon">${e.icon}</span>
      <div class="alert-title">
        <span class="lang-en">${e.title_en}</span>
        <span class="lang-bn">${e.title_bn}</span>
      </div>
      <div class="alert-body">
        <span class="lang-en">${e.body_en}</span>
        <span class="lang-bn">${e.body_bn}</span>
      </div>
      <div class="alert-areas">
        ${e.areas.map(a=>`<span class="area-chip" style="color:${e.type==='critical'?'var(--red)':e.type==='warning'?'var(--yellow)':'var(--green)'}">${a}</span>`).join('')}
      </div>
      <div class="alert-meta">🕐 ${e.date}</div>
    </div>
  `).join('');
  // re-observe new elements
  document.querySelectorAll('.alert-card.reveal').forEach(el => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('revealed'); });
    }, {threshold:0.1});
    obs.observe(el);
  });
}

// ============================================================
// RENDER TIPS
// ============================================================
function renderTips() {
  const grid = document.getElementById('tipsGrid');
  grid.innerHTML = TIPS_DATA.map((t, i) => `
    <div class="tip-card reveal" style="transition-delay:${i*0.08}s">
      <div class="tip-icon">${t.icon}</div>
      <div class="tip-title">
        <span class="lang-en">${t.title_en}</span>
        <span class="lang-bn">${t.title_bn}</span>
      </div>
      <div class="tip-body">
        <span class="lang-en">${t.body_en}</span>
        <span class="lang-bn">${t.body_bn}</span>
      </div>
      <span class="tip-tag">
        <span class="lang-en">${t.tag_en}</span>
        <span class="lang-bn">${t.tag_bn}</span>
      </span>
    </div>
  `).join('');
  document.querySelectorAll('.tip-card.reveal').forEach(el => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('revealed'); });
    }, {threshold:0.08});
    obs.observe(el);
  });
}

// ============================================================
// POPUP & TOAST
// ============================================================
function showPopup(icon, title, body) {
  document.getElementById('popupIcon').textContent = icon;
  document.getElementById('popupTitle').textContent = title;
  document.getElementById('popupBody').textContent = body;
  document.getElementById('popupOverlay').classList.add('show');
}
function closePopup() {
  document.getElementById('popupOverlay').classList.remove('show');
}
document.getElementById('popupOverlay').addEventListener('click', function(e) {
  if (e.target === this) closePopup();
});

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 50);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// ============================================================
// POLICY MODAL DATA & FUNCTIONS
// ============================================================
const POLICY_CONTENT = {
  privacy: {
    icon: '🔒',
    title: 'Privacy Policy',
    subtitle: 'BidyutBarta · Effective January 2025',
    updated: 'Last updated: January 2025',
    body: `
      <div class="policy-section">
        <div class="policy-highlight">
          <strong>⚡ Summary:</strong> BidyutBarta is a fully frontend, static prototype. We do not collect, store, or transmit any personal data to any server. Your privacy is 100% protected by design.
        </div>
      </div>

      <div class="policy-section">
        <div class="policy-section-title">1. Information We Collect</div>
        <p>BidyutBarta operates entirely in your browser. We do <strong>not</strong> collect any personally identifiable information. The only data stored is:</p>
        <ul>
          <li><strong>localStorage data</strong> — Your saved areas and display preferences (dark mode, language) are stored locally on your device only. This data never leaves your browser.</li>
          <li><strong>No cookies</strong> — We do not use tracking cookies, analytics cookies, or any third-party cookies.</li>
          <li><strong>No forms</strong> — We do not collect names, emails, phone numbers, or any personal details.</li>
        </ul>
      </div>

      <div class="policy-section">
        <div class="policy-section-title">2. How We Use Information</div>
        <p>Since we collect no personal data, there is nothing to "use." Your saved area preferences and settings exist solely to improve your experience and are accessible only to you on your device.</p>
      </div>

      <div class="policy-section">
        <div class="policy-section-title">3. Third-Party Services</div>
        <ul>
          <li><strong>Google Fonts</strong> — Font files are loaded from Google's CDN. Google's own privacy policy applies to this request.</li>
          <li><strong>No analytics tools</strong> — We do not use Google Analytics, Facebook Pixel, or any tracking tools.</li>
          <li><strong>No advertisements</strong> — BidyutBarta contains no ads and no ad trackers.</li>
        </ul>
      </div>

      <div class="policy-section">
        <div class="policy-section-title">4. Data Security</div>
        <p>As all data remains on your local device and no server communication occurs, there is no risk of a data breach from our side. You can clear your saved data at any time by clearing your browser's localStorage.</p>
      </div>

      <div class="policy-section">
        <div class="policy-section-title">5. Children's Privacy</div>
        <p>BidyutBarta does not knowingly collect any information from children under 13. The service is informational and safe for all ages.</p>
      </div>

      <div class="policy-section">
        <div class="policy-section-title">6. Changes to This Policy</div>
        <p>We may update this Privacy Policy from time to time. Any changes will be reflected with an updated date. Continued use of BidyutBarta constitutes acceptance of the revised policy.</p>
      </div>

      <div class="policy-section">
        <div class="policy-section-title">7. Contact</div>
        <p>For any privacy-related questions, please contact the developer via LinkedIn or GitHub links provided in the footer.</p>
      </div>
    `
  },
  terms: {
    icon: '📋',
    title: 'Terms & Conditions',
    subtitle: 'BidyutBarta · Please read carefully',
    updated: 'Last updated: January 2025',
    body: `
      <div class="policy-section">
        <div class="policy-highlight">
          <strong>📋 Important:</strong> By using BidyutBarta, you agree to these terms. This platform provides <strong>estimated and static</strong> load shedding schedules for informational purposes only.
        </div>
      </div>

      <div class="policy-section">
        <div class="policy-section-title">1. Acceptance of Terms</div>
        <p>By accessing or using BidyutBarta ("the Platform"), you agree to be bound by these Terms & Conditions. If you do not agree, please discontinue use of the platform immediately.</p>
      </div>

      <div class="policy-section">
        <div class="policy-section-title">2. Nature of the Platform</div>
        <ul>
          <li>BidyutBarta is a <strong>frontend prototype</strong> created for educational and demonstration purposes.</li>
          <li>All schedule data is <strong>static and simulated</strong> — it does not reflect real-time data from DESCO, DPDC, BPDB or any official authority.</li>
          <li>The platform is not affiliated with or endorsed by any Bangladeshi government body or electricity provider.</li>
        </ul>
      </div>

      <div class="policy-section">
        <div class="policy-section-title">3. Use of the Platform</div>
        <p>You agree to use BidyutBarta only for lawful purposes. You must not:</p>
        <ul>
          <li>Misrepresent the data shown as official or real-time information</li>
          <li>Use the platform to deceive or mislead others</li>
          <li>Attempt to reverse-engineer, copy, or redistribute the codebase without credit to the developer</li>
          <li>Use the platform for any commercial purpose without written permission</li>
        </ul>
      </div>

      <div class="policy-section">
        <div class="policy-section-title">4. Intellectual Property</div>
        <p>All design, code, and content of BidyutBarta is the intellectual property of <strong>Nafisa Tabassum Nusrat</strong>. Unauthorized reproduction or distribution is prohibited.</p>
      </div>

      <div class="policy-section">
        <div class="policy-section-title">5. Limitation of Liability</div>
        <p>BidyutBarta and its developer shall not be held liable for any damages arising from reliance on the schedule data, including but not limited to missed appointments, business losses, or any inconvenience caused by acting on the information displayed.</p>
      </div>

      <div class="policy-section">
        <div class="policy-section-title">6. Modifications</div>
        <p>The developer reserves the right to modify these Terms at any time. Continued use following any changes constitutes your agreement to the new Terms.</p>
      </div>

      <div class="policy-section">
        <div class="policy-section-title">7. Governing Law</div>
        <p>These Terms shall be governed by and construed in accordance with the laws of the People's Republic of Bangladesh.</p>
      </div>
    `
  },
  disclaimer: {
    icon: '⚠️',
    title: 'Disclaimer',
    subtitle: 'BidyutBarta · Important Notice',
    updated: 'Last updated: January 2025',
    body: `
      <div class="policy-section">
        <div class="policy-highlight">
          <strong>⚠️ Please Note:</strong> BidyutBarta displays <strong>simulated, static data</strong> for demonstration purposes. This is NOT an official government platform.
        </div>
      </div>

      <div class="policy-section">
        <div class="policy-section-title">1. Data Accuracy</div>
        <p>The load shedding schedules, emergency notices, and area-wise information displayed on BidyutBarta are <strong>entirely fictional and static</strong>. They have been created solely to demonstrate the functionality of the prototype.</p>
        <ul>
          <li>Data does not come from DESCO, DPDC, BPDB, or any official source</li>
          <li>Schedules do not update in real-time</li>
          <li>Emergency notices are sample/demo content only</li>
          <li>Countdown timers are based on static time values, not live feeds</li>
        </ul>
      </div>

      <div class="policy-section">
        <div class="policy-section-title">2. No Official Affiliation</div>
        <p>BidyutBarta is an independent student/developer project. It is not affiliated with, endorsed by, or connected to:</p>
        <ul>
          <li>Bangladesh Power Development Board (BPDB)</li>
          <li>Dhaka Electric Supply Company (DESCO)</li>
          <li>Dhaka Power Distribution Company (DPDC)</li>
          <li>Any other government ministry or electricity authority</li>
        </ul>
      </div>

      <div class="policy-section">
        <div class="policy-section-title">3. No Warranties</div>
        <p>This platform is provided "as is" without any warranties, express or implied. The developer makes no representations about the accuracy, reliability, completeness, or timeliness of any content on the platform.</p>
      </div>

      <div class="policy-section">
        <div class="policy-section-title">4. For Official Information</div>
        <p>For actual and official load shedding schedules in Bangladesh, please refer to:</p>
        <ul>
          <li><strong>DESCO:</strong> desco.org.bd</li>
          <li><strong>DPDC:</strong> dpdc.org.bd</li>
          <li><strong>BPDB:</strong> bpdb.gov.bd</li>
          <li>Your local electricity distribution office</li>
        </ul>
      </div>

      <div class="policy-section">
        <div class="policy-section-title">5. Developer Intent</div>
        <p>BidyutBarta was built as a <strong>frontend development showcase</strong> to demonstrate skills in HTML, CSS, JavaScript, bilingual UI design, and interactive web applications. It represents what a real solution could look like if built with a live backend and official API integration.</p>
      </div>
    `
  }
};

// Bangla content patch for policy modals
const POLICY_BN = {
  privacy: {
    title_bn: '🔒 গোপনীয়তা নীতি',
    subtitle_bn: 'BidyutBarta · কার্যকর জানুয়ারি ২০২৫',
    updated_bn: 'সর্বশেষ আপডেট: জানুয়ারি ২০২৫',
    body_bn: `
      <div class="policy-section">
        <div class="policy-highlight"><strong>⚡ সারসংক্ষেপ:</strong> BidyutBarta সম্পূর্ণ ফ্রন্টএন্ড প্রোটোটাইপ। আমরা কোনো ব্যক্তিগত তথ্য সংগ্রহ করি না।</div>
      </div>
      <div class="policy-section">
        <div class="policy-section-title">১. তথ্য সংগ্রহ</div>
        <p>BidyutBarta সম্পূর্ণ আপনার ব্রাউজারে চলে। শুধুমাত্র localStorage-এ পছন্দের এলাকা ও থিম সেটিং সংরক্ষিত হয় — যা কখনো আপনার ডিভাইস ছেড়ে যায় না।</p>
        <ul><li>কোনো কুকি ব্যবহার করা হয় না</li><li>কোনো ব্যক্তিগত ফর্ম নেই</li><li>ডেটা শুধু আপনার ডিভাইসে</li></ul>
      </div>
      <div class="policy-section">
        <div class="policy-section-title">২. তৃতীয় পক্ষ</div>
        <ul><li>Google Fonts — ফন্ট লোডের জন্য ব্যবহৃত</li><li>কোনো অ্যানালিটিক্স বা বিজ্ঞাপন ট্র্যাকার নেই</li></ul>
      </div>
      <div class="policy-section">
        <div class="policy-section-title">৩. যোগাযোগ</div>
        <p>গোপনীয়তা সংক্রান্ত প্রশ্নের জন্য ডেভেলপারের LinkedIn বা GitHub-এ যোগাযোগ করুন।</p>
      </div>`
  },
  terms: {
    title_bn: '📋 শর্তাবলী',
    subtitle_bn: 'BidyutBarta · অনুগ্রহ করে মনোযোগ দিয়ে পড়ুন',
    updated_bn: 'সর্বশেষ আপডেট: জানুয়ারি ২০২৫',
    body_bn: `
      <div class="policy-section">
        <div class="policy-highlight"><strong>📋 গুরুত্বপূর্ণ:</strong> BidyutBarta ব্যবহার করলে আপনি এই শর্তগুলোতে সম্মত হচ্ছেন। এটি শুধুমাত্র তথ্যমূলক উদ্দেশ্যে স্ট্যাটিক ডেটা প্রদর্শন করে।</div>
      </div>
      <div class="policy-section">
        <div class="policy-section-title">১. শর্ত গ্রহণ</div>
        <p>BidyutBarta ব্যবহার করে আপনি এই শর্তাবলীতে আবদ্ধ হচ্ছেন। সম্মত না হলে ব্যবহার বন্ধ করুন।</p>
      </div>
      <div class="policy-section">
        <div class="policy-section-title">২. প্ল্যাটফর্মের প্রকৃতি</div>
        <ul><li>BidyutBarta একটি <strong>ফ্রন্টএন্ড প্রোটোটাইপ</strong> — শুধুমাত্র শিক্ষামূলক উদ্দেশ্যে</li><li>সকল ডেটা স্ট্যাটিক ও সিমুলেটেড</li><li>কোনো সরকারি সংস্থার সাথে সংযুক্ত নয়</li></ul>
      </div>
      <div class="policy-section">
        <div class="policy-section-title">৩. মেধাস্বত্ব</div>
        <p>BidyutBarta-র সকল ডিজাইন, কোড ও কন্টেন্ট <strong>Nafisa Tabassum Nusrat</strong>-এর মেধাস্বত্ব। অনুমতি ছাড়া পুনঃবিতরণ নিষিদ্ধ।</p>
      </div>
      <div class="policy-section">
        <div class="policy-section-title">৪. দায়বদ্ধতার সীমা</div>
        <p>প্রদর্শিত তথ্যের উপর নির্ভরতা থেকে সৃষ্ট কোনো ক্ষতির জন্য ডেভেলপার দায়ী নন।</p>
      </div>`
  },
  disclaimer: {
    title_bn: '⚠️ দায়মুক্তি বিবৃতি',
    subtitle_bn: 'BidyutBarta · গুরুত্বপূর্ণ বিজ্ঞপ্তি',
    updated_bn: 'সর্বশেষ আপডেট: জানুয়ারি ২০২৫',
    body_bn: `
      <div class="policy-section">
        <div class="policy-highlight"><strong>⚠️ লক্ষ্য করুন:</strong> BidyutBarta <strong>সিমুলেটেড, স্ট্যাটিক ডেটা</strong> প্রদর্শন করে। এটি কোনো সরকারি প্ল্যাটফর্ম নয়।</div>
      </div>
      <div class="policy-section">
        <div class="policy-section-title">১. ডেটার নির্ভুলতা</div>
        <p>BidyutBarta-তে প্রদর্শিত লোডশেডিং সময়সূচি সম্পূর্ণ <strong>কাল্পনিক ও স্ট্যাটিক</strong> — শুধুমাত্র প্রোটোটাইপের কার্যকারিতা প্রদর্শনের জন্য।</p>
        <ul><li>DESCO, DPDC, BPDB থেকে কোনো ডেটা আসে না</li><li>সময়সূচি রিয়েল-টাইম আপডেট হয় না</li><li>জরুরি বিজ্ঞপ্তিগুলো শুধুমাত্র নমুনা</li></ul>
      </div>
      <div class="policy-section">
        <div class="policy-section-title">২. কোনো সরকারি সংযোগ নেই</div>
        <ul><li>Bangladesh Power Development Board (BPDB)</li><li>Dhaka Electric Supply Company (DESCO)</li><li>Dhaka Power Distribution Company (DPDC)</li></ul>
        <p style="margin-top:8px;">— উপরের কোনো সংস্থার সাথে এই প্ল্যাটফর্মের কোনো সম্পর্ক নেই।</p>
      </div>
      <div class="policy-section">
        <div class="policy-section-title">৩. অফিসিয়াল তথ্যের জন্য</div>
        <ul><li>DESCO: desco.org.bd</li><li>DPDC: dpdc.org.bd</li><li>BPDB: bpdb.gov.bd</li></ul>
      </div>`
  }
};

// Merge Bangla fields into POLICY_CONTENT
Object.keys(POLICY_BN).forEach(key => {
  if (POLICY_CONTENT[key]) {
    Object.assign(POLICY_CONTENT[key], POLICY_BN[key]);
  }
});


function openPolicy(type) {
  const data = POLICY_CONTENT[type];
  if (!data) return;
  const isBn = getLang() === 'bn';
  document.getElementById('policyModalIcon').textContent = data.icon;
  document.getElementById('policyModalTitle').textContent = isBn && data.title_bn ? data.title_bn : data.title;
  document.getElementById('policyModalSubtitle').textContent = isBn && data.subtitle_bn ? data.subtitle_bn : data.subtitle;
  document.getElementById('policyLastUpdated').textContent = isBn && data.updated_bn ? data.updated_bn : data.updated;
  document.getElementById('policyModalBody').innerHTML = isBn && data.body_bn ? data.body_bn : data.body;
  document.getElementById('policyOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closePolicy() {
  document.getElementById('policyOverlay').classList.remove('show');
  document.body.style.overflow = '';
}

function closePolicyIfBg(e) {
  if (e.target === document.getElementById('policyOverlay')) closePolicy();
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePolicy();
});