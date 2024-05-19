class HomePage {
    openNavigationMenu() {
      cy.get('#open-navigation-menu-mobile').click();
    }
  
    clickLogout() {
      cy.contains('Log out').click();
    }
  }
  
  export default HomePage;
  