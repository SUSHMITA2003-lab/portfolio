/* ==========================================================================
   SUSHMITHA S — DEVELOPER PORTFOLIO JAVASCRIPT
   Interactivity, Theme Switcher, Modals, Filtering, Form & Animations
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initTypingEffect();
  initProjectFilters();
  initProjectModals();
  initResumeModal();
  initContactForm();
});

/* --------------------------------------------------------------------------
   1. Theme Management (Dark / Light Mode)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // Read stored preference or system default
  const savedTheme = localStorage.getItem('sushmitha-portfolio-theme') || 'dark';
  htmlElement.setAttribute('data-theme', savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('sushmitha-portfolio-theme', newTheme);
    
    showToast(`Switched to ${newTheme.toUpperCase()} mode`, 'info');
  });
}

/* --------------------------------------------------------------------------
   2. Navigation & Mobile Menu & Active State Scroll
   -------------------------------------------------------------------------- */
function initNavigation() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Mobile menu toggle
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileMenuBtn.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });
  }

  // Close menu on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        if (mobileMenuBtn) {
          mobileMenuBtn.querySelector('i').className = 'fa-solid fa-bars';
        }
      }
    });
  });

  // Intersection Observer for Active Navigation Highlight
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        links.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* --------------------------------------------------------------------------
   3. Hero Typing Subtitle Effect
   -------------------------------------------------------------------------- */
