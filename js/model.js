function Model(document) {
}

Model.prototype.convertToMarkdown = function(plaintext) {
  result = this.convertItalicsAsterisk(plaintext.split(""));
  result = this.convertItalicsUnderscore(result);
  return result.join("");
}

Model.prototype.convertItalicsAsterisk = function(textArray) {
  var indexesOfAsterisks = [];
  for (var i = 0; i < textArray.length; i++) {
    if (textArray[i] === '*' && textArray[i+1] != '*' && textArray[i-1] != '*')
      indexesOfAsterisks.push(i); 
  }
  for (var i = 0; i < indexesOfAsterisks.length; i++) {
    if (i % 2 === 0) {
      textArray[indexesOfAsterisks[i]] = "<i>";
    } else {
      textArray[indexesOfAsterisks[i]] = "</i>";
    }
  }
  return textArray
}

Model.prototype.convertItalicsUnderscore = function(textArray) {
  var indexesOfUnderscores = [];
  for (var i = 0; i < textArray.length; i++) {
    if (textArray[i] === '_' && textArray[i+1] != '_' && textArray[i-1] != '_')
      indexesOfUnderscores.push(i);
  }
  for (var i = 0; i < indexesOfUnderscores.length; i++) {
    if (i % 2 === 0) {
      textArray[indexesOfUnderscores[i]] = "<i>";
    } else {
      textArray[indexesOfUnderscores[i]] = "</i>";
    }
  }
  return textArray
}