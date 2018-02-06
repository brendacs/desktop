$(document).ready(function() {

  // folders
  $('.finder-directory-container').on('click', function(e) {
    $('.finder-directory-container').removeClass('highlight');
    $('.finder-item-container').removeClass('highlight');
    $(this).addClass('highlight');
    $('.finder-section.finder-inner-items-list-container').addClass('finder-section-border');
    $('.finder-inner-items-list').addClass('hide');
    $('.finder-selected-item-wrapper').addClass('hide');
  });

  $('.education-folder').on('click', function(e) {
    $('.education-items').removeClass('hide');
  });

  $('.experience-folder').on('click', function(e) {
    $('.experience-items').removeClass('hide');
  });

  $('.projects-folder').on('click', function(e) {
    $('.project-items').removeClass('hide');
  });

  $('.documents-folder').on('click', function(e) {
    $('.document-items').removeClass('hide');
  });

  // folder items
  $('.finder-item-container').on('click', function(e) {
    $('.finder-item-container').removeClass('highlight');
    $(this).addClass('highlight');
    $('.finder-selected-item-wrapper').addClass('hide');
  });

  $('.finder-item-container.burton-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.burton-selected-item').removeClass('hide');
  });

  $('.finder-item-container.berkeley-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.berkeley-selected-item').removeClass('hide');
  });

  $('.finder-item-container.major-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.major-selected-item').removeClass('hide');
  });

  $('.finder-item-container.minor-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.minor-selected-item').removeClass('hide');
  });
});