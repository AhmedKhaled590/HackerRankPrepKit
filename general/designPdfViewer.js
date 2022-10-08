function designerPdfViewer(h, word) {
  // Write your code here
  let max = 0;
  for (let i = 0; i < word.length; i++) {
    if (h[word.charCodeAt(i) - 97] > max) {
      max = h[word.charCodeAt(i) - 97];
    }
  }
  return max * word.length;
}
