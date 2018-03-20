$(function() {
  const carouselContainer = $('.works__carousel .works__slides');
  const carouselArea = $('.works__main');
  const btnLeft = $('#btn-left');
  const btnRight = $('#btn-right');
  let direction = '';

  function moveFirstSlide() {
    const firstItem = carouselContainer.find('.works__container:first');
    const lastItem = carouselContainer.find('.works__container:last');
    if (direction === 'left') {
      lastItem.after(firstItem);
      carouselContainer.css({ marginLeft: 0 });
    } else if (direction === 'right') {
      firstItem.before(lastItem);
      carouselContainer.css({ 'marginLeft': '-100%' });
    }
  }

  function goLeft() { 
    direction = 'left';
    carouselContainer.animate({ 'marginLeft': '-100%' }, 500, moveFirstSlide)
  };

  function goRight() {
    direction = 'right';
    moveFirstSlide();
    carouselContainer.animate({ 'marginLeft': 0 }, 500);
    direction = 'left';
  }

  let keepGoing = setInterval(goLeft, 4000);

  btnLeft.on('click', goLeft);
  btnRight.on('click', goRight);
  
  carouselArea.on('mouseenter', function() {
    clearInterval(keepGoing);
  });
  carouselArea.on('mouseleave', function () {
    keepGoing = setInterval(goLeft, 4000);
  });

  if ($('.card__burger').css('display') === 'block') {
    clearInterval(keepGoing);
  }

  $(window).resize(function() {
    clearInterval(keepGoing);
  });
});