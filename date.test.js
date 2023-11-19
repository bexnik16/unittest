const calculateDateDifference = require('./dateDifference');

describe('Tarix ferqi hesablanır', () => {
    test('İki tarix arasinda 1 gun ferq olmalidir', () => {
      expect(calculateDateDifference('2023-11-10', '2023-11-11')).toBe(1);
    });
  
    test('İki tarix arasinda 0 gun ferq olmalidir', () => {
      expect(calculateDateDifference('2023-11-10', '2023-11-10')).toBe(0);
    });
  
    test('İki tarix arasinda 7 gun ferq olmalidir', () => {
      expect(calculateDateDifference('2023-11-01', '2023-11-08')).toBe(7);
    });
  
    test('Tarixlerin sirasi evez edilirse netice hemise musbet olmalidir', () => {
      expect(calculateDateDifference('2023-11-11', '2023-11-10')).toBe(1);
    });
  });
  
  describe('Tarix formati yoxlanir', () => {
    test('Sehv tarix formati ile hesablama etmek olmamalidir', () => {
      expect(() => {
        calculateDateDifference('11-10-2023', '2023-11-11');
      }).toThrow('Tarix formati sehvdir');
    });
  
    test('Yalniz tarixler qəbul edilmelidir', () => {
      expect(() => {
        calculateDateDifference('text', '2023-11-11');
      }).toThrow('Tarix formati sehvdir');
    });
  });
  
  
  module.exports = calculateDateDifference;
  