
const locators = {
  header: 'h2',
  subHeader: '.subheader',
  usernameInput: '#username',
  passwordInput: '#password',
  loginButton: 'button[type="submit"]',
  logoutButton: '.button.secondary.radius',
  flash: '#flash',
};

class Login {

    getSubHeaderText(){
        return cy.get(locators.subHeader).invoke('text');
    }

    assertHeader(pageHeader){
        return cy.get(locators.header).should('contain', pageHeader);
    }

    getFlashMessage(message){
        return cy.get(locators.flash).invoke('text').should('contain', message);
    }

    clickLogout(){
        return cy.get(locators.logoutButton).click();
    }

    typeUsername(username){
        return cy.get(locators.usernameInput).clear().type(username);
    }

    typePassword(password){
        return cy.get(locators.passwordInput).clear().type(password);
    }

    clickLogin(){
        return cy.get(locators.loginButton).click();
    }
}

module.exports = Login;