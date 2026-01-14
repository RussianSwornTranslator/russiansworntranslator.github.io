// Add smooth scroll behavior and enhanced interactions
document.addEventListener("DOMContentLoaded", function () {
  // Automatically update copyright year
  const yearElement = document.getElementById("copyright-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Add hover effects to service items
  const serviceItems = document.querySelectorAll(".services-list li");
  serviceItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.borderLeftColor = "#0056b3";
      this.style.borderLeftWidth = "6px";
    });

    item.addEventListener("mouseleave", function () {
      this.style.borderLeftWidth = "4px";
    });
  });

  // Add click effects to contact links
  const contactLinks = document.querySelectorAll(
    ".contact-link, .whatsapp-link"
  );
  contactLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Add ripple effect
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement("span");
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.1);
        transform: scale(0);
        animation: ripple 0.6s linear;
        left: ${e.clientX - rect.left - 10}px;
        top: ${e.clientY - rect.top - 10}px;
        width: 20px;
        height: 20px;
        pointer-events: none;
      `;

      this.style.position = "relative";
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});

// Add CSS for ripple animation
const style = document.createElement("style");
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
