// ===============================
// DOM Elements
// ===============================
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const toast = document.getElementById("toast");
const contactForm = document.getElementById("contactForm");
const copyBankDetailsBtn = document.getElementById("copyBankDetails");
const amountBtns = document.querySelectorAll(".amount-btn");
const customDonateBtn = document.getElementById("customDonateBtn");
const customAmountInput = document.getElementById("customAmount");
const faqQuestions = document.querySelectorAll(".faq-question");

// ===============================
// Toast
// ===============================
function showToast(message, duration = 3000) {
  if (!toast) return alert(message);

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, duration);
}

// ===============================
// Dark Mode
// ===============================
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark =
      document.body.classList.contains("dark-mode");

    localStorage.setItem("darkMode", isDark);

    themeToggle.textContent = isDark ? "☀️" : "🌙";
  });

  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
  }
}

// ===============================
// Mobile Menu
// ===============================
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
}

// ===============================
// Donation Amount Buttons
// ===============================
amountBtns.forEach(btn => {
  btn.addEventListener("click", () => {

    amountBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    if (customAmountInput) {
      customAmountInput.value = "";
    }

    showToast(`Selected ₹${btn.dataset.amount}`);
  });
});

// ===============================
// Custom Donation
// ===============================
if (customDonateBtn && customAmountInput) {

  customDonateBtn.addEventListener("click", () => {

    const amount = customAmountInput.value;

    if (!amount || amount <= 0) {
      showToast("Please enter a valid amount.");
      return;
    }

    amountBtns.forEach(b => b.classList.remove("active"));

    showToast(`₹${amount} donation selected.`);
  });

  customAmountInput.addEventListener("keypress", e => {

    if (e.key === "Enter") {
      e.preventDefault();
      customDonateBtn.click();
    }

  });

}

// ===============================
// COPY BANK DETAILS
// ===============================
if (copyBankDetailsBtn) {

  copyBankDetailsBtn.addEventListener("click", async () => {

    const bankDetails = `
Helping Hands

Account Name : BALNE SRIKANTH
Bank Name    : HDFC Bank Limited
Account No.  : 50100466807881
SWIFT / BIC  : HDFCINBB
Branch Name  : RAMANTHAPUR
`.trim();

    try {

      await navigator.clipboard.writeText(bankDetails);

      showToast("Bank details copied!");

      copyBankDetailsBtn.textContent = "✓ Copied";

      setTimeout(() => {
        copyBankDetailsBtn.textContent = "Copy Bank Details";
      }, 2000);

    } catch (err) {

      // Older browser fallback
      const textarea = document.createElement("textarea");
      textarea.value = bankDetails;

      document.body.appendChild(textarea);

      textarea.select();

      try {
        document.execCommand("copy");

        showToast("Bank details copied!");

      } catch {

        showToast("Unable to copy.");

      }

      document.body.removeChild(textarea);
    }

  });

}

// ===============================
// FAQ
// ===============================
faqQuestions.forEach(question => {

  question.addEventListener("click", () => {

    const answerId = question.getAttribute("aria-controls");
    const answer = document.getElementById(answerId);

    const expanded =
      question.getAttribute("aria-expanded") === "true";

    faqQuestions.forEach(q => {

      q.setAttribute("aria-expanded", "false");

      const id = q.getAttribute("aria-controls");

      const a = document.getElementById(id);

      if (a) a.hidden = true;

    });

    if (!expanded) {

      question.setAttribute("aria-expanded", "true");

      if (answer) answer.hidden = false;

    }

  });

});

// ===============================
// Contact Form
// ===============================
if (contactForm) {

  contactForm.addEventListener("submit", e => {

    e.preventDefault();

    const formStatus =
      document.getElementById("formStatus");

    const name =
      document.getElementById("name").value.trim();

    const email =
      document.getElementById("email").value.trim();

    const subject =
      document.getElementById("subject").value.trim();

    const message =
      document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {

      formStatus.className = "error";
      formStatus.textContent =
        "Please fill in all fields.";

      return;
    }

    formStatus.className = "success";
    formStatus.textContent =
      "Message sent successfully!";

    contactForm.reset();

    setTimeout(() => {
      formStatus.textContent = "";
    }, 5000);

  });

}

// ===============================
// Smooth Scroll
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    const href = this.getAttribute("href");

    if (href !== "#" && document.querySelector(href)) {

      e.preventDefault();

      document.querySelector(href).scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});
