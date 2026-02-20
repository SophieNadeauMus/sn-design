// Animation du logo
var logoAnimation = lottie.loadAnimation({
  container: document.getElementById('logo-animation'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'lottie/logo-animation.json',
});

// Animation des boutons
var btnAnimation = lottie.loadAnimation({
  container: document.getElementById('btn-accueil'),
  renderer: 'svg',
  loop: true,
  autoplay: false, 
  path: 'lottie/btn-accueil-hover.json',
});
// Animation du bouton lorsque la souris hover dessus
document.getElementById('btn-accueil').addEventListener('mouseenter', function() {
  btnAnimation.play();
});
document.getElementById('btn-accueil').addEventListener('mouseleave', function() {
  btnAnimation.stop();
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

// Animation de la zone hero
var heroAnimation = lottie.loadAnimation({
  container: document.getElementById('hero-animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'lottie/hero-animation.json',
});