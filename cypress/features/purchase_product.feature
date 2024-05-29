Feature: Purchase a product on reserved.com

  Scenario: Successful search and purchase of a product
    Given the user is on the reserved.com homepage
    When the user enters "dress" into the search bar
    And the user clicks the search button
    Then the search results page should be displayed
    And the user should see a list of dresses

  Scenario: Selecting a product and adding to cart
    Given the user is on the search results page
    When the user clicks on a dress from the list
    Then the product detail page should be displayed
    And the user should see the product name, price, and available sizes
    When the user selects a size
    And the user clicks the "Add to cart" button
    Then the product should be added to the cart
    And the user should see a confirmation message

  Scenario: Proceeding to checkout
    Given the user has a product in the cart
    When the user clicks on the cart icon
    Then the cart page should be displayed
    And the user should see the product in the cart
    When the user clicks the "Proceed to checkout" button
    Then the checkout page should be displayed

  Scenario: Completing the purchase
    Given the user is on the checkout page
    When the user enters valid shipping information
    And the user enters valid payment information
    And the user reviews the order
    And the user clicks the "Place order" button
    Then the order confirmation page should be displayed
    And the user should see a confirmation message with the order details

  Scenario: Validating the purchase
    Given the user is on the order confirmation page
    When the user checks the order details
    Then the order should include the purchased product
    And the shipping information should be correct
    And the payment information should be correct
