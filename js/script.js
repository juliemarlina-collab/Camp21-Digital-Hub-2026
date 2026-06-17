const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');

menuBtn?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});

mainNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

const phaseProgress = [
  { phase: 'Empathise', value: 85 },
  { phase: 'Define', value: 72 },
  { phase: 'Ideate', value: 60 },
  { phase: 'Prototype', value: 38 },
  { phase: 'Test', value: 20 }
];

const phaseBars = document.getElementById('phaseBars');
if (phaseBars) {
  phaseBars.innerHTML = phaseProgress.map(item => `
    <div class="phase-row">
      <span>${item.phase}</span>
      <div class="bar"><span style="width:${item.value}%"></span></div>
      <strong>${item.value}%</strong>
    </div>
  `).join('');
}

const completionNotice = document.getElementById('completionNotice');
if (completionNotice) {
  completionNotice.innerHTML = `
    <h3>Completion Notice</h3>
    <p><strong>Pending:</strong> 3 groups have not completed Define tasks.</p>
    <p><strong>Needs Review:</strong> 5 prototype submissions require trainer feedback.</p>
    <p><strong>Ready:</strong> 4 groups are ready for judging.</p>
  `;
}
