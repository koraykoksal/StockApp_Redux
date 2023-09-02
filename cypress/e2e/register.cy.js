describe('stock register', () => {
    it('register', () => {
      cy.visit('http://localhost:3000/')
      cy.viewport("ipad-2")
        cy.url().should('include','/')
        //*dom içine yazılan class isminden ilgili html elementine giderek action işlemi yapılır
        cy.get('[data-test="cy_registerLink"]').contains("Don't you have an account?").click({force:true})
        cy.url().should("include", "/register");
    })
  
  })

