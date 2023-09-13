const Person = require('./06-person');

describe('test for Person', () => {
  let person;
  // Arrange / Given - (preparando instancias para cada caso de prueba)
  beforeEach(() => {
    person = new Person('Masma', 15, 1.7);
  });

  test('should return down', () => {
    // Arrange
    person.weight = 45;
    // Act     / When
    const imc = person.calcIMC();
    // Assert  / Then
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    // Arrange
    person.weight = 59;
    // Act     / When
    const imc = person.calcIMC();
    // Assert  / Then
    expect(imc).toBe('normal');
  });

  test('should return overweight', () => {
    // Arrange
    person.weight = 75;
    // Act
    const imc = person.calcIMC();
    // Assert
    expect(imc).toBe('overweight');
  });

  test('should be return overweight level 1', () => {
    person.weight = 85;
    const imc = person.calcIMC();
    expect(imc).toBe('overweight level 1');
  });

  test('should be return overweight level 2', () => {
    person.weight = 97;
    const imc = person.calcIMC();
    expect(imc).toBe('overweight level 2');
  });

  test('should be return overweight level 3', () => {
    person.weight = 130;
    const imc = person.calcIMC();
    expect(imc).toBe('overweight level 3');
  });

  test('should return "not found"', () => {
    // Cambiamos el peso y altura para este caso específico
    person.weight = -1;
    person.height = 1.0; // Cambiamos la altura a un valor que haga que el IMC sea negativo

    // Act / When
    const imc = person.calcIMC();

    // Assert / Then
    expect(imc).toBe('not found');
  });

  test('should return "not found"', () => {
    // Cambiamos el peso y altura para este caso específico
    person.weight = -1;
    person.height = -1.0; // Cambiamos la altura a un valor que haga que el IMC sea negativo

    // Act / When
    const imc = person.calcIMC();

    // Assert / Then
    expect(imc).toBe('not found');
  });

  test('should return "not found"', () => {
    // Cambiamos el peso y altura para este caso específico
    person.weight = -1;
    person.height = 0; // Cambiamos la altura a un valor que haga que el IMC sea negativo

    // Act / When
    const imc = person.calcIMC();

    // Assert / Then
    expect(imc).toBe('not found');
  });
});
