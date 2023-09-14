const request = require('supertest');

// montamos la app
const createApp = require('../src/app');

describe('Test for hello endpoint', () => {
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

  describe('test for [GET] /', () => {
   test('should return "Hello Wordl!"', () => request(app)
   .get('/')
   .expect(200)                        // esperamos que haya un 200, que no haya error
   .then((response) => {                    // ejecutamos respuesta
    expect(response.text).toEqual('Hello World!');  // la respuesta es un texto y deberia ser igual
   }));

  });
});
