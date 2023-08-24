// Using simple JavaScript for animations
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const distanceToTop = section.getBoundingClientRect().top;
        if (distanceToTop < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
});
