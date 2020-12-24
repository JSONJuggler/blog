describe('Landing Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('is the landing page', () => {
    cy.contains('Landing page');
  });
});
