// small helpers for demo
document.getElementById('year').innerText = new Date().getFullYear();

// check video presence
const demoVideo = document.getElementById('demoVideo');
const hint = document.getElementById('videoHint');
if (demoVideo) {
  demoVideo.addEventListener('error', () => {
    hint.textContent = 'Demo video not found. Place your file at assets/videos/demo.mp4';
  });
  // show poster fallback if video not loaded
  if (!demoVideo.querySelector('source')) {
    hint.textContent = 'Demo video missing. Place your file at assets/videos/demo.mp4';
  }
}

// smooth internal links (optional)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (!t) return;
    e.preventDefault();
    t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
