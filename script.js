/* ═══════════════════════════════════════════════════════
   INTERACTIVE PERIODIC TABLE — COMPLETE JAVASCRIPT
   Modular, Vanilla JS — No dependencies
   ════════════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────────────────────
   1. ELEMENT DATA — All 118 elements
   Format: [atomicNumber, symbol, name, category, period, group, atomicMass]
───────────────────────────────────────────────────────── */
const ELEMENTS = [
  [1,  'H',  'Hydrogen',      'nonmetal',              1, 1,  1.008],
  [2,  'He', 'Helium',        'noble-gas',              1, 18, 4.0026],
  [3,  'Li', 'Lithium',       'alkali-metal',           2, 1,  6.94],
  [4,  'Be', 'Beryllium',     'alkaline-earth-metal',   2, 2,  9.0122],
  [5,  'B',  'Boron',         'metalloid',              2, 13, 10.81],
  [6,  'C',  'Carbon',        'nonmetal',               2, 14, 12.011],
  [7,  'N',  'Nitrogen',      'nonmetal',               2, 15, 14.007],
  [8,  'O',  'Oxygen',        'nonmetal',               2, 16, 15.999],
  [9,  'F',  'Fluorine',      'halogen',                2, 17, 18.998],
  [10, 'Ne', 'Neon',          'noble-gas',              2, 18, 20.180],
  [11, 'Na', 'Sodium',        'alkali-metal',           3, 1,  22.990],
  [12, 'Mg', 'Magnesium',     'alkaline-earth-metal',   3, 2,  24.305],
  [13, 'Al', 'Aluminium',     'post-transition-metal',  3, 13, 26.982],
  [14, 'Si', 'Silicon',       'metalloid',              3, 14, 28.085],
  [15, 'P',  'Phosphorus',    'nonmetal',               3, 15, 30.974],
  [16, 'S',  'Sulfur',        'nonmetal',               3, 16, 32.06],
  [17, 'Cl', 'Chlorine',      'halogen',                3, 17, 35.45],
  [18, 'Ar', 'Argon',         'noble-gas',              3, 18, 39.948],
  [19, 'K',  'Potassium',     'alkali-metal',           4, 1,  39.098],
  [20, 'Ca', 'Calcium',       'alkaline-earth-metal',   4, 2,  40.078],
  [21, 'Sc', 'Scandium',      'transition-metal',       4, 3,  44.956],
  [22, 'Ti', 'Titanium',      'transition-metal',       4, 4,  47.867],
  [23, 'V',  'Vanadium',      'transition-metal',       4, 5,  50.942],
  [24, 'Cr', 'Chromium',      'transition-metal',       4, 6,  51.996],
  [25, 'Mn', 'Manganese',     'transition-metal',       4, 7,  54.938],
  [26, 'Fe', 'Iron',          'transition-metal',       4, 8,  55.845],
  [27, 'Co', 'Cobalt',        'transition-metal',       4, 9,  58.933],
  [28, 'Ni', 'Nickel',        'transition-metal',       4, 10, 58.693],
  [29, 'Cu', 'Copper',        'transition-metal',       4, 11, 63.546],
  [30, 'Zn', 'Zinc',          'transition-metal',       4, 12, 65.38],
  [31, 'Ga', 'Gallium',       'post-transition-metal',  4, 13, 69.723],
  [32, 'Ge', 'Germanium',     'metalloid',              4, 14, 72.630],
  [33, 'As', 'Arsenic',       'metalloid',              4, 15, 74.922],
  [34, 'Se', 'Selenium',      'nonmetal',               4, 16, 78.971],
  [35, 'Br', 'Bromine',       'halogen',                4, 17, 79.904],
  [36, 'Kr', 'Krypton',       'noble-gas',              4, 18, 83.798],
  [37, 'Rb', 'Rubidium',      'alkali-metal',           5, 1,  85.468],
  [38, 'Sr', 'Strontium',     'alkaline-earth-metal',   5, 2,  87.62],
  [39, 'Y',  'Yttrium',       'transition-metal',       5, 3,  88.906],
  [40, 'Zr', 'Zirconium',     'transition-metal',       5, 4,  91.224],
  [41, 'Nb', 'Niobium',       'transition-metal',       5, 5,  92.906],
  [42, 'Mo', 'Molybdenum',    'transition-metal',       5, 6,  95.95],
  [43, 'Tc', 'Technetium',    'transition-metal',       5, 7,  98],
  [44, 'Ru', 'Ruthenium',     'transition-metal',       5, 8,  101.07],
  [45, 'Rh', 'Rhodium',       'transition-metal',       5, 9,  102.906],
  [46, 'Pd', 'Palladium',     'transition-metal',       5, 10, 106.42],
  [47, 'Ag', 'Silver',        'transition-metal',       5, 11, 107.868],
  [48, 'Cd', 'Cadmium',       'transition-metal',       5, 12, 112.414],
  [49, 'In', 'Indium',        'post-transition-metal',  5, 13, 114.818],
  [50, 'Sn', 'Tin',           'post-transition-metal',  5, 14, 118.710],
  [51, 'Sb', 'Antimony',      'metalloid',              5, 15, 121.760],
  [52, 'Te', 'Tellurium',     'metalloid',              5, 16, 127.60],
  [53, 'I',  'Iodine',        'halogen',                5, 17, 126.904],
  [54, 'Xe', 'Xenon',         'noble-gas',              5, 18, 131.293],
  [55, 'Cs', 'Caesium',       'alkali-metal',           6, 1,  132.905],
  [56, 'Ba', 'Barium',        'alkaline-earth-metal',   6, 2,  137.327],
  [57, 'La', 'Lanthanum',     'lanthanide',             6, 3,  138.905],
  [58, 'Ce', 'Cerium',        'lanthanide',             6, 3,  140.116],
  [59, 'Pr', 'Praseodymium',  'lanthanide',             6, 3,  140.908],
  [60, 'Nd', 'Neodymium',     'lanthanide',             6, 3,  144.242],
  [61, 'Pm', 'Promethium',    'lanthanide',             6, 3,  145],
  [62, 'Sm', 'Samarium',      'lanthanide',             6, 3,  150.36],
  [63, 'Eu', 'Europium',      'lanthanide',             6, 3,  151.964],
  [64, 'Gd', 'Gadolinium',    'lanthanide',             6, 3,  157.25],
  [65, 'Tb', 'Terbium',       'lanthanide',             6, 3,  158.925],
  [66, 'Dy', 'Dysprosium',    'lanthanide',             6, 3,  162.500],
  [67, 'Ho', 'Holmium',       'lanthanide',             6, 3,  164.930],
  [68, 'Er', 'Erbium',        'lanthanide',             6, 3,  167.259],
  [69, 'Tm', 'Thulium',       'lanthanide',             6, 3,  168.934],
  [70, 'Yb', 'Ytterbium',     'lanthanide',             6, 3,  173.045],
  [71, 'Lu', 'Lutetium',      'lanthanide',             6, 3,  174.967],
  [72, 'Hf', 'Hafnium',       'transition-metal',       6, 4,  178.49],
  [73, 'Ta', 'Tantalum',      'transition-metal',       6, 5,  180.948],
  [74, 'W',  'Tungsten',      'transition-metal',       6, 6,  183.84],
  [75, 'Re', 'Rhenium',       'transition-metal',       6, 7,  186.207],
  [76, 'Os', 'Osmium',        'transition-metal',       6, 8,  190.23],
  [77, 'Ir', 'Iridium',       'transition-metal',       6, 9,  192.217],
  [78, 'Pt', 'Platinum',      'transition-metal',       6, 10, 195.084],
  [79, 'Au', 'Gold',          'transition-metal',       6, 11, 196.967],
  [80, 'Hg', 'Mercury',       'transition-metal',       6, 12, 200.592],
  [81, 'Tl', 'Thallium',      'post-transition-metal',  6, 13, 204.38],
  [82, 'Pb', 'Lead',          'post-transition-metal',  6, 14, 207.2],
  [83, 'Bi', 'Bismuth',       'post-transition-metal',  6, 15, 208.980],
  [84, 'Po', 'Polonium',      'post-transition-metal',  6, 16, 209],
  [85, 'At', 'Astatine',      'halogen',                6, 17, 210],
  [86, 'Rn', 'Radon',         'noble-gas',              6, 18, 222],
  [87, 'Fr', 'Francium',      'alkali-metal',           7, 1,  223],
  [88, 'Ra', 'Radium',        'alkaline-earth-metal',   7, 2,  226],
  [89, 'Ac', 'Actinium',      'actinide',               7, 3,  227],
  [90, 'Th', 'Thorium',       'actinide',               7, 3,  232.038],
  [91, 'Pa', 'Protactinium',  'actinide',               7, 3,  231.036],
  [92, 'U',  'Uranium',       'actinide',               7, 3,  238.029],
  [93, 'Np', 'Neptunium',     'actinide',               7, 3,  237],
  [94, 'Pu', 'Plutonium',     'actinide',               7, 3,  244],
  [95, 'Am', 'Americium',     'actinide',               7, 3,  243],
  [96, 'Cm', 'Curium',        'actinide',               7, 3,  247],
  [97, 'Bk', 'Berkelium',     'actinide',               7, 3,  247],
  [98, 'Cf', 'Californium',   'actinide',               7, 3,  251],
  [99, 'Es', 'Einsteinium',   'actinide',               7, 3,  252],
  [100,'Fm', 'Fermium',       'actinide',               7, 3,  257],
  [101,'Md', 'Mendelevium',   'actinide',               7, 3,  258],
  [102,'No', 'Nobelium',      'actinide',               7, 3,  259],
  [103,'Lr', 'Lawrencium',    'actinide',               7, 3,  266],
  [104,'Rf', 'Rutherfordium', 'transition-metal',       7, 4,  267],
  [105,'Db', 'Dubnium',       'transition-metal',       7, 5,  268],
  [106,'Sg', 'Seaborgium',    'transition-metal',       7, 6,  269],
  [107,'Bh', 'Bohrium',       'transition-metal',       7, 7,  270],
  [108,'Hs', 'Hassium',       'transition-metal',       7, 8,  277],
  [109,'Mt', 'Meitnerium',    'transition-metal',       7, 9,  278],
  [110,'Ds', 'Darmstadtium',  'transition-metal',       7, 10, 281],
  [111,'Rg', 'Roentgenium',   'transition-metal',       7, 11, 282],
  [112,'Cn', 'Copernicium',   'transition-metal',       7, 12, 285],
  [113,'Nh', 'Nihonium',      'post-transition-metal',  7, 13, 286],
  [114,'Fl', 'Flerovium',     'post-transition-metal',  7, 14, 289],
  [115,'Mc', 'Moscovium',     'post-transition-metal',  7, 15, 290],
  [116,'Lv', 'Livermorium',   'post-transition-metal',  7, 16, 293],
  [117,'Ts', 'Tennessine',    'halogen',                7, 17, 294],
  [118,'Og', 'Oganesson',     'noble-gas',              7, 18, 294],
];

