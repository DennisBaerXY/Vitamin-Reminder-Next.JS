//cypress tests

describe("API crud test", () => {
	it("inserted todo", () => {
		cy.visit("http://localhost:3000/");

		cy.get("#text-input").type("test{enter}");

		cy.get("#text-input").type("Hello Nextjs from cypress{enter}");

		cy.get("#todo-list").should("contain", "test");

		cy.get("#todo-list").should("contain", "Hello Nextjs from cypress");
	});
});
