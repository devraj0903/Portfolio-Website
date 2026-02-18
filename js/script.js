// ===== Typing Animation =====

const texts = [
    "Student Developer",
    "Problem Solver",
    "Curious Learner"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpan = document.getElementById("typing");

function typeEffect() {
    const currentText = texts[index];

    if (!isDeleting) {
        typingSpan.textContent = currentText.slice(0, ++charIndex);
        if (charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 1200);
        }
    } else {
        typingSpan.textContent = currentText.slice(0, --charIndex);
        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 80);
}

document.addEventListener("DOMContentLoaded", typeEffect);


// ===== Contact Form =====

const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });

            if (response.ok) {
                alert("✅ Message sent successfully!");
                form.reset();
            } else {
                alert("❌ Something went wrong.");
            }
        } catch (error) {
            alert("⚠️ Network error.");
        }
    });
}


// ===== Active Navbar Highlight =====

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
