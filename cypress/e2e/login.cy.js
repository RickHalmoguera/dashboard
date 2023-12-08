describe("Login Test", () => {
    it("The Login Page most navigate to /root/dashboard if the form info is User : Ricardo and password: test", () => {
      cy.visit("http://localhost:5173/");
  
      cy.get('[data-cy="inputUser"]').type("Ricardo");
  
      cy.get('[data-cy="inputPass"]').type("test");
  
      cy.get("button[type=submit]").click();
      cy.url().should("include", "/root/dashboard");
    });
    it("The Login page most not Navigate if the form info is incoprrect", () => {
      cy.visit("http://localhost:5173/");
  
      cy.get('[data-cy="inputUser"]').type("Roberto");
  
      cy.get('[data-cy="inputPass"]').type("test");
  
      cy.get("button[type=submit]").click();
      cy.url().should("include", "/");
    });
    it("If the User tries to Navigate by typing the url manually, it most stay at the Login Page", () => {
        cy.visit("http://localhost:5173/root/");
        cy.wait(1000);
        cy.location("pathname").should("include", "");
        cy.wait(1000);
        cy.visit("http://localhost:5173/");
        cy.wait(1000);
        cy.visit("http://localhost:5173/root/dashboard");
        cy.wait(1000);
        cy.location("pathname").should("include", "");
      });
  });