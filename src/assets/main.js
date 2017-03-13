$(function() {

$.ajax({
  url: 'https://www.codeschool.com/users/mcneildylan91.json',
  dataType: 'jsonp',
  success: function(response){

    addCourses(response.courses.completed);
  }
});

function addCourses(courses){

var $badges = $('#badges');

  courses.forEach(function(course) {
    $('<div />', {
      'class': 'courses'
    }).appendTo($badges);

    $('<h3 />', {
      text: course.title
    }).appendTo($course);

    $('<img />', {
      src: course.badge
    }).appendTo($course);

    $('<a />',{
      'class': 'btn btn-primary',
      target: '_blank',
      href: course.url,
      text: 'See course'
    }).appendTo($course);
  })
}

});
