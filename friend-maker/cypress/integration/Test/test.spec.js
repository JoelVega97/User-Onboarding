describe('MVP', () => {
    it('can navigate to http://localhost:3000', () => {
        cy.visit('http://localhost:3000')
    })

    it('First name input can have things put into it', () => {
        cy.get('input[name = "first_name"]')
        .type('Bob')
        .should('have.value', 'Bob')
    })

    it('Last name input can have things put into it', () => {
        cy.get('input[name = "last_name"]')
        .type('Dylan')
        .should('have.value', 'Dylan')
    })

    it('Email input can have things put into it', () => {
        cy.get('input[name = "email"]')
        .type('noemail@noemail.com')
        .should('have.value', 'noemail@noemail.com')
    })

    it('Password input can have things put into it', () => {
        cy.get('input[name = "password"]')
        .type('EightCharactersAtLeast')
        .should('have.value', 'EightCharactersAtLeast')
    })

    it('The TOS checkbox can be checked', () => {
        cy.get('input[name = "tos"]')
        .check()
        .should('have.value', 'on')

    })

    describe('Submit works', () => {
        it('Submit button works once everything needed is filled out', () => {
            cy.get('#submitBtn').click()
            cy.contains('Name: Bob Dylan Email: noemail@noemail.com').should('exist')
    })
    
    it('Make sure the button does not work if a needed input is not placed.', () => {
        cy.get('input[name = "first_name"]')
            .type('John')
        cy.get('input[name = "last_name"]')
            .type('Doe')
        cy.get('input[name = "password"]')
            .type('123456789')
        cy.get('input[name = "tos"]').check()

        cy.get('#submitBtn').should('be.disabled')

    })})


})

