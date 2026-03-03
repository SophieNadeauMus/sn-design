/****** Animation de la section hero *****/
var heroAnimation = lottie.loadAnimation({
  container: document.getElementById('hero-animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'lottie/hero-animation.json',
});

// Animation du bouton "En voir plus" qui amène à la section projets
var btnVoirPlus = lottie.loadAnimation({
  container: document.getElementById('btn-voir-plus'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'lottie/btn-voir-plus.json',
});
document.getElementById('btn-voir-plus').addEventListener('mouseenter', function() {
  btnVoirPlus.play();
});
document.getElementById('btn-voir-plus').addEventListener('mouseleave', function() {
  btnVoirPlus.stop();
});