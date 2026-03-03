var scrollAnimation = lottie.loadAnimation({
  container: document.getElementById('scroll-animation'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'lottie/scroll-anim.json',
});

scrollAnimation.addEventListener('DOMLoaded', function () {

  var totalFrames = scrollAnimation.totalFrames;

  window.addEventListener('scroll', function () {
    
    var scrollTop = window.scrollY;
    var docHeight = document.body.scrollHeight - window.innerHeight;
    var scrollPercent = scrollTop / docHeight;

    var frame = totalFrames * scrollPercent;

    scrollAnimation.goToAndStop(frame, true);
  });

});