function initTypingEffect() {
  const typedTextSpan = document.getElementById('typed-text');
  if (!typedTextSpan) return;

  const roles = [
    'Java Full Stack Developer',
    'Spring Boot & REST API Engineer',
    'React.js Frontend Developer',
    'SQL Database Architect',
    'LeetCode 150+ Problem Solver'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typedTextSpan.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typedTextSpan.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 2000; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  setTimeout(type, 1000);
}

/* --------------------------------------------------------------------------
   4. Project Filtering
   -------------------------------------------------------------------------- */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. Project Modals & Architecture Showcase
   -------------------------------------------------------------------------- */
const projectDetailsData = {
  'food-delivery': {
    title: 'Food Delivery System',
    subtitle: 'Java | Spring Boot | React.js | MySQL | REST APIs',
    badge: 'Full Stack Web Application',
    icon: 'fa-utensils',
    description: `A complete full-stack food delivery application built using Java Spring Boot on the backend and React.js on the frontend. The system provides seamless user management, restaurant food catalog browsing, real-time cart manipulation, secure order processing, and administrative controls.`,
    features: [
      '<strong>User Authentication & Roles:</strong> Secure user login and role-based access for Customers, Restaurant Owners, and Admins.',
      '<strong>Restaurant & Menu Management:</strong> Dynamic display of restaurants, category filters, food item customization, and pricing.',
      '<strong>Shopping Cart & Checkout:</strong> Interactive cart state management using React hooks, item quantifiers, and automated total calculation.',
      '<strong>Order Placement & Status Lifecycle:</strong> Order dispatching to MySQL database with live status transitions (Placed → Preparing → Out for Delivery → Delivered).',
      '<strong>RESTful API Architecture:</strong> Spring Boot REST Controllers handling CRUD operations for orders, menus, users, and payments.'
    ],
    techDetails: [
      { label: 'Backend Framework', value: 'Java 17, Spring Boot, Spring Data JPA' },
      { label: 'Frontend UI', value: 'React.js, Axios, React Router, CSS3' },
      { label: 'Database', value: 'MySQL (Relational Schema, Foreign Keys, Indexes)' },
      { label: 'API Testing', value: 'Postman Collection with full REST endpoint validation' }
    ]
  },
  'cab-booking': {
    title: 'Cab Booking System',
    subtitle: 'Java | Spring Boot | React.js | MySQL | REST APIs',
    badge: 'Full Stack Web Application',
    icon: 'fa-taxi',
    description: `A scalable ride-hailing web platform enabling passengers to request cabs, select pickup/drop destinations, estimate fares, and track ride statuses. Drivers can manage availability and accept ride assignments.`,
    features: [
      '<strong>Ride Request & Matching:</strong> Instant booking engine matching customer ride requests with nearby available drivers.',
      '<strong>Dynamic Fare Estimation:</strong> Automated fare calculation algorithm based on trip distance, ride type (Standard, Premium), and surge logic.',
      '<strong>Driver & Passenger Portals:</strong> Dual dashboard interfaces for passengers to manage ride history and drivers to manage availability.',
      '<strong>Backend Microservices / Controllers:</strong> Spring Boot endpoints serving ride lifecycle events, driver queues, and payment logs.',
      '<strong>Relational MySQL Storage:</strong> Structured tables for Users, Drivers, Rides, Vehicles, Payments, and Trip Ratings.'
    ],
    techDetails: [
      { label: 'Backend Stack', value: 'Java, Spring Boot, REST APIs, Lombok' },
      { label: 'Frontend Stack', value: 'React.js, HTML5, CSS3, JavaScript' },
      { label: 'Database Architecture', value: 'MySQL Relational DB with normalized schemas' },
      { label: 'API Security & Integration', value: 'REST Controllers, Axios HTTP client, Postman' }
    ]
  },
  'ecommerce-db': {
    title: 'E-Commerce Database Management System',
    subtitle: 'SQL | MySQL | Database Architecture & Optimization',
    badge: 'Database Architecture Project',
    icon: 'fa-database',
    description: `A comprehensive relational database design engineered to manage core operations of an online e-commerce ecosystem including customer profiles, product catalogs, inventory management, shopping carts, orders, and payment transactions.`,
    features: [
      '<strong>Normalized Schema Design:</strong> 3NF relational database schema eliminating data redundancy and enforcing strict foreign key constraints.',
      '<strong>Optimized Joins & Stored Procedures:</strong> Built complex SQL joins, views, and stored procedures for fast order aggregation and inventory updates.',
      '<strong>Data Integrity & Constraints:</strong> Enforced primary keys, foreign key cascading, unique indices, and check constraints.',
      '<strong>Sales & Analytics Reporting:</strong> Wrote analytical queries for top-selling products, user order frequency, and revenue reporting.'
    ],
    techDetails: [
      { label: 'Database Management', value: 'MySQL Server / MySQL Workbench' },
      { label: 'Key SQL Features', value: 'Stored Procedures, Triggers, Views, Indexes, Transactions' },
      { label: 'Core Entities', value: 'Users, Products, Categories, Orders, OrderItems, Cart, Payments' }
    ]
  }
};

function initProjectModals() {
  const modalOverlay = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalBody = document.getElementById('modal-body');
  const detailButtons = document.querySelectorAll('.btn-project-detail');

  detailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      const data = projectDetailsData[projectId];

      if (data) {
        modalBody.innerHTML = `
          <div class="modal-project-header">
            <div class="modal-icon-badge">
              <i class="fa-solid ${data.icon}"></i>
            </div>
            <div>
              <span class="section-tag">${data.badge}</span>
              <h2>${data.title}</h2>
              <p class="modal-subtitle">${data.subtitle}</p>
            </div>
          </div>
          
          <div class="modal-project-content">
            <h3>Overview</h3>
            <p class="modal-desc">${data.description}</p>

            <h3>Key Features & Highlights</h3>
            <ul class="modal-feature-list">
              ${data.features.map(f => `<li>${f}</li>`).join('')}
            </ul>

            <h3>Technical Architecture & Specs</h3>
            <div class="modal-specs-grid">
              ${data.techDetails.map(t => `
                <div class="spec-card">
                  <span class="spec-label">${t.label}</span>
                  <span class="spec-value">${t.value}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}

/* --------------------------------------------------------------------------
   6. Resume Modal & Quick View
   -------------------------------------------------------------------------- */
function initResumeModal() {
  const resumeModal = document.getElementById('resume-modal');
  const resumeCloseBtn = document.getElementById('resume-modal-close');
  const openResumeBtn = document.getElementById('btn-open-resume');
  const resumeContentView = document.getElementById('resume-content-view');

  if (openResumeBtn && resumeModal) {
    openResumeBtn.addEventListener('click', () => {
      resumeContentView.innerHTML = `
        <div class="resume-view-grid">
          <div class="resume-block">
            <h3><i class="fa-solid fa-user text-accent"></i> Personal Details</h3>
            <p><strong>Name:</strong> Sushmitha S</p>
            <p><strong>Email:</strong> sushmi0903@gmail.com</p>
            <p><strong>Phone:</strong> +91 7510104667</p>
            <p><strong>LinkedIn:</strong> linkedin.com/in/sushmithas2003</p>
          </div>

          <div class="resume-block">
            <h3><i class="fa-solid fa-graduation-cap text-accent"></i> Education</h3>
            <p><strong>B.E. Computer Science & Engineering</strong> — EASA College of Engineering (2022–2026) | CGPA: 9.0</p>
            <p><strong>Higher Secondary (Biology Science)</strong> — CA Higher Secondary School (2019–2021) | 92%</p>
          </div>

          <div class="resume-block">
            <h3><i class="fa-solid fa-briefcase text-accent"></i> Experience & Training</h3>
            <p><strong>Java Full Stack Developer Intern</strong> — BESANT TECHNOLOGY, Chennai (May 2026 – Present)</p>
            <p><strong>Java Full Stack Training</strong> — AISECT Powered by Capgemini (Dec 2025 – May 2026)</p>
          </div>

          <div class="resume-block">
            <h3><i class="fa-solid fa-code text-accent"></i> Technical Stack</h3>
            <p><strong>Languages:</strong> Java, JavaScript, Python, SQL, HTML, CSS</p>
            <p><strong>Frameworks & Tools:</strong> Spring Boot, React.js, REST APIs, MySQL, Git, GitHub, Figma, Postman</p>
            <p><strong>Problem Solving:</strong> 150+ LeetCode Solved</p>
          </div>
        </div>
      `;

      resumeModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  const closeResumeModal = () => {
    resumeModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  if (resumeCloseBtn) resumeCloseBtn.addEventListener('click', closeResumeModal);
  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) closeResumeModal();
    });
  }
}

/* --------------------------------------------------------------------------
   7. Contact Form Handling
   -------------------------------------------------------------------------- */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('btn-submit-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending...`;

      setTimeout(() => {
        showToast(`Thank you, ${name}! Your message has been sent successfully.`, 'success');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Send Message`;
      }, 1200);
    });
  }
}

/* --------------------------------------------------------------------------
   8. Helper Toast Notifications
   -------------------------------------------------------------------------- */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const iconClass = type === 'success' ? 'fa-circle-check text-green' : 'fa-circle-info text-accent';
  
  toast.innerHTML = `
    <i class="fa-solid ${iconClass}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
