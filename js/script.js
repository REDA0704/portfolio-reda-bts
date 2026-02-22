// FILTRE PROJETS
function filtrer(type) {
    const projets = document.querySelectorAll('.projet');

    projets.forEach(projet => {
        if (type === "all") {
            projet.style.display = "block";
        } else {
            if (projet.classList.contains(type)) {
                projet.style.display = "block";
            } else {
                projet.style.display = "none";
            }
        }
    });
}

// MODE SOMBRE
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// ANIMATION AU SCROLL
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// COMPTEUR ANIMÉ
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
}

// Scroll fluide vers le profil
function scrollProfil() {
    document.getElementById("apropos").scrollIntoView({
        behavior: "smooth"
    });
});