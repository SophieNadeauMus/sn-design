var scrollAnimation = lottie.loadAnimation({
  container: document.getElementById('scroll-animation'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'lottie/scroll-anim.json',
});

// Attendre que l'animation soit chargée dans le navigateur
scrollAnimation.addEventListener('DOMLoaded', function () {

  // Calculer le nombre total d'images (frames) de l'animation
  var totalImages = scrollAnimation.totalFrames;

  window.addEventListener('scroll', function () {
    // Position actuelle du défilement depuis le haut de la page
    var positionScroll = window.scrollY;
    // Hauteur totale de défilement de la page (hauteur de la page - hauteur de la fenêtre)
    var hauteurDoc = document.body.scrollHeight - window.innerHeight; 
    // Progression du défilement de la page parcouru
    // Math.max(0, ...) pour éviter les valeurs négatives
    var progression = Math.max(0, positionScroll / hauteurDoc);

    // Image correspondante à la progression du défilement
    var imageCourante = totalImages * progression;

    // Arrêter l'animation sur l'image calculée
    scrollAnimation.goToAndStop(imageCourante, true);
  });

});