/* Map for quick lookup by atomic number */
const elementMap = {};
ELEMENTS.forEach(e => {
  elementMap[e[0]] = {
    number: e[0], symbol: e[1], name: e[2],
    category: e[3], period: e[4], group: e[5], mass: e[6]
  };
});

/* ─────────────────────────────────────────────────────────
   2. ELECTRON SHELL DISTRIBUTION
   Uses realistic Bohr model shell configuration
───────────────────────────────────────────────────────── */
/** Returns an array of electron counts per shell for atomic number Z */
function getShellConfig(Z) {
  // Accurate shell configs for all 118 elements
  const configs = {
    1:  [1],
    2:  [2],
    3:  [2,1],
    4:  [2,2],
    5:  [2,3],
    6:  [2,4],
    7:  [2,5],
    8:  [2,6],
    9:  [2,7],
    10: [2,8],
    11: [2,8,1],
    12: [2,8,2],
    13: [2,8,3],
    14: [2,8,4],
    15: [2,8,5],
    16: [2,8,6],
    17: [2,8,7],
    18: [2,8,8],
    19: [2,8,8,1],
    20: [2,8,8,2],
    21: [2,8,9,2],
    22: [2,8,10,2],
    23: [2,8,11,2],
    24: [2,8,13,1],
    25: [2,8,13,2],
    26: [2,8,14,2],
    27: [2,8,15,2],
    28: [2,8,16,2],
    29: [2,8,18,1],
    30: [2,8,18,2],
    31: [2,8,18,3],
    32: [2,8,18,4],
    33: [2,8,18,5],
    34: [2,8,18,6],
    35: [2,8,18,7],
    36: [2,8,18,8],
    37: [2,8,18,8,1],
    38: [2,8,18,8,2],
    39: [2,8,18,9,2],
    40: [2,8,18,10,2],
    41: [2,8,18,12,1],
    42: [2,8,18,13,1],
    43: [2,8,18,13,2],
    44: [2,8,18,15,1],
    45: [2,8,18,16,1],
    46: [2,8,18,18],
    47: [2,8,18,18,1],
    48: [2,8,18,18,2],
    49: [2,8,18,18,3],
    50: [2,8,18,18,4],
    51: [2,8,18,18,5],
    52: [2,8,18,18,6],
    53: [2,8,18,18,7],
    54: [2,8,18,18,8],
    55: [2,8,18,18,8,1],
    56: [2,8,18,18,8,2],
    57: [2,8,18,18,9,2],
    58: [2,8,18,19,9,2],
    59: [2,8,18,21,8,2],
    60: [2,8,18,22,8,2],
    61: [2,8,18,23,8,2],
    62: [2,8,18,24,8,2],
    63: [2,8,18,25,8,2],
    64: [2,8,18,25,9,2],
    65: [2,8,18,27,8,2],
    66: [2,8,18,28,8,2],
    67: [2,8,18,29,8,2],
    68: [2,8,18,30,8,2],
    69: [2,8,18,31,8,2],
    70: [2,8,18,32,8,2],
    71: [2,8,18,32,9,2],
    72: [2,8,18,32,10,2],
    73: [2,8,18,32,11,2],
    74: [2,8,18,32,12,2],
    75: [2,8,18,32,13,2],
    76: [2,8,18,32,14,2],
    77: [2,8,18,32,15,2],
    78: [2,8,18,32,17,1],
    79: [2,8,18,32,18,1],
    80: [2,8,18,32,18,2],
    81: [2,8,18,32,18,3],
    82: [2,8,18,32,18,4],
    83: [2,8,18,32,18,5],
    84: [2,8,18,32,18,6],
    85: [2,8,18,32,18,7],
    86: [2,8,18,32,18,8],
    87: [2,8,18,32,18,8,1],
    88: [2,8,18,32,18,8,2],
    89: [2,8,18,32,18,9,2],
    90: [2,8,18,32,18,10,2],
    91: [2,8,18,32,20,9,2],
    92: [2,8,18,32,21,9,2],
    93: [2,8,18,32,22,9,2],
    94: [2,8,18,32,24,8,2],
    95: [2,8,18,32,25,8,2],
    96: [2,8,18,32,25,9,2],
    97: [2,8,18,32,27,8,2],
    98: [2,8,18,32,28,8,2],
    99: [2,8,18,32,29,8,2],
    100:[2,8,18,32,30,8,2],
    101:[2,8,18,32,31,8,2],
    102:[2,8,18,32,32,8,2],
    103:[2,8,18,32,32,8,3],
    104:[2,8,18,32,32,10,2],
    105:[2,8,18,32,32,11,2],
    106:[2,8,18,32,32,12,2],
    107:[2,8,18,32,32,13,2],
    108:[2,8,18,32,32,14,2],
    109:[2,8,18,32,32,15,2],
    110:[2,8,18,32,32,17,1],
    111:[2,8,18,32,32,18,1],
    112:[2,8,18,32,32,18,2],
    113:[2,8,18,32,32,18,3],
    114:[2,8,18,32,32,18,4],
    115:[2,8,18,32,32,18,5],
    116:[2,8,18,32,32,18,6],
    117:[2,8,18,32,32,18,7],
    118:[2,8,18,32,32,18,8],
  };
  return configs[Z] || [Z];
}

