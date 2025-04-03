describe("Tech Quiz E2E Tests", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/questions/random", {
      fixture: "questions.json",
    }).as("getQuestions");
    cy.visit("/");
  });

  it("should load the quiz page", () => {
    cy.get("button").should("contain", "Start Quiz");
  });

  it("should start the quiz and display questions", () => {
    cy.get("button").click();
    cy.wait("@getQuestions");
    cy.get("h2").should("exist");
    cy.get(".alert").should("have.length.at.least", 1);
  });

  it("should progress through questions and show score", () => {
    cy.get("button").click();
    cy.wait("@getQuestions");

    // Answer first question
    cy.get("button").first().click();
    cy.get("h2").should("exist");

    // Answer second question
    cy.get("button").first().click();

    // Check completion screen
    cy.get("h2").should("contain", "Quiz Completed");
    cy.get(".alert-success").should("exist");
  });

  it("should allow starting a new quiz after completion", () => {
    cy.get("button").click();
    cy.wait("@getQuestions");

    // Answer first question
    cy.get("button").first().click();
    cy.get("h2").should("exist");

    // Answer second question
    cy.get("button").first().click();

    // Wait for completion screen
    cy.get("h2").should("contain", "Quiz Completed");

    // Start new quiz
    cy.get("button").contains("Take New Quiz").click();
    cy.get("h2").should("not.contain", "Quiz Completed");
  });
});
