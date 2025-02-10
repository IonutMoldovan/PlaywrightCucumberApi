Feature: API Testing for Rijksmuseum

  Scenario: Retrieve collection successfully
    Given I have the API URL and key
    When I make a GET request to retrieve the collection
    Then the response status should be 200
    And the response should contain a list of art objects

  Scenario: Retrieve details of a specific object
    Given I have the API URL and key
    When I make a GET request for the object with object number "SK-C-5"
    Then the response status should be 200
    And the response should contain the object number "SK-C-5"

  Scenario: Handle invalid object number
    Given I have the API URL and key
    When I make a GET request for the object with object number "INVALID123"
    Then the response status should be 200
    And the response body should indicate an error

  Scenario: Handle missing API key
    Given I have the API URL
    When I make a GET request with missing API key
    Then the response status should be 401
