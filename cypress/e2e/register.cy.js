describe('stock register', () => {
    it('register', () => {
      cy.visit('http://localhost:3000/')
      cy.viewport("macbook-13")
        cy.url().should('include','/')
        //*dom içine yazılan class isminden ilgili html elementine giderek action işlemi yapılır
        cy.get('[data-test="cy_registerLink"]').contains("Don't you have an account?").click({force:true})
        cy.url().should("include", "/register")
        cy.get("[data-test='registerHeader']").contains("Register")
        cy.get("[data-test='userName']")
        .should("be.visible").type("koraykksll")
        cy.get("[data-test='firstName']")
        .should("be.visible").type("koray")
        cy.get("[data-test='lastName']")
        .should("be.visible").type("kksl")
        cy.get("[data-test='email']")
        .should("be.visible").type("korayy@bonna.com")
        cy.get("[data-test='password']")
        .should("be.visible").type("Koray2023++")
        cy.get("[data-test='sbmtRegister']")
        .should("be.visible").click({ force: true });
        cy.url().should("include", "/stock");
        //*logout classını bul timeout süresini 20sn çıkar ve click işlemini yap.bir önceki test işlemi tamamlandıktan sonra timeout ile bekletme yapılabilir
        cy.get("[data-test='cypress_logouthBtn']",{timeout:20000}).should("be.visible").click();
        
    })
  
  })

