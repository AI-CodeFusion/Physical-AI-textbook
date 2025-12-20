// Sample test for Physical AI textbook
describe('Physical AI Textbook Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the main heading', () => {
    cy.get('h1').should('contain', 'Physical AI & Humanoid Robotics Textbook');
  });

  it('should have navigation links', () => {
    cy.get('nav').find('a').should('have.length.greaterThan', 0);
  });

  it('should have a functional navbar', () => {
    cy.get('.navbar').should('be.visible');
    cy.get('.navbar__title').should('contain', 'Physical AI Textbook');
  });
});