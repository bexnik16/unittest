function toplama(a, b) {
    return a + b;
  }
  
  function cixma(a, b) {
    return a - b;
  }
  
  function vurma(a, b) {
    return a * b;
  }
  
  function bolme(a, b) {
    if (b === 0) {
      throw new Error("Bolunme 0-a icaze verilmir");
    }
    return a / b;
  }
  
  module.exports = { toplama, cixma, vurma, bolme };
  







