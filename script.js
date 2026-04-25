// Smooth scroll to contact
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}


// Theme Toggle (PASTE HERE)
function toggleTheme() {
    document.body.classList.toggle("light-mode");

    let btn = document.querySelector(".theme-btn");

    if (document.body.classList.contains("light-mode")) {
        btn.textContent = "☀️";
    } else {
        btn.textContent = "🌙";
    }
}


// Contact form
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("formMessage").innerText =
        "Message sent successfully!";
});
