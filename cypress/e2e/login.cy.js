describe('Login and Logout Tests', () => {
  it('Test 1: Login and Logout with User888', () => {
    // a. Test otworzy stronę https://www.edu.goit.global/account/login 
    cy.visit('https://www.edu.goit.global/account/login');

    // b. Użyj polecenia logowania.
    // Polecenie odnajdzie pole email i wpisze email user888@gmail.com.
    cy.get('input[name="email"]').type('user888@gmail.com');

    // Wprowadzi hasło 1234567890
    cy.get('input[name="password"]').type('1234567890');

    // Wciśnie przycisk Log in
    cy.get('button[type="submit"]').contains('Log in').click();

    // Znajdzie przycisk w prawym górnym rogu
    cy.get('#open-navigation-menu-mobile').click();

    // Otwiera menu strony
    cy.get('#open-navigation-menu-mobile').should('be.visible');

    // W menu znajduje przycisk Log out
    cy.contains('Log out').click();

    // Klika na niego i wraca do strony logowania
    cy.url().should('include', '/account/login');
  });

  it('Test 2: Login and Logout with TestowyQA', () => {
    // a. W teście wyświetli się strona https://www.edu.goit.global/account/login 
    cy.visit('https://www.edu.goit.global/account/login');

    // b. Użyj własnego polecenia logowania.
    // Polecenie odnajdzie pole email i wpisze email testowyqa@qa.team
    cy.get('input[name="email"]').type('testowyqa@qa.team');

    // Wprowadzi hasło QA!automation-1.
    cy.get('input[name="password"]').type('QA!automation-1');

    // Wciśnie przycisk Log in.
    cy.get('button[type="submit"]').contains('Log in').click();

    // Znajdzie przycisk w prawym górnym rogu
    cy.get('#open-navigation-menu-mobile').click();

    // c. W menu znajduje przycisk Log out
    cy.contains('Log out').click();

    // d. Klikamy na niego i wracamy do strony logowania
    cy.url().should('include', '/account/login');
  });
});
