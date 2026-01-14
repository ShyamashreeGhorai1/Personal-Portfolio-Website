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

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible"); // reset animation
      }
    });
  },
  {
    threshold: 0.2
  }
);

document.querySelectorAll(".scroll-animate").forEach(el => {
  observer.observe(el);
});
