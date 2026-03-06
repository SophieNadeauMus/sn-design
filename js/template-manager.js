// Sections réutilisables pour le header et le footer
class TemplateHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <a href="index.html" class="logo-animation" aria-label="Logo de SN Design"></a>
    <nav>
      <a href="index.html" id="btn-accueil" class="btn" aria-label="Bouton Accueil"></a>
      <a href="projets.html" id="btn-projets" class="btn" aria-label="Bouton Projets"></a>
      <a href="a-propos.html" id="btn-a-propos" class="btn" aria-label="Bouton À propos"></a>
      <a href="contact.html" id="btn-contact" class="btn" aria-label="Bouton Contact"></a>
    </nav>
    <button class="menu-toggle" aria-label="Menu" aria-expanded="false">
      <span class="line top"></span>
      <span class="line middle"></span>
      <span class="line bottom"></span>
    </button>
    `;

    /***** MENU MOBILE *****/ 
    const menuIcon = this.querySelector('.menu-toggle');
    const nav = this.querySelector('nav');

    menuIcon.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('active');
      menuIcon.classList.toggle('active'); // Pour l'animation de l'icône
      menuIcon.setAttribute('aria-expanded', isOpen);
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

    // Calcul dynamique de la hauteur du header pour éviter que le contenu soit caché derrière
    this.updateHeaderHeight();
    window.addEventListener('resize', () => this.updateHeaderHeight());
  }

  // Met à jour la variable CSS --header-height avec la hauteur actuelle du header
  updateHeaderHeight() {
    const height = this.offsetHeight;
    document.documentElement
      .style
      .setProperty('--header-height', `${height}px`);
  }
}

class TemplateFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="footer-contenu">
      <div class="logo-container">
        <a href="index.html" class="logo-animation" aria-label="Logo de SN Design"></a>
      </div>
      <a href="contact.html" id="btn-connecte" aria-label="Bouton Restons connectés"></a>
      <div class="reseaux-sociaux">
        <a href="https://www.linkedin.com/in/sophie-nadeau-b6724916a/" id="icone-linkedin" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"></a>
        <a href="https://github.com/SophieNadeauMus" id="icone-github" aria-label="GitHub" target="_blank" rel="noopener noreferrer"></a>
        <a href="https://www.behance.net/sophienadeau1" id="icone-behance" aria-label="Behance" target="_blank" rel="noopener noreferrer"></a>
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
      ${projetsAAfficher.map(projet => `
      <div class="flip-card" tabindex="0">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="${projet.image}" width="300" height="300" alt="${projet.titre}">
          </div>
          <div class="flip-card-back">
            <h4>${projet.titre}</h4>
            <p class="projet-desc">${projet.description}</p>
            <div class="projet-infos">
              <p>Type de projet : ${projet.type}</p> 
              <p>Logiciels utilisés : ${projet.logiciels}</p>
              <p>Date de réalisation : ${projet.date}</p>
            </div>
          </div>
        </div>
      </div>
      `).join('')}
    `;
  }
}

customElements.define('template-header', TemplateHeader);
customElements.define('template-footer', TemplateFooter);
customElements.define('template-projets', TemplateProjets);