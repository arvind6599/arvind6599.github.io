(function () {
  'use strict';

  /* ── Scroll-reveal via IntersectionObserver ── */
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  function initReveal() {
    // Post cards on listing / home pages
    document.querySelectorAll('.post-entry').forEach(function (el) {
      el.classList.add('reveal');
      observer.observe(el);
    });

    // CV page — reveal every direct child of .post-content
    var cvContent = document.querySelector('.post-single.cv-page .post-content');
    if (cvContent) {
      Array.from(cvContent.children).forEach(function (el, i) {
        el.classList.add('reveal');
        // Stagger elements slightly so they cascade nicely
        el.style.transitionDelay = Math.min(i * 0.04, 0.35) + 's';
        observer.observe(el);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }
})();
