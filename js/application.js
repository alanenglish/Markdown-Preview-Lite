var transform = function(input){
  // return(input);
  return(model.convertToMarkdown(input));
};

$(document).ready(function() {
  controller = new Controller();
  model = new Model();
  view = new View();

  $(document).on('keyup', function(event) {
    $('#preview').html(transform($('#input').val()));
  });
});