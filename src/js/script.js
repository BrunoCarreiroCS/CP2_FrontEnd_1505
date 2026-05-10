const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const contactForm = document.querySelector("#contact-form");
const feedback = document.querySelector(".form-feedback");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (contactForm && feedback) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const nome = String(formData.get("nome") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const descricao = String(formData.get("descricao") || "").trim();

    if (!nome || !email || !descricao) {
      feedback.textContent = "Preencha todos os campos para enviar sua mensagem.";
      feedback.style.color = "#f15f3b";
      return;
    }

    feedback.textContent = `${nome}, recebemos sua mensagem. A equipe VoltRide responde em ate 1 dia util.`;
    feedback.style.color = "#007c72";
    contactForm.reset();
  });
}
