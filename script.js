// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const toast = document.getElementById('toast');
const contactForm = document.getElementById('contactForm');
const copyBankDetailsBtn = document.getElementById('copyBankDetails');
const amountBtns = document.querySelectorAll('.amount-btn');
const customDonateBtn = document.getElementById('customDonateBtn');
const customAmountInput = document.getElementById('customAmount');
const faqQuestions = document.querySelectorAll('.faq-question');

// Dark Mode Toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
  themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
});

// Load saved theme preference
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
  themeToggle.textContent = '☀️';
}

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});

// Show Toast Notification
function showToast(message, duration = 3000) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

// Donation Amount Selection
amountBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    amountBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    customAmountInput.value = '';
    showToast(`Selected ₹${btn.dataset.amount} donation`);
  });
});

// Custom Donation
customDonateBtn.addEventListener('click', () => {
  const amount = customAmountInput.value;
  if (!amount || amount <= 0) {
    showToast('Please enter a valid amount');
    return;
  }
  amountBtns.forEach(b => b.classList.remove('active'));
  showToast(`₹${amount} donation initiated!`);
  // Here you would typically redirect to payment gateway
});

// Copy Bank Details
copyBankDetailsBtn.addEventListener('click', () => {
  const bankDetails = `
Account Name: BALNE SRIKANTH
Account Number: 50100466807881
SWIFT / BIC Code:: HDFCINBB
Bank Name: HDFC Bank Limited.
  `.trim();
  
  navigator.clipboard.writeText(bankDetails).then(() => {
    showToast('Bank details copied to clipboard!');
    copyBankDetailsBtn.textContent = '✓ Copied';
    setTimeout(() => {
      copyBankDetailsBtn.textContent = 'Copy Details';
    }, 2000);
  }).catch(() => {
    showToast('Failed to copy bank details');
  });
});

// FAQ Accordion
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answerId = question.getAttribute('aria-controls');
    const answer = document.getElementById(answerId);
    const isExpanded = question.getAttribute('aria-expanded') === 'true';
    
    // Close all other FAQs
    faqQuestions.forEach(q => {
      q.setAttribute('aria-expanded', 'false');
      const id = q.getAttribute('aria-controls');
      document.getElementById(id).hidden = true;
    });
    
    // Toggle current FAQ
    if (!isExpanded) {
      question.setAttribute('aria-expanded', 'true');
      answer.hidden = false;
    }
  });
});

// Contact Form
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formStatus = document.getElementById('formStatus');
  
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };
  
  // Validate form
  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    formStatus.className = 'error';
    formStatus.textContent = 'Please fill in all fields';
    return;
  }
  
  // Simulate form submission
  formStatus.className = 'success';
  formStatus.textContent = 'Message sent successfully! We\'ll get back to you soon.';
  contactForm.reset();
  
  setTimeout(() => {
    formStatus.textContent = '';
  }, 5000);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Animate counters on scroll
function animateCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  const observerOptions = {
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalValue = parseInt(target.getAttribute('data-target'));
        animateValue(target, 0, finalValue, 2000);
        observer.unobserve(target);
      }
    });
  }, observerOptions);
  
  statNumbers.forEach(num => observer.observe(num));
}

function animateValue(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    element.textContent = value.toLocaleString();
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Initialize counters when page loads
window.addEventListener('load', () => {
  animateCounters();
});

// Keyboard navigation for FAQ
faqQuestions.forEach(question => {
  question.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      question.click();
    }
  });
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'slideInUp 0.6s ease';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.donation-card, .value-item, .info-card').forEach(el => {
  observer.observe(el);
});

// Prevent form submission on Enter in custom amount
customAmountInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    customDonateBtn.click();
  }
});

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Update animations based on preference
if (prefersReducedMotion) {
  document.documentElement.style.scrollBehavior = 'auto';
}
