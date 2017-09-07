var transform = function(input){
  return(input);
};

$(document).ready(function() {
  controller = new Controller();
  model = new Model();
  view = new View();

  $(document).on('keyup', function(event) {
    $('#preview').text(transform($('#input').val()));
  });
});