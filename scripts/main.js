(function () {
  const menuButton = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.toggle('hidden');
      menuButton.setAttribute('aria-expanded', String(!isHidden));
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuButton.setAttribute('aria-expanded', 'false');
      });
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

      if (!name || !phone || !issue) return;

      const message = `New consultation request\nName: ${name}\nPhone: ${phone}\nIssue: ${issue}`;
      const waUrl = `https://wa.me/917017790760?${new URLSearchParams({ text: message }).toString()}`;
      track('appointment_submit', { source: 'website_form' });
      window.open(waUrl, '_blank');
    });
  }

  const year = document.getElementById('current-year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
