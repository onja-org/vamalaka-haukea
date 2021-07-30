/// <reference types="cypress" />

describe('Button Screen', () => {
  beforeEach('visits site', () => {
    cy.visit('http://localhost:6006')
    cy.contains('Button', { timeout: 20000 })
  })
  it('Displays the learn button', () => {
    cy.contains('Button')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-button--learn-enabled&args=&viewMode=story'
    )
    cy.contains('Learn more')
  })
  it('Displays the learn disabled button', () => {
    cy.contains('Button')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-button--learndisabled&args=&viewMode=story'
    )
    cy.contains('Learn more')
  })
  it('Displays the trust button', () => {
    cy.contains('Button')
    cy.visit('http://localhost:6006/iframe.html?id=components-button--autoformat-with-icon&args=&globals=backgrounds.grid:false&viewMode=story')
    cy.contains('Can you trust us?')
  })
})
