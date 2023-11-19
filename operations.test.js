const { toplama, cixma, vurma, bolme } = require("./operations.js");

describe("Toplama function:", () => {
  test("Toplama testi", () => {
    expect(toplama(2, 3)).toBe(5);  // Normal qiymətlər
    expect(toplama(0, 0)).toBe(0);  // Sıfırlar
    expect(toplama(-2, -3)).toBe(-5);  // Mənfi rəqəmlər
  });
});

describe("Cixma function:", () => {
  test("Çıxma testi", () => {
    expect(cixma(5, 3)).toBe(2);  
    expect(cixma(0, 0)).toBe(0); 
    expect(cixma(-5, -3)).toBe(-2); 
  });
});

describe("Vurma function:", () => {
  test("Vurma testi", () => {
    expect(vurma(2, 3)).toBe(6);  
    expect(vurma(0, 5)).toBe(0);  
    expect(vurma(-2, -3)).toBe(6);  
  });
});

describe("Bolme function:", () => {
  test("Bölmə testi", () => {
    expect(bolme(6, 3)).toBe(2);  
    expect(bolme(0, 5)).toBe(0);  
    expect(bolme(-6, -3)).toBe(2); 

    expect(() => {
      bolme(5, 0);  
    }).toThrow("Bolunme 0-a icaze verilmir");
  });
});
