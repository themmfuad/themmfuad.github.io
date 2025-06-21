document.getElementById('toggle-menu').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('show');
});

document.getElementById('mode-toggle').addEventListener('click', () => {
  const root = document.documentElement;
  const currentBg = getComputedStyle(root).getPropertyValue('--bg-color');
  if (currentBg.trim() === '#111') {
    root.style.setProperty('--bg-color', '#fff');
    root.style.setProperty('--text-color', '#111');
  } else {
    root.style.setProperty('--bg-color', '#111');
    root.style.setProperty('--text-color', '#eee');
  }
});