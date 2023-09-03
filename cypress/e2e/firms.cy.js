describe("firms-test", () => {

    //*test ilk çalıştığında kontrol edilmesini istediğimiz işlemler beforeEach ile gösterilir
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
        cy.viewport(1200, 1200);
    });

    it("firms", () => {

        //* cy.login() cypress support kalsörü içine ayrı bir js test dosyası gibi yazılır.
        //* bis dosyas içinde yüzlerce satır test komutu olmamasın ve karışık bir görüntü oluşturmaması için bu işlem uygulanır.
        cy.login();

        cy.get("[data-test='titleFirms']").contains("Firms").should("be.visible").click({ force: true });
        cy.get("[data-test='firmsHeader']").contains("Firms").should("be.visible");
        cy.get("[data-test='firmsBtn']").contains("NEW FIRM").should("be.visible").click({ force: true });
        cy.get("[data-test='firmName']").contains("Firm Name").click({ force: true }).type("TestFirm");
        cy.get("[data-test='firmPhone']").contains("Phone").click({ force: true }).type("1234567890");
        cy.get("[data-test='firmAddress']").contains("Address").click({ force: true }).type("TestAddress");
        cy.get("[data-test='firmImage']").contains("Image").click({ force: true }).type("https://docs.cypress.io/img/logo/cypress-logo-dark.png");
        cy.get("[data-test='firmsSbmt']").contains("Submit").should("be.visible").click({ force: true });
        cy.get("[data-test='firmCardName']").should("be.visible");
        cy.get("[data-test='firmCardAdress']").should("be.visible");
        cy.get("[data-test='firmCardImage']").should("be.visible");
        cy.get("[data-test='firmCardPhone']").should("be.visible");
        cy.get("[data-test='editBtn']").should("be.visible").first().click({ force: true });
        cy.get("input[name='name']").clear().type("Test Firm Edit");
        cy.get("input[name='phone']").clear().type("1234567891");
        cy.get("input[name='address']").clear().type("Test Address Edited");
        cy.get("input[name='image']").clear().type("https://docs.cypress.io/img/logo/cypress-logo-dark.png");
        cy.get("[data-test='firmsSbmt']").should("be.visible").click({ force: true });


    });
});