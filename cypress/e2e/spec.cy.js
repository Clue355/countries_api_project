describe("My First Test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });

    it("Finds a search bar", () => {
        cy.get("input");
    });

    it("Finds a drop box", () => {
        cy.get("select");
    });

    it("Types characters into the search bar and finds card", () => {
        cy.get("input").type("united states");
        cy.get("input").should("have.value", "united states");
        cy.contains("United States of America");
    });

    it("Clicks on a country link and find info titles", () => {
        cy.contains("United States of America").click();
        cy.contains("United States of America");
        cy.contains("Native Name: ");
        cy.contains("Population: ");
        cy.contains("Region: ");
        cy.contains("Sub Region: ");
        cy.contains("Capital: ");
        cy.contains("Top Level Domain: ");
        cy.contains("Currencies: ");
        cy.contains("Languages: ");
        cy.contains("Border Countries:");
    });
});
