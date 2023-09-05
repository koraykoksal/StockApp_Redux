describe("login-test", () => {


    it("login", () => {

        cy.visit('http://localhost:3000/')
       
        cy.url().should("include", "/");
        cy.get("[data-test='loginHeader']").contains("Login").should("be.visible");
        cy.get("[data-test='emailLogin']")
            .should("be.visible").type("koray@koray.com")
        cy.get("[data-test='passwordLogin']")
            .should("be.visible").type("Koray2023+")
        cy.get("[data-test='sbmtlogin']")
            .should("be.visible")
            .click({ force: true });
        cy.url().should("include", "/stock");


    });
});