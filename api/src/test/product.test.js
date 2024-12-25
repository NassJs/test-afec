const dotenv = require('dotenv');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../server');  // Ton fichier app.js où tu définis ton serveur Express
const Product = require('../models/Product');
dotenv.config()

describe('Product CRUD API', () => {

  // 1. Test de la route POST /products (Créer un produit)
  it('should create a product', async () => {
    const newProduct = {
      name: 'Test Product',
      description: 'A test product description',
      price: 20.99,
      stock: 100
    };

    const response = await request(app)
      .post('/products/')
      .send(newProduct)
      .expect('Content-Type', /json/)
      .expect(201);

    // Sauvegarder l'ID pour les tests suivants
    productId = response.body._id;

    // Vérifier que la réponse contient les bonnes valeurs
    expect(response.body.name).toBe(newProduct.name);
    expect(response.body.description).toBe(newProduct.description);
    expect(response.body.price).toBe(newProduct.price);
    expect(response.body.stock).toBe(newProduct.stock);
  });

  // 2. Test de la route GET /products (Récupérer tous les produits)
  it('should get all products', async () => {
    const response = await request(app)
      .get('/products/')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });

  // 3. Test de la route GET /products/:id (Récupérer un produit par ID)
  it('should get a product by ID', async () => {
    const response = await request(app)
      .get(`/products/${productId}`)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.name).toBe('Test Product');
    expect(response.body.description).toBe('A test product description');
    expect(response.body.price).toBe(20.99);
    expect(response.body.stock).toBe(100);
  });

  // 4. Test de la route PUT /products/:id (Mettre à jour un produit)
  it('should update a product', async () => {
    const updatedProduct = {
      name: 'Updated Product',
      description: 'An updated product description',
      price: 25.99,
      stock: 120
    };

    const response = await request(app)
      .put(`/products/${productId}`)
      .send(updatedProduct)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.name).toBe(updatedProduct.name);
    expect(response.body.description).toBe(updatedProduct.description);
    expect(response.body.price).toBe(updatedProduct.price);
    expect(response.body.stock).toBe(updatedProduct.stock);
  });

  // 5. Test de la route DELETE /products/:id (Supprimer un produit)
  it('should delete a product', async () => {
    const response = await request(app)
      .delete(`/products/${productId}`)
      .expect('Content-Type', /json/)
      .expect(202);

    expect(response.body.message).toBe('Product deleted successfully');
  });

});
