$(document).ready(function() {
  $('#header-button').on('click', function() {
    $('#header-wrap').toggleClass('bg-dark-blue');
    
    if ($('#header-wrap').hasClass('bg-dark-blue')) {
      $('#header-list').addClass('page-header__list_show');
      $(this).removeClass('page-header__menu-button_burger');
      $(this).addClass('page-header__menu-button_cross');
    } else {
      $('#header-list').removeClass('page-header__list_show');
      $(this).removeClass('page-header__menu-button_cross');
      $(this).addClass('page-header__menu-button_burger');
    }
  });
});
