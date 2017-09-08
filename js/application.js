$(document).ready(function() {
  controller = new Controller();
  model = new Model();
  view = new View();

  $("#input").on('keyup', controller.transform);
});