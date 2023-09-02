describe('stock register', () => {
    it('register', () => {
      cy.visit('http://localhost:3000/')
      cy.viewport("ipad-2")
        cy.url().should('include','/')
        //*dom içine yazılan class isminden ilgili html elementine giderek action işlemi yapılır
        cy.get('[data-test="cy_registerLink"]').contains("Don't you have an account?").click({force:true})
        cy.url().should("include", "/register")
        cy.get("[data-test='registerHeader']").contains("Register")
        cy.get("[data-test='userName']")
        .should("be.visible").type("koraykksl")
        cy.get("[data-test='firstName']")
        .should("be.visible").type("koray")
        cy.get("[data-test='lastName']")
        .should("be.visible").type("kksl")
        cy.get("[data-test='email']")
        .should("be.visible").type("koray@bonna.com")
        cy.get("[data-test='password']")
        .should("be.visible").type("Koray2023+")
        cy.get("[data-test='sbmtRegister']")
        .should("be.visible").click({ force: true });
        cy.url().should("include", "/stock");
    })
  
  })

