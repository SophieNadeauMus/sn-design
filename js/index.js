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