/* ─────────────────────────────────────────────────────────
   3. DOM REFERENCES
───────────────────────────────────────────────────────── */
const screens = {
  home:    document.getElementById('home-screen'),
  table:   document.getElementById('table-screen'),
  details: document.getElementById('details-screen'),
};

const dom = {
  btnExplore:     document.getElementById('btn-explore'),
  btnBackHome:    document.getElementById('btn-back-home'),
  btnBackTable:   document.getElementById('btn-back-table'),
  elementSearch:  document.getElementById('element-search'),
  btnClearSearch: document.getElementById('btn-clear-search'),
  periodicGrid:   document.getElementById('periodic-grid'),
  noResults:      document.getElementById('no-results'),
  searchTerm:     document.getElementById('search-term'),
  particleCanvas: document.getElementById('particle-canvas'),
  // Details panel
  detailSymbolBox:  document.getElementById('detail-symbol-box'),
  detailNumber:     document.getElementById('detail-number'),
  detailSymbol:     document.getElementById('detail-symbol'),
  detailMassSmall:  document.getElementById('detail-mass-small'),
  detailName:       document.getElementById('detail-name'),
  detailCategory:   document.getElementById('detail-category'),
  factNumber:       document.getElementById('fact-number'),
  factMass:         document.getElementById('fact-mass'),
  factPeriod:       document.getElementById('fact-period'),
  factGroup:        document.getElementById('fact-group'),
  factProtons:      document.getElementById('fact-protons'),
  factNeutrons:     document.getElementById('fact-neutrons'),
  factElectrons:    document.getElementById('fact-electrons'),
  factShells:       document.getElementById('fact-shells'),
  // SVG atom
  atomSvg:          document.getElementById('atom-svg'),
  atomShellsGroup:  document.getElementById('atom-shells-group'),
  svgProtons:       document.getElementById('svg-protons'),
  svgNeutrons:      document.getElementById('svg-neutrons'),
  // Particle counts
  pcProtons:        document.getElementById('pc-protons'),
  pcNeutrons:       document.getElementById('pc-neutrons'),
  pcElectrons:      document.getElementById('pc-electrons'),
  shellDistBars:    document.getElementById('shell-dist-bars'),
};

