let inputBuffer = "";
let isMixedFormat = false;
let currentMode = "std";

function gcd(a, b) {
  return b === 0 ? Math.abs(a) : gcd(b, a % b);
}

function setMode(mode) {
  currentMode = mode;
  document.getElementById('stdBtn').classList.toggle('active', mode === 'std');
  document.getElementById('trackBtn').classList.toggle('active', mode === 'track');
  document.getElementById('stdKeypad').classList.toggle('hidden', mode !== 'std');
  document.getElementById('trackKeypad').classList.toggle('hidden', mode !== 'track');
  document.getElementById('modeLabel').innerText = mode === 'std' ? "STD MODE" : "TRACK MODE";

  if (mode === 'track') {
    solveTrack();
  } else {
    updateDisplay(inputBuffer || "0", "Enter expression");
  }
}

function toggleFormat() {
  isMixedFormat = !isMixedFormat;
  document.getElementById('formatLabel').innerText = isMixedFormat ? "FMT: MIXED" : "FMT: SIMPLE";
  if (currentMode === 'track') {
    solveTrack();
  } else {
    evaluateFraction();
  }
}

function pressKey(char) {
  inputBuffer += char;
  updateDisplay(inputBuffer, "Typing...");
}

function clearCalc() {
  inputBuffer = "";
  updateDisplay("0", "Cleared");
}

function backspace() {
  inputBuffer = inputBuffer.slice(0, -1);
  updateDisplay(inputBuffer || "0", "Typing...");
}

function updateDisplay(main, sub) {
  document.getElementById('lcdMain').innerText = main;
  document.getElementById('lcdSub').innerText = sub;
}

function formatResult(num, den) {
  if (den === 0) return { main: "Error", sub: "Division by zero" };
  
  const common = gcd(num, den);
  let simpNum = num / common;
  let simpDen = den / common;

  if (simpDen < 0) {
    simpNum = -simpNum;
    simpDen = -simpDen;
  }

  if (isMixedFormat && Math.abs(simpNum) >= simpDen && simpDen !== 1) {
    const whole = Math.floor(Math.abs(simpNum) / simpDen) * Math.sign(simpNum);
    const rem = Math.abs(simpNum) % simpDen;
    return {
      main: `${whole} ${rem}/${simpDen}`,
      sub: `Simple: ${simpNum}/${simpDen}`
    };
  }

  return {
    main: simpDen === 1 ? `${simpNum}` : `${simpNum}/${simpDen}`,
    sub: simpDen === 1 ? "Whole Number" : `${simpNum} of ${simpDen} parts`
  };
}

function solveTrack() {
  const dist = parseInt(document.getElementById('distInput').value) || 0;
  const total = parseInt(document.getElementById('trackInput').value) || 1;
  const res = formatResult(dist, total);
  updateDisplay(res.main, res.sub);
}

function evaluateFraction() {
  if (!inputBuffer) return;

  // Simple fraction parser for inputs like 13/150, 1/2+3/4, etc.
  try {
    const ops = ['+', '-', '×', '÷'];
    let op = ops.find(o => inputBuffer.includes(o));

    if (!op && inputBuffer.includes('/')) {
      const [n, d] = inputBuffer.split('/').map(Number);
      const res = formatResult(n, d);
      updateDisplay(res.main, res.sub);
      return;
    }

    if (!op) return;

    const parts = inputBuffer.split(op);
    const [n1, d1] = parts[0].includes('/') ? parts[0].split('/').map(Number) : [Number(parts[0]), 1];
    const [n2, d2] = parts[1].includes('/') ? parts[1].split('/').map(Number) : [Number(parts[1]), 1];

    let resNum = 0, resDen = 1;

    if (op === '+') { resNum = n1 * d2 + n2 * d1; resDen = d1 * d2; }
    if (op === '-') { resNum = n1 * d2 - n2 * d1; resDen = d1 * d2; }
    if (op === '×') { resNum = n1 * n2; resDen = d1 * d2; }
    if (op === '÷') { resNum = n1 * d2; resDen = d1 * n2; }

    const res = formatResult(resNum, resDen);
    updateDisplay(res.main, res.sub);
  } catch (e) {
    updateDisplay("Error", "Invalid Format");
  }
}
