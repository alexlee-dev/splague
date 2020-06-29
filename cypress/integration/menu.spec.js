/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Menu", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
    // cy.get("#story").should("have.text", "Welcome to Splague!");
    cy.get("#story-0").click();
    // cy.get("#story").should(
    //   "have.text",
    //   "You are a level headed doctor of medicine living in Western Europe. Above all else, you desire to help others. The year is 1345."
    // );
    cy.get("#story-1").click();
    // cy.get("#story").should(
    //   "have.text",
    //   "... the Black Plague starts in 1346. Good luck."
    // );
    cy.get("#story-2").click();
    // cy.get("#story").should("have.text", "12 months before death...");
  });

  it("Should not be open on initial load", () => {
    cy.get("#menu").should("not.be.visible");
  });

  it("Should be able to open Menu.", () => {
    cy.get("#menu").should("not.be.visible");
    cy.get("#open-menu").click();
    cy.get("#menu").should("be.visible");
  });
});