/* ─────────────────────────────────────────────────────────
   4. SCREEN MANAGEMENT
───────────────────────────────────────────────────────── */
function showScreen(name) {
  Object.entries(screens).forEach(([key, el]) => {
    if (key === name) {
      el.classList.remove('hidden');
      el.classList.add('active');
    } else {
      el.classList.add('hidden');
      el.classList.remove('active');
    }
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ─────────────────────────────────────────────────────────
   5. PARTICLE CANVAS (Home Screen Ambiance)
───────────────────────────────────────────────────────── */
(function initParticles() {
  const canvas = dom.particleCanvas;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles;

  const COUNT = 55;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.8 + 0.5,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      o: Math.random() * 0.5 + 0.1,
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: COUNT }, createParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(89, 229, 255, ${p.o})`;
      ctx.shadowColor = 'rgba(89, 229, 255, 0.8)';
      ctx.shadowBlur = 6;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;
      if (p.y < -10) p.y = H + 10;
      if (p.y > H + 10) p.y = -10;
    });
    requestAnimationFrame(draw);
  }

  init();
  draw();
  window.addEventListener('resize', resize);
})();

/* ─────────────────────────────────────────────────────────
   6. PERIODIC TABLE RENDERING
───────────────────────────────────────────────────────── */
function getGridPosition(el) {
  const num = el.number;
  // Lanthanides 57–71 → row 8, columns 3–17
  if (num >= 57 && num <= 71) return { col: num - 54, row: 8 };
  // Actinides 89–103 → row 9, columns 3–17
  if (num >= 89 && num <= 103) return { col: num - 86, row: 9 };
  return { col: el.group, row: el.period };
}

function createElementTile(el) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = `element cat-${el.category}`;
  btn.setAttribute('role', 'listitem');
  btn.setAttribute('aria-label', `${el.name}, atomic number ${el.number}`);
  btn.dataset.number = el.number;

  const { col, row } = getGridPosition(el);
  btn.style.gridColumn = col;
  btn.style.gridRow = row;

  const massStr = el.mass ? el.mass.toString() : '?';
  btn.innerHTML = `
    <span class="el-num">${el.number}</span>
    <span class="el-sym">${el.symbol}</span>
    <span class="el-name">${el.name}</span>
    <span class="el-mass">${massStr}</span>
  `;

  btn.addEventListener('click', () => openDetails(el));
  return btn;
}

let allTiles = [];

function renderPeriodicTable(list = ELEMENTS) {
  dom.periodicGrid.innerHTML = '';
  allTiles = [];

  const elObjects = list.map(e => ({
    number: e[0], symbol: e[1], name: e[2],
    category: e[3], period: e[4], group: e[5], mass: e[6]
  }));

  // Always render all 118 to keep grid structure; fade non-matching
  const isFiltered = list.length < ELEMENTS.length;
  const matchNums = new Set(elObjects.map(e => e.number));

  ELEMENTS.forEach(e => {
    const el = {
      number: e[0], symbol: e[1], name: e[2],
      category: e[3], period: e[4], group: e[5], mass: e[6]
    };
    const tile = createElementTile(el);
    if (isFiltered && !matchNums.has(el.number)) {
      tile.classList.add('faded');
    }
    dom.periodicGrid.appendChild(tile);
    allTiles.push(tile);
  });
}

/* ─────────────────────────────────────────────────────────
   7. SEARCH
───────────────────────────────────────────────────────── */
function performSearch(query) {
  const q = query.trim().toLowerCase();

  dom.btnClearSearch.classList.toggle('hidden', q === '');

  if (!q) {
    dom.noResults.classList.add('hidden');
    allTiles.forEach(t => t.classList.remove('faded'));
    return;
  }

  const isNum = /^\d+$/.test(q);
  const matchNums = new Set();

  ELEMENTS.forEach(e => {
    const [num, sym, name] = e;
    if (
      (isNum && String(num) === q) ||
      sym.toLowerCase() === q ||
      name.toLowerCase().includes(q)
    ) {
      matchNums.add(num);
    }
  });

  const found = matchNums.size > 0;
  dom.noResults.classList.toggle('hidden', found);
  if (!found) dom.searchTerm.textContent = query;

  allTiles.forEach(t => {
    const num = parseInt(t.dataset.number, 10);
    t.classList.toggle('faded', !matchNums.has(num));
  });
}

dom.elementSearch.addEventListener('input', e => performSearch(e.target.value));
dom.btnClearSearch.addEventListener('click', () => {
  dom.elementSearch.value = '';
  performSearch('');
  dom.elementSearch.focus();
});

/* ─────────────────────────────────────────────────────────
   8. ATOMIC STRUCTURE — SVG RENDERER
   Draws animated orbital rings and electron dots
───────────────────────────────────────────────────────── */
const CX = 160, CY = 160; // Centre of SVG viewBox
const SHELL_RADII = [38, 62, 86, 108, 128, 146, 160]; // Visual radii for shells 1-7

let electronAnimations = []; // store rAF handles

function clearAtomSVG() {
  dom.atomShellsGroup.innerHTML = '';
  electronAnimations.forEach(id => cancelAnimationFrame(id));
  electronAnimations = [];
}

function drawAtomSVG(Z, shells) {
  clearAtomSVG();

  const NS = 'http://www.w3.org/2000/svg';

  // For heavy elements with many shells, compress the display to max 5 shells visually
  const displayShells = shells.length > 5
    ? [...shells.slice(0, 2), ...shells.slice(-3)]
    : shells;
  const displayRadii = SHELL_RADII.slice(0, displayShells.length);

  displayShells.forEach((count, si) => {
    const r = displayRadii[si];

    // Draw orbit circle
    const orbit = document.createElementNS(NS, 'circle');
    orbit.setAttribute('cx', CX);
    orbit.setAttribute('cy', CY);
    orbit.setAttribute('r', r);
    orbit.setAttribute('class', 'orbit-path');
    orbit.setAttribute('fill', 'none');
    orbit.setAttribute('stroke', 'rgba(89,229,255,0.28)');
    orbit.setAttribute('stroke-width', '1');
    dom.atomShellsGroup.appendChild(orbit);

    // Limit displayed electrons to max 8 for clarity
    const displayCount = Math.min(count, 8);

    // Draw electrons and animate them
    const electronEls = [];
    for (let i = 0; i < displayCount; i++) {
      const startAngle = (2 * Math.PI * i) / displayCount - Math.PI / 2;
      const ex = CX + r * Math.cos(startAngle);
      const ey = CY + r * Math.sin(startAngle);

      const g = document.createElementNS(NS, 'g');

      // Glow halo
      const halo = document.createElementNS(NS, 'circle');
      halo.setAttribute('cx', ex);
      halo.setAttribute('cy', ey);
      halo.setAttribute('r', '5');
      halo.setAttribute('fill', 'rgba(89,229,255,0.2)');
      g.appendChild(halo);

      // Electron dot
      const dot = document.createElementNS(NS, 'circle');
      dot.setAttribute('cx', ex);
      dot.setAttribute('cy', ey);
      dot.setAttribute('r', '4');
      dot.setAttribute('fill', '#59e5ff');
      dot.setAttribute('filter', 'url(#glow-electron)');
      g.appendChild(dot);

      dom.atomShellsGroup.appendChild(g);
      electronEls.push({ g, halo, dot, r, startAngle });
    }

    // Animate orbit — different speed per shell
    const duration = 4000 + si * 2500; // ms per revolution
    let start = null;

    function animate(ts) {
      if (!start) start = ts;
      const elapsed = ts - start;
      const fraction = (elapsed % duration) / duration;
      const deltaAngle = fraction * 2 * Math.PI;

      electronEls.forEach(({ g, halo, dot, r: er, startAngle: sa }) => {
        const angle = sa + deltaAngle;
        const nx = CX + er * Math.cos(angle);
        const ny = CY + er * Math.sin(angle);
        const pos = `${nx} ${ny}`;
        halo.setAttribute('cx', nx);
        halo.setAttribute('cy', ny);
        dot.setAttribute('cx', nx);
        dot.setAttribute('cy', ny);
      });

      electronAnimations.push(requestAnimationFrame(animate));
    }

    electronAnimations.push(requestAnimationFrame(animate));
  });
}

/* ─────────────────────────────────────────────────────────
   9. SHELL DISTRIBUTION BARS
───────────────────────────────────────────────────────── */
const SHELL_NAMES = ['K', 'L', 'M', 'N', 'O', 'P', 'Q'];
const SHELL_CAPS  = [2, 8, 18, 32, 32, 18, 8];

function renderShellBars(shells) {
  dom.shellDistBars.innerHTML = '';
  shells.forEach((count, i) => {
    const cap = SHELL_CAPS[i] || 32;
    const pct = Math.min(100, (count / cap) * 100).toFixed(1);
    const row = document.createElement('div');
    row.className = 'shell-bar-row';
    row.innerHTML = `
      <span class="shell-bar-label">${SHELL_NAMES[i] || 'Shell ' + (i+1)}</span>
      <div class="shell-bar-track">
        <div class="shell-bar-fill" style="width:0%" data-target="${pct}"></div>
      </div>
      <span class="shell-bar-count">${count}</span>
    `;
    dom.shellDistBars.appendChild(row);
  });

  // Animate bars after a brief delay
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      dom.shellDistBars.querySelectorAll('.shell-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.target + '%';
      });
    });
  });
}

/* ─────────────────────────────────────────────────────────
   10. CATEGORY → COLOUR MAPPING (for detail symbol box)
───────────────────────────────────────────────────────── */
const CATEGORY_COLORS = {
  'alkali-metal':         ['#8a2040', '#5a1020'],
  'alkaline-earth-metal': ['#7a4010', '#4a2800'],
  'transition-metal':     ['#4a2a80', '#2a1050'],
  'post-transition-metal':['#1a4080', '#0a1850'],
  'metalloid':            ['#0a5858', '#042830'],
  'nonmetal':             ['#0a5830', '#042818'],
  'halogen':              ['#6a5000', '#3a2800'],
  'noble-gas':            ['#0a3080', '#041560'],
  'lanthanide':           ['#6a1870', '#3a0840'],
  'actinide':             ['#7a1828', '#480810'],
};

/* ─────────────────────────────────────────────────────────
   11. OPEN ELEMENT DETAILS
───────────────────────────────────────────────────────── */
function openDetails(el) {
  const protons   = el.number;
  const electrons = el.number;
  const neutrons  = el.mass ? Math.round(el.mass) - el.number : '?';
  const shells    = getShellConfig(el.number);
  const shellStr  = shells.join('-');

  // Symbol box
  dom.detailNumber.textContent   = el.number;
  dom.detailSymbol.textContent   = el.symbol;
  dom.detailMassSmall.textContent = el.mass ? el.mass : '?';

  // Apply category gradient to symbol box
  const [c1, c2] = CATEGORY_COLORS[el.category] || ['#0e3b60', '#261850'];
  dom.detailSymbolBox.style.background = `linear-gradient(145deg, ${c1}, ${c2})`;

  // Identity
  dom.detailName.textContent     = el.name;
  dom.detailCategory.textContent = el.category.replace(/-/g, ' ');

  // Fact cards
  dom.factNumber.textContent    = el.number;
  dom.factMass.textContent      = el.mass ? el.mass : '—';
  dom.factPeriod.textContent    = el.period;
  dom.factGroup.textContent     = el.group;
  dom.factProtons.textContent   = protons;
  dom.factNeutrons.textContent  = neutrons;
  dom.factElectrons.textContent = electrons;
  dom.factShells.textContent    = shellStr;

  // Particle panel
  dom.pcProtons.textContent   = protons;
  dom.pcNeutrons.textContent  = neutrons;
  dom.pcElectrons.textContent = electrons;

  // SVG nucleus text
  dom.svgProtons.textContent  = `${protons}p+`;
  dom.svgNeutrons.textContent = `${neutrons}n0`;

  // Shell distribution bars
  renderShellBars(shells);

  // Draw animated SVG atom
  drawAtomSVG(el.number, shells);

  // Switch screens
  showScreen('details');
}

/* ─────────────────────────────────────────────────────────
   12. NAVIGATION
───────────────────────────────────────────────────────── */
dom.btnExplore.addEventListener('click', () => {
  showScreen('table');
  if (allTiles.length === 0) renderPeriodicTable();
});

dom.btnBackHome.addEventListener('click', () => showScreen('home'));

dom.btnBackTable.addEventListener('click', () => {
  clearAtomSVG();
  showScreen('table');
});

/* ─────────────────────────────────────────────────────────
   13. KEYBOARD SHORTCUT — ESC to go back
───────────────────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (!screens.details.classList.contains('hidden')) {
      clearAtomSVG();
      showScreen('table');
    } else if (!screens.table.classList.contains('hidden')) {
      showScreen('home');
    }
  }
});

/* ─────────────────────────────────────────────────────────
   14. INITIAL STATE
───────────────────────────────────────────────────────── */
// Home screen starts visible — already set in HTML via .active
// Pre-render table in background for instant first load
renderPeriodicTable();