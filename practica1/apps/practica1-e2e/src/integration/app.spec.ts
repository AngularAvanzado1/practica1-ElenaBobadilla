import { getGreeting } from '../support/app.po';

describe('practica1', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to practica1!');
  });
});
