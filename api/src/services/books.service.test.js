const { generateManyBooks } = require('../fakes/book.fake');
const Bookservice = require('./books.service');

const mockGetAll = jest.fn();

// Generar suplantacion
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => {
  return {
    getAll: mockGetAll,
    create: () => {},
  };
}));

describe('Test for Bookservice', () => {
  // Generar instancia del servicio
  let service;
  // en cada prueba creamos una instancia nueva
  beforeEach(() => {
    service = new Bookservice();
    // limpiar todos los mocks antes de cada caso de prueba (pruebas aisladas)
    jest.clearAllMocks();
  });

  // Pruebas
  describe('tets for getBooks', () => {
    test('should return a list books', async  () => {
     // Arrange  obtener los libros de fake
     const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);
     // Act
     const books = await  service.getBooks({});
     console.log(books);
     // Assert
     expect(books.length).toEqual(fakeBooks.length);
     expect(mockGetAll).toHaveBeenCalled();
     // verificar si fue llamada con books y con el objeto vacio
     expect(mockGetAll).toHaveBeenCalledWith('books', {});
     expect(mockGetAll).toHaveBeenCalledTimes(1);
    });

    test('should return a list books', async  () => {
      // Arrange  obtener los libros de fake
      const fakeBooks = generateManyBooks(4);
       mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await  service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      // verificar si fue llamada con books y con el objeto vacio
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
      expect(mockGetAll).toHaveBeenCalledTimes(1);
     });

    test('should return a book position zero', async  () => {
      // Arrange
      const fakeBooks = generateManyBooks(14);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books[0].name).toEqual(fakeBooks[0].name);
     });

  });
});
