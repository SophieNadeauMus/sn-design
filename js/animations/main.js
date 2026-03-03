/***** Animation du logo *****/
const logoAnimation = [];

document.querySelectorAll('.logo-animation').forEach(conteneur => {
  const anim = lottie.loadAnimation({
    container: conteneur,
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'lottie/logo-animation.json'
  });
  logoAnimation.push(anim);
});

/*****  Animation des boutons *****/
var btnAccueil = lottie.loadAnimation({
  container: document.getElementById('btn-accueil'),
  renderer: 'svg',
  loop: true,
  autoplay: false, 
  path: 'lottie/btn-accueil-hover.json',
});
// Animation du bouton lorsque la souris hover dessus
document.getElementById('btn-accueil').addEventListener('mouseenter', function() {
  btnAccueil.play();
});
document.getElementById('btn-accueil').addEventListener('mouseleave', function() {
  btnAccueil.stop();
});

var btnProjets = lottie.loadAnimation({
  container: document.getElementById('btn-projets'),
  renderer: 'svg',
  loop: true,
  autoplay: false, 
  path: 'lottie/btn-projets-hover.json',
});
// Animation du bouton lorsque la souris hover dessus
document.getElementById('btn-projets').addEventListener('mouseenter', function() {
  btnProjets.play();
});
document.getElementById('btn-projets').addEventListener('mouseleave', function() {
  btnProjets.stop();
});

var btnAPropos = lottie.loadAnimation({
  container: document.getElementById('btn-a-propos'),
  renderer: 'svg',
  loop: true,
  autoplay: false, 
  path: 'lottie/btn-a-propos-hover.json',
});
// Animation du bouton lorsque la souris hover dessus
document.getElementById('btn-a-propos').addEventListener('mouseenter', function() {
  btnAPropos.play();
});
document.getElementById('btn-a-propos').addEventListener('mouseleave', function() {
  btnAPropos.stop();
});

var btnContact = lottie.loadAnimation({
  container: document.getElementById('btn-contact'),
  renderer: 'svg',
  loop: true,
  autoplay: false, 
  path: 'lottie/btn-contact-hover.json',
});
// Animation du bouton lorsque la souris hover dessus
document.getElementById('btn-contact').addEventListener('mouseenter', function() {
  btnContact.play();
});
document.getElementById('btn-contact').addEventListener('mouseleave', function() {
  btnContact.stop();
});

/***** Animation du bouton "Restons connectés!" *****/
var btnConnecte = lottie.loadAnimation({
  container: document.getElementById('btn-connecte'),
  renderer: 'svg',
  loop: true,
  autoplay: true, 
  path: 'lottie/btn-connecte.json',
});
btnConnecte.setSpeed(0.5); // Ralentit l'animation

/***** Animation des icônes de réseaux sociaux *****/
const icones = [
  lottie.loadAnimation({
    container: document.getElementById('icone-linkedin'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'lottie/icone-linkedin.json',
  }),
  lottie.loadAnimation({
    container: document.getElementById('icone-github'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'lottie/icone-github.json',
  }),
  lottie.loadAnimation({
    container: document.getElementById('icone-behance'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'lottie/icone-behance.json',
  }),
];
setInterval(() => {
  icones.forEach(icone => {
    icone.goToAndPlay(0, true);
  });
}, 5000); // Rejoue les animations toutes les 5 secondes