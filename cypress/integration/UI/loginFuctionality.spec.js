import Login from '../../support/login.js'

describe('Test for login functionality', () => {
    const login = new Login();
    const env = Cypress.env('loginPage');
    const pageHeader = "Login Page";
    const username = Cypress.env('username');
    const wrongUser = "UserExample";
    const password = Cypress.env('password');
    const wrongPassword = "PassExample";
    const messageLogin = "You logged into a secure area!";
    const messageLogout = "You logged out of the secure area!";
    const messageWrongUser = "Your username is invalid!";
    const messageWrongPassword = "Your password is invalid!";   

  before(() => {
    cy.visit(env);
  });

  after(() => {
    login.clickLogout();
    login.getFlashMessage(messageLogout);
  });
  
  it('Type username & password and attempt login (wrong user))', () => {
    login.assertHeader(pageHeader);
    cy.fixture('textContent').then((validations) => {
        login.getSubHeaderText().should('contain', validations.landingPage);
      })
    login.typeUsername(wrongUser);
    login.typePassword(password);
    login.clickLogin();
    login.getFlashMessage(messageWrongUser);
  });

  it('Type username & password and attempt login (wrong password))', () => {
    login.assertHeader(pageHeader);
    cy.fixture('textContent').then((validations) => {
        login.getSubHeaderText().should('contain', validations.landingPage);
      })
    login.typeUsername(username);
    login.typePassword(wrongPassword);
    login.clickLogin();
    login.getFlashMessage(messageWrongPassword);
  });

  it('Type username & password and attempt login (Correct Data))', () => {
    login.assertHeader(pageHeader);
    cy.fixture('textContent').then((validations) => {
        login.getSubHeaderText().should('contain', validations.landingPage);
      })
    login.typeUsername(username);
    login.typePassword(password);
    login.clickLogin();
    login.getFlashMessage(messageLogin);
    cy.fixture('textContent').then((validations) => {
        login.getSubHeaderText().should('contain', validations.afterLoginPage);
      })
  });

  
});
