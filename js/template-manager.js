// Sections réutilisables pour le header et le footer
class TemplateHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <figure class="logo">

    </figure>
    <nav>
      <a href="index.html">Accueil</a>
      <a href="projets.html">Projets</a>
      <a href="a-propos.html">À propos</a>
      <a href="contact.html">Contact</a>
    </nav>
    `;
  }
}

class TemplateFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="footer-contenu">
      <figure></figure>
      <button>Restons connectés!</button>
      <div class="reseaux-sociaux">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    </div>
    <p>© 2026 SN Design. Tous droits réservés.</p>
    `;
  }
}

customElements.define('template-header', TemplateHeader);
customElements.define('template-footer', TemplateFooter);