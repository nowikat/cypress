import LoginPage from '../pages/login.js';
import HomePage from '../pages/HomePage.js';

describe('Login and Logout Tests', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  it('Test 1: Login and Logout with User888', () => {
    loginPage.visit();
    loginPage.fillEmail('user888@gmail.com');
    loginPage.fillPassword('1234567890');
    loginPage.submit();

    homePage.openNavigationMenu();
    homePage.clickLogout();

    cy.url().should('include', '/account/login');
  });

  it('Test 2: Login and Logout with TestowyQA', () => {
    loginPage.visit();
    loginPage.fillEmail('testowyqa@qa.team');
    loginPage.fillPassword('QA!automation-1');
    loginPage.submit();

    homePage.openNavigationMenu();
    homePage.clickLogout();

    cy.url().should('include', '/account/login');
  });
});
