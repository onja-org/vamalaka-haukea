/// <reference types="cypress" />
describe('Buttons Screen', () => {
  beforeEach('visits site', () => {
    cy.visit('http://localhost:6006')
    cy.contains('RoleSelectOnboard', { timeout: 20000 })
  })
  it('has RoleSelectOnboard component', () => {
    cy.contains('RoleSelectOnboard')
    cy.visit('http://localhost:6006/iframe.html?id=components-roleselectonboard--role-select-on-board-story&args=&viewMode=story')
    cy.get('h3')
    cy.get('a').should('have.attr', 'href')
  })

  it('has option component', () => {
    cy.contains('Option')
    cy.visit('http://localhost:6006/iframe.html?id=components-roleselectonboard--role-select-on-board-story&args=&viewMode=story')
    cy.get('div')
  })
  
  it('has Header component', () => {
    cy.contains('Header')
    cy.visit('http://localhost:6006/iframe.html?id=components-roleselectonboard--role-select-on-board-story&args=&viewMode=story')
    cy.get('img').should('have.attr', 'src')
  })

  it('has Login component', () => {
    cy.contains('Login')
    cy.visit('http://localhost:6006/iframe.html?id=components-roleselectonboard--role-select-on-board-story&args=&viewMode=story')
    cy.get('a').should('have.attr', 'href')
  })
  
  it('has a description paragraph', () => {
    cy.contains('p')
  })

  it('has anchors', () => {
    cy.get('a').should('have.attr', 'href')
  })

  it('has LeftSide component', () => {
    cy.contains('LeftSide')
  })
})
