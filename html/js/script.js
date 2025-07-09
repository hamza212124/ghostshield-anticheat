const tabs = document.querySelectorAll('.tab');
const pages = document.querySelectorAll('.page');

tabs.forEach(tab => tab.addEventListener('click', () => {
  tabs.forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  pages.forEach(p => p.classList.remove('visible'));
  document.getElementById(tab.dataset.target).classList.add('visible');
}));
