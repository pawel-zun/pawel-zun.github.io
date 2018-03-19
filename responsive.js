function toggleFullHeader(params) {
  $('.card').toggleClass('card--full');
  $('.card__wrapper').toggleClass('card__wrapper--full');
  $('.card__main').toggleClass('card__main--full');
  $('.card__name').toggleClass('card__name--full');
  $('.navigation__list').click(toggleFullHeader);
}


$('.card__burger').click(toggleFullHeader);