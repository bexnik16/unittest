function reverseText(text) {
    if (typeof text !== 'string') {
      throw new Error('Metn turudur.');
    }
  
    
    return text.split('').reverse().join('');
  }
  
  module.exports = reverseText;
  