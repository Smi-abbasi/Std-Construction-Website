/**
 * OLYSS CONSTRUCTS — ARCHITECTURAL FRONTEND EXPERIENCE
 * Vanilla JavaScript + Lenis Smooth Scroll + GSAP & ScrollTrigger
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. DATA & STATE MANAGEMENT
  // ==========================================================================
  const PROJECTS_DATA = [
    {
      id: 'arden',
      index: '01',
      title: 'The Arden Residence',
      subtitle: 'Private Residence • Contemporary Concrete & Glass',
      location: 'Islamabad, Pakistan',
      category: 'Residential',
      year: '2026',
      area: '14,500 Sq. Ft.',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
      description: 'Framed against the Margalla Hills, The Arden Residence is a sculptural exploration of heavy cantilevered exposed concrete balanced with expansive thermal glass curtain walls. Designed around a subterranean water courtyard that generates passive microclimate cooling.',
      specs: [
        { label: 'Structural System', value: 'Reinforced fair-faced concrete with post-tensioned cantilevers' },
        { label: 'Glazing', value: 'Triple-glazed low-iron acoustic glass with automated shading' },
        { label: 'Sustainable Tech', value: 'Geothermal ground-source heat pump & 24kW solar canopy' },
        { label: 'Project Status', value: 'Completed & white-glove turnkey commissioned' }
      ]
    },
    {
      id: 'heights',
      index: '02',
      title: 'Olyss Heights',
      subtitle: 'Luxury Apartments • 18-Storey Vertical Living',
      location: 'Islamabad, Pakistan',
      category: 'Apartments',
      year: '2025',
      area: '185,000 Sq. Ft.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
      description: 'A benchmark in high-density urban luxury, Olyss Heights features dual-aspect sky residences, cantilevered infinity sky pools, and an articulated bronze-anodized aluminum louver facade providing dynamic solar mitigation throughout the day.',
      specs: [
        { label: 'Building Height', value: '78 meters (18 storeys above grade)' },
        { label: 'Unit Typologies', value: '3-bedroom executive suites and duplex penthouses' },
        { label: 'Envelope', value: 'Unitized curtain wall with champagne-bronze solar fins' },
        { label: 'Amenities', value: 'Level 14 Sky Lounge, wellness spa, and private cinema' }
      ]
    },
    {
      id: 'courtyard',
      index: '03',
      title: 'The Courtyard House',
      subtitle: 'Contemporary Home • Biophilic Internal Sanctuary',
      location: 'Lahore, Pakistan',
      category: 'Residential',
      year: '2025',
      area: '9,400 Sq. Ft.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
      description: 'Reinterpreting traditional regional haveli courtyard architecture for the 21st century. The residence turns inward toward a serene bamboo courtyard and reflection pond, offering private daylight while shielding occupants from urban street bustle.',
      specs: [
        { label: 'Materiality', value: 'Handmade terracotta bricks, honed travertine & teak woodwork' },
        { label: 'Ventilation', value: 'Integrated wind-catch chimney drawing cooled garden air' },
        { label: 'Interior Fitout', value: 'Custom minimalist millwork and recessed perimeter cove lighting' },
        { label: 'Landscape', value: 'Indigenous climate-adapted flora and continuous water channel' }
      ]
    },
    {
      id: 'vertex',
      index: '04',
      title: 'Vertex Apartments',
      subtitle: 'Modern Living • Minimalist Facade Engineering',
      location: 'Rawalpindi, Pakistan',
      category: 'Apartments',
      year: '2024',
      area: '62,000 Sq. Ft.',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
      description: 'A boutique residential development defined by rhythmic geometric balconies that step outward to create private pocket gardens for each apartment. Designed with an ultra-efficient central core maximizing natural perimeter ventilation.',
      specs: [
        { label: 'Structural Type', value: 'Shear-wall concrete structure with seismic base damping' },
        { label: 'Acoustic Rating', value: 'STC 58 partition assemblies for complete silence' },
        { label: 'Efficiency', value: 'EDGE Green Building Certified with 34% energy reduction' },
        { label: 'Finishes', value: 'Microcement flooring and fluted timber wall paneling' }
      ]
    },
    {
      id: 'haven',
      index: '05',
      title: 'The Haven Residence',
      subtitle: 'Hillside Villa • Timber & Mountain Slate',
      location: 'Murree Hills, Pakistan',
      category: 'Villa',
      year: '2024',
      area: '11,800 Sq. Ft.',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
      description: 'Anchored into a dramatic 40-degree pine-clad hillside slope, The Haven Villa steps down the mountain topography over three cascading terraces. Features heated hydronic floors and triple-insulated floor-to-ceiling glass capturing mist-covered valley sunrises.',
      specs: [
        { label: 'Substructure', value: 'Deep rock-anchored concrete caissons and retaining walls' },
        { label: 'Roofing', value: 'Zinc standing seam with integrated snow-melt heat cables' },
        { label: 'Thermal Envelope', value: 'R-40 exterior wall continuous insulation barrier' },
        { label: 'Heating', value: 'Biomass hydronic system paired with dual masonry hearths' }
      ]
    },
    {
      id: 'urbanedge',
      index: '06',
      title: 'Urban Edge Villas',
      subtitle: 'Coastal Architecture • Monolithic Seafront Terraces',
      location: 'Karachi Coast, Pakistan',
      category: 'Villa',
      year: '2023',
      area: '24,000 Sq. Ft.',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1600&q=85',
      description: 'Engineered specifically for aggressive marine environments, Urban Edge Villas employ sulfate-resistant white crystalline concrete and marine-grade stainless hardware. Expansive cantilevered terraces frame endless Arabian Sea horizons.',
      specs: [
        { label: 'Concrete Spec', value: 'High-density silica fume mix with epoxy-coated rebar' },
        { label: 'Glazing Protection', value: 'Impact-rated hurricane glass with sea-spray self-cleaning coating' },
        { label: 'Exterior Living', value: 'Saltwater infinity pool and submerged sunken lounge' },
        { label: 'Interior Climate', value: 'Variable Refrigerant Flow (VRF) with dehumidification control' }
      ]
    }
  ];

  // Global instances
  let lenisInstance = null;
  let isMobileDevice = false;

  // ==========================================================================
  // 2. INITIALIZATION
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    detectDevice();
    initLenis();
    initPreloader();
    initCustomCursor();
    initNavigation();
    initHeroAnimations();
    initScrollAnimations();
    initHorizontalScroll();
    initServicesHover();
    initTestimonialsSlider();
    initProjectFilter();
    initProjectModal();
    initContactForm();
    initBackToTop();
  });

  function detectDevice() {
    isMobileDevice = window.matchMedia('(hover: none) or (pointer: coarse) or (max-width: 900px)').matches;
  }

  // ==========================================================================
  // 3. LENIS SMOOTH SCROLLING SETUP
  // ==========================================================================
  function initLenis() {
    if (typeof Lenis === 'undefined') return;

    // Initialize Lenis
    lenisInstance = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
    });

    // Sync with GSAP ScrollTrigger if available
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      lenisInstance.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenisInstance.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    // Intercept internal anchor clicks for butter-smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            lenisInstance.scrollTo(targetEl, { offset: -40, duration: 1.4 });
          }
        }
      });
    });
  }

  // ==========================================================================
  // 4. PRELOADER & HERO REVEAL
  // ==========================================================================
  function initPreloader() {
    const preloader = document.getElementById('preloader');
    const counterEl = document.getElementById('preloaderCounter');
    const progressBar = document.getElementById('preloaderProgress');
    const heroTitle = document.querySelector('.hero-title');

    if (!preloader || !counterEl || !progressBar) return;

    let progress = 0;
    const intervalTime = 18;

    const timer = setInterval(() => {
      progress += Math.floor(Math.random() * 4) + 1;
      if (progress >= 100) {
        progress = 100;
        clearInterval(timer);
        finishPreloader();
      }
      const formatted = progress < 10 ? '0' + progress : progress.toString();
      counterEl.textContent = formatted;
      progressBar.style.width = progress + '%';
    }, intervalTime);

    function finishPreloader() {
      setTimeout(() => {
        preloader.classList.add('preloader-hidden');
        document.body.classList.remove('is-loading');

        // Reveal Hero Headline
        if (heroTitle) {
          heroTitle.classList.add('is-animated');
        }

        // Refresh GSAP ScrollTrigger to ensure all coordinates align
        if (typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.refresh();
        }
      }, 400);
    }
  }

  // ==========================================================================
  // 5. INTERACTIVE CURSOR (DESKTOP)
  // ==========================================================================
  function initCustomCursor() {
    if (isMobileDevice) return;

    const dot = document.getElementById('cursorDot');
    const follower = document.getElementById('cursorFollower');
    const label = document.getElementById('cursorLabel');

    if (!dot || !follower) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;
    let followerX = mouseX;
    let followerY = mouseY;
    let isVisible = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = '1';
        follower.style.opacity = '1';
      }
    });

    window.addEventListener('mouseleave', () => {
      isVisible = false;
      dot.style.opacity = '0';
      follower.style.opacity = '0';
    });

    function renderCursor() {
      dotX += (mouseX - dotX) * 0.9;
      dotY += (mouseY - dotY) * 0.9;
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;

      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;

      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Interactive Hover Listeners
    const interactiveElements = document.querySelectorAll(
      '[data-cursor], a, button, .project-card, .service-row, .h-slide'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        const cursorType = el.getAttribute('data-cursor');
        follower.className = 'cursor-follower';

        if (cursorType === 'view' || el.classList.contains('project-card') || el.classList.contains('h-slide')) {
          follower.classList.add('is-hovering-view');
          if (label) label.textContent = 'VIEW';
        } else if (cursorType === 'action') {
          follower.classList.add('is-hovering-action');
          if (label) label.textContent = '→';
        } else if (cursorType === 'link' || el.tagName === 'A' || el.tagName === 'BUTTON') {
          follower.classList.add('is-hovering-link');
          if (label) label.textContent = '';
        }
      });

      el.addEventListener('mouseleave', () => {
        follower.className = 'cursor-follower';
        if (label) label.textContent = '';
      });
    });
  }

  // ==========================================================================
  // 6. NAVIGATION & MOBILE MENU
  // ==========================================================================
  function initNavigation() {
    const header = document.getElementById('siteHeader');
    const toggleBtn = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    // Scrolled header state
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    });

    if (toggleBtn && mobileMenu) {
      function toggleMenu(forceClose = false) {
        const isOpen = forceClose ? false : !mobileMenu.classList.contains('is-open');
        mobileMenu.classList.toggle('is-open', isOpen);
        toggleBtn.classList.toggle('is-active', isOpen);
        toggleBtn.setAttribute('aria-expanded', isOpen.toString());
        document.body.classList.toggle('menu-open', isOpen);

        if (isOpen && lenisInstance) {
          lenisInstance.stop();
        } else if (lenisInstance) {
          lenisInstance.start();
        }
      }

      toggleBtn.addEventListener('click', () => toggleMenu());

      mobileLinks.forEach((link) => {
        link.addEventListener('click', () => {
          toggleMenu(true);
        });
      });

      // Escape key to close mobile menu
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
          toggleMenu(true);
        }
      });
    }
  }

  // ==========================================================================
  // 7. HERO SECTION ANIMATIONS
  // ==========================================================================
  function initHeroAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    // Parallax on hero background image
    gsap.to('.hero-bg-img', {
      yPercent: 18,
      scale: 1.14,
      ease: 'none',
      scrollTrigger: {
        trigger: '.section-hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    // Fade and elevate hero text on scroll
    gsap.to('.hero-content-wrapper', {
      y: -60,
      opacity: 0.25,
      ease: 'none',
      scrollTrigger: {
        trigger: '.section-hero',
        start: 'center top',
        end: 'bottom top',
        scrub: true,
      }
    });

    // Fade scroll indicator
    gsap.to('.hero-scroll-indicator', {
      opacity: 0,
      scale: 0.8,
      ease: 'none',
      scrollTrigger: {
        trigger: '.section-hero',
        start: 'top top',
        end: '30% top',
        scrub: true,
      }
    });
  }

  // ==========================================================================
  // 8. SCROLL ANIMATIONS (GSAP & SCROLLTRIGGER)
  // ==========================================================================
  function initScrollAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    // Featured Project: Expand from 82% to 100% width on scroll
    gsap.to('.featured-media-inner', {
      width: '100%',
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.section-featured-project',
        start: 'top 75%',
        end: 'center center',
        scrub: 1.2,
      }
    });

    gsap.to('.featured-hero-img', {
      scale: 1.0,
      ease: 'none',
      scrollTrigger: {
        trigger: '.section-featured-project',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      }
    });

    // Parallax on Intro Overlap Image
    gsap.to('.overlap-img', {
      yPercent: -12,
      ease: 'none',
      scrollTrigger: {
        trigger: '.intro-overlap-banner',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      }
    });

    // Process Timeline Vertical Progress Line Fill
    gsap.to('#timelineProgressFill', {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.timeline-container',
        start: 'top 65%',
        end: 'bottom 80%',
        scrub: true,
      }
    });

    // Fullscreen Monument Showcase Parallax
    gsap.to('.fullscreen-bg-img', {
      scale: 1.02,
      yPercent: 12,
      ease: 'none',
      scrollTrigger: {
        trigger: '.section-fullscreen-showcase',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      }
    });

    // Staggered Parallax on Huge Monument Typography
    document.querySelectorAll('.fullscreen-word-block').forEach((block) => {
      const speed = parseFloat(block.getAttribute('data-speed') || '0.3');
      gsap.to(block, {
        y: -100 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: '.section-fullscreen-showcase',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });
    });

    // Stats Section Count-Up Trigger
    ScrollTrigger.create({
      trigger: '.section-stats',
      start: 'top 80%',
      once: true,
      onEnter: () => animateStats(),
    });
  }

  // Count-up numbers function
  function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach((stat) => {
      const target = parseInt(stat.getAttribute('data-target') || '0', 10);
      let current = 0;
      const duration = 1800;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out expo
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        current = Math.floor(easeProgress * target);
        stat.textContent = current.toString();

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          stat.textContent = target.toString();
        }
      }
      requestAnimationFrame(updateCounter);
    });
  }

  // ==========================================================================
  // 9. HORIZONTAL PROJECT SECTION (PINNED VERTICAL-TO-HORIZONTAL SCROLL)
  // ==========================================================================
  function initHorizontalScroll() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const track = document.getElementById('horizontalTrack');
    const container = document.querySelector('.section-horizontal-scroll');

    if (!track || !container) return;

    // On mobile devices, let it scroll naturally with CSS overflow or flex swipe
    if (window.innerWidth < 900) {
      track.style.overflowX = 'auto';
      return;
    }

    function calculateScrollDistance() {
      return track.scrollWidth - window.innerWidth + 360;
    }

    const horizontalTween = gsap.to(track, {
      x: () => -calculateScrollDistance(),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${calculateScrollDistance()}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      }
    });

    window.addEventListener('resize', () => {
      ScrollTrigger.refresh();
    });
  }

  // ==========================================================================
  // 10. SERVICES SECTION (EXPANDABLE ROWS + HOVER FLOATING IMAGE PREVIEW)
  // ==========================================================================
  function initServicesHover() {
    const rows = document.querySelectorAll('.service-row');
    const preview = document.getElementById('servicePreview');
    const previewImg = document.getElementById('servicePreviewImg');

    if (!rows.length || !preview || !previewImg || isMobileDevice) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isTracking = false;

    window.addEventListener('mousemove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    });

    function updatePreviewPos() {
      if (isTracking) {
        currentX += (targetX - currentX) * 0.12;
        currentY += (targetY - currentY) * 0.12;
        preview.style.left = currentX + 'px';
        preview.style.top = currentY + 'px';
      }
      requestAnimationFrame(updatePreviewPos);
    }
    requestAnimationFrame(updatePreviewPos);

    rows.forEach((row) => {
      const bgUrl = row.getAttribute('data-bg');

      row.addEventListener('mouseenter', (e) => {
        if (bgUrl) {
          previewImg.src = bgUrl;
          targetX = e.clientX;
          targetY = e.clientY;
          currentX = e.clientX;
          currentY = e.clientY;
          isTracking = true;
          preview.classList.add('is-active');
        }
      });

      row.addEventListener('mouseleave', () => {
        isTracking = false;
        preview.classList.remove('is-active');
      });

      // Clicking row also smoothly scrolls to contact or initiates inquiry
      row.addEventListener('click', () => {
        const contactSection = document.getElementById('contact');
        if (contactSection && lenisInstance) {
          lenisInstance.scrollTo(contactSection, { offset: -40 });
        }
      });
    });
  }

  // ==========================================================================
  // 11. TESTIMONIALS SLIDER
  // ==========================================================================
  function initTestimonialsSlider() {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.t-dot');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');

    if (!cards.length) return;

    let currentIndex = 0;
    let autoSlideTimer = null;

    function goToSlide(index) {
      if (index < 0) {
        index = cards.length - 1;
      } else if (index >= cards.length) {
        index = 0;
      }
      currentIndex = index;

      cards.forEach((card, i) => {
        card.classList.toggle('active', i === currentIndex);
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
        resetAutoSlide();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
        resetAutoSlide();
      });
    }

    dots.forEach((dot) => {
      dot.addEventListener('click', function () {
        const idx = parseInt(this.getAttribute('data-index') || '0', 10);
        goToSlide(idx);
        resetAutoSlide();
      });
    });

    function startAutoSlide() {
      autoSlideTimer = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, 7000);
    }

    function resetAutoSlide() {
      clearInterval(autoSlideTimer);
      startAutoSlide();
    }

    startAutoSlide();
  }

  // ==========================================================================
  // 12. PROJECT FILTERING (SELECTED WORK)
  // ==========================================================================
  function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.projects-asymmetric-grid .project-card');

    if (!filterButtons.length || !cards.length) return;

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', function () {
        filterButtons.forEach((b) => b.classList.remove('active'));
        this.classList.add('active');

        const filter = this.getAttribute('data-filter');

        cards.forEach((card) => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
            card.style.opacity = '0';
            card.style.transform = 'translateY(15px)';
            setTimeout(() => {
              card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 50);
          } else {
            card.style.display = 'none';
          }
        });

        if (typeof ScrollTrigger !== 'undefined') {
          setTimeout(() => ScrollTrigger.refresh(), 300);
        }
      });
    });
  }

  // ==========================================================================
  // 13. PROJECT MODAL & INTERACTION
  // ==========================================================================
  function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.getElementById('modalCloseBtn');
    const backdrop = document.getElementById('modalBackdrop');
    const modalImg = document.getElementById('modalProjectImg');
    const modalTitle = document.getElementById('modalProjectTitle');
    const modalCategory = document.getElementById('modalProjectCategory');
    const modalLocation = document.getElementById('modalProjectLocation');
    const modalYear = document.getElementById('modalProjectYear');
    const modalArea = document.getElementById('modalProjectArea');
    const modalDesc = document.getElementById('modalProjectDesc');
    const modalInquireBtn = document.getElementById('modalInquireBtn');

    if (!modal) return;

    function openModalWithProject(project) {
      if (!project) return;
      modalImg.src = project.image;
      modalImg.alt = project.title;
      modalTitle.textContent = project.title;
      modalCategory.textContent = project.category.toUpperCase();
      modalLocation.textContent = project.location;
      modalYear.textContent = project.year;
      modalArea.textContent = project.area;
      modalDesc.textContent = project.description;

      modal.showModal();
      document.body.classList.add('modal-open');
      if (lenisInstance) lenisInstance.stop();
    }

    function closeModal() {
      modal.close();
      document.body.classList.remove('modal-open');
      if (lenisInstance) lenisInstance.start();
    }

    // Attach click handlers to project cards & triggers
    document.querySelectorAll('[data-project-index]').forEach((el) => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.getAttribute('data-project-index') || '0', 10);
        const project = PROJECTS_DATA[idx];
        if (project) openModalWithProject(project);
      });
    });

    document.querySelectorAll('.project-modal-trigger').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.getAttribute('data-project') || '0', 10);
        const project = PROJECTS_DATA[idx];
        if (project) openModalWithProject(project);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    if (modalInquireBtn) {
      modalInquireBtn.addEventListener('click', () => {
        closeModal();
      });
    }
  }

  // ==========================================================================
  // 14. CONTACT FORM (FRONTEND ONLY VALIDATION & SUCCESS FEEDBACK)
  // ==========================================================================
  function initContactForm() {
    const form = document.getElementById('contactForm');
    const successBox = document.getElementById('formSuccessBox');
    const resetBtn = document.getElementById('resetFormBtn');

    if (!form || !successBox) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const name = document.getElementById('userName');
      const email = document.getElementById('userEmail');
      const phone = document.getElementById('userPhone');
      const type = document.getElementById('projectType');
      const message = document.getElementById('userMessage');

      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const phoneError = document.getElementById('phoneError');
      const typeError = document.getElementById('typeError');
      const messageError = document.getElementById('messageError');

      // Clear previous errors
      [nameError, emailError, phoneError, typeError, messageError].forEach((err) => {
        if (err) {
          err.textContent = '';
          err.classList.remove('active');
        }
      });

      // Name validation
      if (!name.value.trim()) {
        nameError.textContent = 'Please enter your name.';
        nameError.classList.add('active');
        isValid = false;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
        emailError.textContent = 'Please provide a valid email address.';
        emailError.classList.add('active');
        isValid = false;
      }

      // Phone validation
      if (!phone.value.trim() || phone.value.trim().length < 6) {
        phoneError.textContent = 'Please provide a contact phone number.';
        phoneError.classList.add('active');
        isValid = false;
      }

      // Project type validation
      if (!type.value) {
        typeError.textContent = 'Please select a project typology.';
        typeError.classList.add('active');
        isValid = false;
      }

      // Message validation
      if (!message.value.trim()) {
        messageError.textContent = 'Please provide details about your spatial project.';
        messageError.classList.add('active');
        isValid = false;
      }

      if (isValid) {
        // Frontend demo submission response
        form.style.display = 'none';
        successBox.classList.add('is-visible');
        form.reset();
      }
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        successBox.classList.remove('is-visible');
        form.style.display = 'flex';
      });
    }
  }

  // ==========================================================================
  // 15. BACK TO TOP
  // ==========================================================================
  function initBackToTop() {
    const backBtn = document.getElementById('backToTop');
    if (!backBtn) return;

    backBtn.addEventListener('click', () => {
      if (lenisInstance) {
        lenisInstance.scrollTo(0, { duration: 1.6 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

})();
