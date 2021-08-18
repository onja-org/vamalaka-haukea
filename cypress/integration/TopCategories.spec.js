/// <reference types="cypress" />
describe('Top Categories Storybook', () => {
  beforeEach('visits top categories component', () => {
    cy.visit('http://localhost:6006')
  })
  it('Has a heading', () => {
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-top-categories--top-categories-component&viewMode=story'
    )
    cy.get('h3')
    cy.contains('Top Categories')
  })
  it('Has a list of categories', () => {
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-top-categories--top-categories-component&viewMode=story'
    )
    cy.get('ul')
    cy.get('button')
  })
  it('Has a line break', () => {
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-top-categories--top-categories-component&viewMode=story'
    )
    cy.get('hr')
  })
})