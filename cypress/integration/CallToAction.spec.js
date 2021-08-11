/// <reference types="cypress" />

describe('Call to action storybook', () => {
  beforeEach('visits call to action', () => {
    cy.visit('http://localhost:6006')
    cy.contains('Call to action', { timeout: 20000 })
  })
  it('Has a title', () => {
    cy.contains('Call to action')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-call-to-action--call-to-action-preview&args=&viewMode=story'
    )
    cy.get('h2')
    cy.contains('Discover amazing products and profit from a truly fair market:')
  })
  it('Has a subtitle', () => {
    cy.contains('Call to action')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-call-to-action--call-to-action-preview&args=&viewMode=story'
    )
    cy.get('h3')
    cy.contains('This is a subtitle that is very informative')
  })
  it('Has buttons', () => {
    cy.contains('Call to action')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-call-to-action--call-to-action-preview&args=&viewMode=story'
    )
    cy.get('button')
    cy.contains('Discover Products')
    cy.get('button')
    cy.contains('Become a member')
  })
})