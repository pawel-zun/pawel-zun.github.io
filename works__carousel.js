$(function() {
  const carouselContainer = $('.works__carousel .works__slides');
	setInterval(changeSlide, 4000);
  function changeSlide() { carouselContainer.animate({'marginLeft': '-100%'}, 500, moveFirstSlide) };
	function moveFirstSlide() {
    let firstItem = carouselContainer.find('.works__container:first');
    let lastItem = carouselContainer.find('.works__container:last');
		lastItem.after(firstItem);
    carouselContainer.css({marginLeft: 0});
	}
});