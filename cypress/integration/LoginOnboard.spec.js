/// <reference types="cypress" />
describe('Login Onboard component', () => {
  beforeEach('visits site', () => {
    cy.visit('http://localhost:6006')
    cy.contains('LoginOnboard', { timeout: 20000 })
  })
  it('has LoginOnboard component', () => {
    cy.contains('LoginOnboard')
    cy.visit('http://localhost:6006/iframe.html?id=login-loginonboard--login-onboard-story&args=&viewMode=story')
  })
  
  it('has a description paragraph', () => {
    cy.contains('p')
    cy.contains('Discover amazing products and profit from a truly fair market')
  })

  it('has an anchor', () => {
    cy.get('a').should('have.attr', 'href')
  })

})
