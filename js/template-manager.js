// Sections réutilisables pour le header et le footer
class TemplateHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div id="logo-animation"></div>
    <nav>
      <a href="index.html" id="btn-accueil" class="btn"></a>
      <a href="projets.html" id="btn-projets" class="btn"></a>
      <a href="a-propos.html" id="btn-a-propos" class="btn"></a>
      <a href="contact.html" id="btn-contact" class="btn"></a>
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