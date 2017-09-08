function View() {
}

View.prototype.refreshPreview = function(convertedText) {
  $('#preview').html(convertedText);
}