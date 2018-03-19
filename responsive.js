function hideAll() {
  toggleFullHeader();
  $('#card__burger').prop('checked', false);
}

function toggleFullHeader(params) {
  $('.card').toggleClass('card--full');
  $('.card__wrapper').toggleClass('card__wrapper--full');
  $('.card__main').toggleClass('card__main--full');
  $('.card__name').toggleClass('card__name--full');
  $('.card__photo').toggleClass('card__photo--full');
  $('.stripes-group').toggleClass('stripes-group--full');
  $('.navigation__list').click(hideAll);
}


$('.card__burger').click(toggleFullHeader);