document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.getElementById('themeToggle');

if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');

    toggle.innerHTML = document.body.classList.contains('light')
      ? '<i class="fa-solid fa-moon"></i>'
      : '<i class="fa-solid fa-sun"></i>';
  });
  }
