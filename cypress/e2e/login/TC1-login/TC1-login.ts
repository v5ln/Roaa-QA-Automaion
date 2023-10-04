import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import LoginPageAction from "../../../pageObjects/loginPage/actions";
import LoginPageAsserts from "../../../pageObjects/loginPage/asserts";


const loginPageAction = new LoginPageAction();
const loginPageAsserts = new LoginPageAsserts();

Given("visit home page",()=>{
  cy.visit("")
})

When("User clicks the Need an account? link", () => {
  cy.get("a[href='#register']").contains("Need an account?").click();
});

When("User enters a valid email address", () => {
  
});

When("User enters a valid password", () => {
  
});

When("User clicks the Sign in button", () => {
  
});

When("User leaves the {string} field empty", (input:string) => {
  
});

When("User enters a valid email address and password", () => {
  
});

When("User enters an invalid email address or password", () => {
  
});

Then("User should be redirected to the registration page", () => {
  cy.url().should('include', '/register');
});

Then("The url should be valid for Sign In page", () => {
  loginPageAsserts.checkUrl();
});

Then("User should see the Sign In header", () => {
  cy.get("h1.text-xs-center").should("contain", "Sign In");
});

Then("Email and password and Sign in button input fields should be displayed and enabled", () => {
  loginPageAsserts
  .checkSigninButtonIsAppeard()
  .checkEmailInputIsAppeard()
  .checkPasswordInputIsAppeard()
});

Then("Email input field should accept the email address", () => {

});

Then("Password input field should accept the password", () => {

});

Then("User should be logged in successfully", () =>{
  cy.url().should('not.include', '/login')
  // user name should appear in top bar (top bar assert)
});

Then("User should see an error message", () => {
  loginPageAsserts.checkInvalidMsgIsAppeard();
});

Then("Email input field should have the placeholder {string}", (placeholder: string) => {
  cy.get('input[type="email"]').should("have.attr", "placeholder", placeholder);
});

Then("Password input field should have the placeholder {string}", (placeholder: string) => {
  cy.get('input[type="password"]').should("have.attr", "placeholder", placeholder);
});

Then("Sign in button should have the text {string}", (text: string) => {
  cy.get('button[type="submit"]').should("contain", text);
});