class LoginPage {
    visit() {
      cy.visit('https://www.edu.goit.global/account/login');
    }
  
    fillEmail(email) {
      cy.get('input[name="email"]').type(email);
    }
  
    fillPassword(password) {
      cy.get('input[name="password"]').type(password);
    }
  
    submit() {
      cy.get('button[type="submit"]').contains('Log in').click();
    }
  }
  
  export default LoginPage;
  