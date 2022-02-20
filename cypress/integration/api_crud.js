//cypress tests

describe("API crud test", () => {
	it("fetches Todo items - GET", () => {
		cy.request("/api/v1/todos").as("todoRequest");

		cy.get("@todoRequest").then((todos) => {
			expect(todos.status).to.eq(200);
			assert.isArray(todos.body, "Todos Respond is an array");
		});
	});
});
