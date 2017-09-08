function Controller() {
}

Controller.prototype.transform = function() {
  plaintextInput = $("#input").val();
  convertedMarkdown = model.convertToMarkdown(plaintextInput);
  view.refreshPreview(convertedMarkdown);
}