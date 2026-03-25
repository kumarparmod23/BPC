(function () {
  const menuButton = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.toggle('hidden');
      menuButton.setAttribute('aria-expanded', String(!isHidden));
    });
  }

  const track = (eventName, payload) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...payload });
  };

  document.querySelectorAll('[data-track]').forEach((el) => {
    el.addEventListener('click', () => {
      track('cta_click', {
        cta_name: el.getAttribute('data-track'),
        cta_target: el.getAttribute('href') || 'form'
      });
    });
  });

  const form = document.getElementById('appointment-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const issue = document.getElementById('issue').value.trim();
      const message = encodeURIComponent(`New consultation request%0AName: ${name}%0APhone: ${phone}%0AIssue: ${issue}`);
      track('appointment_submit', { source: 'website_form' });
      window.open(`https://wa.me/917017790760?text=${message}`, '_blank', 'noopener');
    });
  }

  const year = document.getElementById('current-year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
