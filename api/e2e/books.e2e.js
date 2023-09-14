const mockGetAll = jest.fn();
const request = require('supertest');

const createApp = require('../src/app'); // Montamos la app
const { generateManyBooks } = require('../src/fakes/book.fake');



jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => {
  return {
    getAll: mockGetAll,
    create: () => {},
  };
}));

describe('Test for books', () => {
  // variables globales
  let app = null;
  let server = null;

  beforeAll(() => {                    // antes de todas las pruebas corremos la app
    app = createApp();                // ponemos la app en un puerto a correr
    server = app.listen(3001);
  });

  afterAll(async() => {              // despues de las pruenas cerramos la app
    await server.close();
  });

  describe('test for [GET] /api/v1/books', () => {
    test('Should return a list books', () =>  {
      // Arrange
      const fakeBooks = generateManyBooks(3);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      return request(app)
      .get('/api/v1/books')
      .expect(200)
      .then(({ body }) => {
        console.log(body);
        // Assert
        expect(body.length).toEqual(fakeBooks.length);
      });
    });
  });

});
