/// <reference types="cypress" />

describe('Learn more banner storybook', () => {
  beforeEach('visits learn more banner', () => {
    cy.visit('http://localhost:6006')
    cy.contains('Learn more banner', { timeout: 20000 })
  })
  it('Has the heading component', () => {
    cy.contains('Learn more banner')
    cy.visit(
      'http://localhost:6006/iframe.html?id=component-learn-more-banner--banner&args=&viewMode=story'
    )
    cy.get('h2')
    cy.contains('Madagascars peer-to-peer e-commerce platform')
  })
  it('Has the description component', () => {
    cy.contains('Learn more banner')
    cy.visit(
      'http://localhost:6006/iframe.html?id=component-learn-more-banner--banner&args=&viewMode=story'
    )
    cy.get('p')
    cy.contains('Purchase high-quality products made by the people that sell them. By cutting out middlemen, you know exactly where your purchase is from and how it was made.')
  })
  it('Has the learn how it works button component', () => {
    cy.contains('Learn more banner')
    cy.visit(
      'http://localhost:6006/iframe.html?id=component-learn-more-banner--banner&args=&viewMode=story'
    )
    cy.get('button')
    cy.contains('Learn how it works')
  })
  it('Has an image component', () => {
    cy.contains('Learn more banner')
    cy.visit(
      'http://localhost:6006/iframe.html?id=component-learn-more-banner--banner&args=&viewMode=story'
    )
    cy.get('img')
    cy.get('figure')
      .find('img')
      .should('have.attr', 'src')
      .should('include', 'png')
    cy.get('img').should('have.attr', 'alt')
  })
})