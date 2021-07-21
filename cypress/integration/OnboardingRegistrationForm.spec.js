/// <reference types="cypress" />

describe('OnboardingRegistrationForm', () => {
    beforeEach('visits OnboardingRegistrationForm component', () => {
        cy.visit('http://localhost:6006')
        cy.contains('OnboardingRegistrationForm', { timeout: 20000 })
    })
    it('Onboarding registration Form', () => {
        cy.contains('OnboardingRegistrationForm')
        cy.visit(
            'http://localhost:6006/iframe.html?id=onboarding-registration--email-input-form&args=&viewMode=story'
        )
        cy.get('label').contains('Your full name')
        cy.get('input').should('have.attr', 'placeholder')
        cy.get('type').should('have.attr', 'email')
    })
})