/// <reference types="cypress" />

describe('Storybook Pending Indication', () => {
	beforeEach('visits storybook', () => {
		cy.visit('http://localhost:6006')
		cy.contains('Pending Indicator', { timeout: 20000 })
	})

	it('Has a Pending Indication', () => {
		cy.visit(
			'http://localhost:6006/iframe.html?id=components-pending-indicator--pending-medium&viewMode=story'
		)
		cy.get('img').should('have.attr', 'src')
		cy.get('img').should('have.attr', 'alt')
	})
})
