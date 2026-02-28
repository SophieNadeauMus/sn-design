// Sections réutilisables pour le header et le footer
class TemplateHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <a href="index.html" class="logo-animation"></a>
    <nav>
      <a href="index.html" id="btn-accueil" class="btn"></a>
      <a href="projets.html" id="btn-projets" class="btn"></a>
      <a href="a-propos.html" id="btn-a-propos" class="btn"></a>
      <a href="contact.html" id="btn-contact" class="btn"></a>
    </nav>
    <a class="menu-icon">
      <i class="fa-solid fa-bars"></i>
    </a>
    `;

    // Ouverture du menu mobile
    const menuIcon = this.querySelector('.menu-icon');
    const nav = this.querySelector('nav');

    menuIcon.addEventListener('click', () => {
      nav.classList.toggle('active');
      document.body.classList.toggle('menu-ouvert');
    });

    // Fermeture du menu mobile lorsque l'on clique sur un lien
    const liens = this.querySelectorAll("nav a");

    liens.forEach(lien => {
      lien.addEventListener("click", () => {
        nav.classList.remove("active");
        document.body.classList.remove("menu-ouvert");
      });
    });
  }
}

class TemplateFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="footer-contenu">
      <div class="logo-container">
        <a href="index.html" class="logo-animation"></a>
      </div>
      <div id="btn-connecte"></div>  
      <div class="reseaux-sociaux">
        <a href="#" id="icone-linkedin"></a>
        <a href="#" id="icone-github"></a>
        <a href="#" id="icone-behance"></a>
      </div>
    </div>
    <p>© 2026 SN Design. Tous droits réservés.</p>
    `;
  }
}

// Section pour afficher les projets (utilisée sur la page d'accueil et la page projets)
class TemplateProjets extends HTMLElement {
  connectedCallback() {

    // Nombre de projets à afficher (si attribut présent)
    const limite = this.getAttribute("limite");

    // Si limite existe -> on coupe le tableau
    const projetsAAfficher = limite 
      ? projetsData.slice(0, limite) 
      : projetsData;

    this.innerHTML = `
    <section class="projets">
      ${projetsAAfficher.map(projet => `
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="${projet.image}" alt="${projet.titre}">
          </div>
          <div class="flip-card-back">
            <h3>${projet.titre}</h3>
            <p class="projet-desc">${projet.description}</p>
            <div> 
              <p>${projet.logiciels}</p>
              <p>${projet.date}</p>
            </div>
          </div>
        </div>
      </div>
      `).join('')}
    </section>
    `;
  }
}

customElements.define('template-header', TemplateHeader);
customElements.define('template-footer', TemplateFooter);
customElements.define('template-projets', TemplateProjets);