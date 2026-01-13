const roles = [
    "Data Analyst",
    "Web Developer",
    "MLOps Enthusiast",
    
];

let index = 0;
let charIndex = 0;
const roleSpan = document.getElementById("role");

function typeRole() {
    if (charIndex < roles[index].length) {
        roleSpan.textContent += roles[index][charIndex];
        charIndex++;
        setTimeout(typeRole, 100);
    } else {
        setTimeout(eraseRole, 1500);
    }
}

function eraseRole() {
    if (charIndex > 0) {
        roleSpan.textContent = roles[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, 60);
    } else {
        index = (index + 1) % roles.length;
        setTimeout(typeRole, 300);
    }
}

typeRole();

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".section, .edu-card, .project-card, .skills-list li"
  );

  elements.forEach((el) => el.classList.add("scroll-animate"));

  function handleScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;

    
      if (elementTop < triggerBottom) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); 
});
