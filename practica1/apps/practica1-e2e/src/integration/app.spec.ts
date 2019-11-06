import { getGreeting, getTitle, waitLoadPage, getRegions, getContinents, getCountries, clickRegion, clickContinent } from '../support/app.po';

describe('GIVEN: app practica1 - Home page', () => {
  beforeEach(() => cy.visit('/'));

  context('WHEN: user visits home page', () => {
    it('THEN: should display welcome message', () => {
      getGreeting().contains('Práctica 1');
    });
    it('THEN: should display title', () => {
      getTitle().contains('Home page');
    });
    it('THEN: should display 7 regions', () => {
      waitLoadPage();
      getRegions().should('have.length', 7)
    });
    it('THEN: clicking region link navigates to region page', function() {
      waitLoadPage();
      clickRegion().url().should('include', '/region/EAS', { timeout: 10000 });
    })
  });
});

describe('GIVEN: app practica1 - Region page', () => {
  beforeEach(() => cy.visit('/region/ECS'));

  context('WHEN: user visits region page', () => {
    it('THEN: should display welcome message', () => {
      getGreeting().contains('Práctica 1');
    });
    it('THEN: should display title', () => {
      getTitle().contains('Página región continental');
    });
    it('THEN: should display 58 continents', () => {
      waitLoadPage();
      getContinents().should('have.length', 58)
    });
    it('THEN: clicking continent link navigates to region page', function() {
      waitLoadPage();
      clickContinent().url().should('include', '/country/ALB');
    })
  });

});

describe('GIVEN: app practica1 - Country page', () => {
  beforeEach(() => cy.visit('/country/ESP'));

  context('WHEN: user visits country page', () => {
    it('THEN: should display welcome message', () => {
      getGreeting().contains('Práctica 1');
    });
    it('THEN: should display title', () => {
      getTitle().contains('Datos del país');
    });
    it('THEN: should display 1 country', () => {
      waitLoadPage();
      getCountries().should('have.length', 1)
    });
    it('THEN: clicking continent link navigates to region page', function() {
      waitLoadPage();
      clickRegion().url().should('include', '/region/ECS');
    })
  });

});

