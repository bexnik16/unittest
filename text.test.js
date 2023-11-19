const reverseText = require('./reverseText');

describe('reverseText funksiyası', () => {
  describe('Metni tersine cevirir', () => {
    test('Hello mətni', () => {
      expect(reverseText('Hello')).toBe('olleH');
    });

    test('Eded metni', () => {
      expect(reverseText('12345')).toBe('54321');
    });

    test('JavaScript metni', () => {
      expect(reverseText('JavaScript')).toBe('tpircSavaJ');
    });
  });

  describe('Bos metnle isleyir', () => {
    test('Bos metn', () => {
      expect(reverseText('')).toBe('');
    });
  });

  describe('Xeta yoxlayir', () => {
    test('Eded elave edildikde xeta', () => {
      expect(() => {
        reverseText(123); 
      }).toThrow('Metn turudur.');
    });
  });
});
