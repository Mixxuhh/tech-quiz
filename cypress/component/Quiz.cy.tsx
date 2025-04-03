// import React from "react";
import Quiz from "../../client/src/components/Quiz";
import { mount } from "@cypress/react18";

describe("Quiz Component", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/questions/random", {
      fixture: "questions.json",
    }).as("getQuestions");
  });

  it("should render the start button initially", () => {
    mount(<Quiz />);
    cy.get("button").should("contain", "Start Quiz");
  });

  it("should start the quiz when start button is clicked", () => {
    mount(<Quiz />);
    cy.get("button").click();
    cy.wait("@getQuestions");
    cy.get("h2").should("exist");
  });

  it("should display questions and answers after starting", () => {
    mount(<Quiz />);
    cy.get("button").click();
    cy.wait("@getQuestions");
    cy.get("h2").should("exist");
    cy.get(".alert").should("have.length.at.least", 1);
  });

  it("should update score when correct answer is selected", () => {
    mount(<Quiz />);
    cy.get("button").click();
    cy.wait("@getQuestions");

    // Answer first question
    cy.get("button").first().click();

    // Wait for next question or completion
    cy.get("h2").should("exist");

    // Answer second question
    cy.get("button").first().click();

    // Wait for completion screen
    cy.get("h2").should("contain", "Quiz Completed");
    cy.get(".alert-success").should("contain", "Your score: 2");
  });

  it("should show completion screen after all questions are answered", () => {
    mount(<Quiz />);
    cy.get("button").click();
    cy.wait("@getQuestions");

    // Answer first question
    cy.get("button").first().click();

    // Wait for next question
    cy.get("h2").should("exist");

    // Answer second question
    cy.get("button").first().click();

    // Check completion screen
    cy.get("h2").should("contain", "Quiz Completed");
  });

  it("should allow starting a new quiz after completion", () => {
    mount(<Quiz />);
    cy.get("button").click();
    cy.wait("@getQuestions");

    // Answer first question
    cy.get("button").first().click();

    // Wait for next question
    cy.get("h2").should("exist");

    // Answer second question
    cy.get("button").first().click();

    // Start new quiz
    cy.get("button").contains("Take New Quiz").click();
    cy.get("h2").should("not.contain", "Quiz Completed");
  });
});
