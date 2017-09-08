$(document).ready(function() {
  controller = new Controller();
  model = new Model();
  view = new View();

  $(document).on('keyup', function(event) {
      controller.transform();
    })
});