@regression
Feature: Test Suite: Kasirdemo Login Test with TDD

@all @negative
    Scenario: TC01-NEGATIVE => Verify login failed with invalid Email
    Given I open Kasirdemo website
    When I login with invalid Email
    Then I should see an error message
  
@all @negative
Scenario Outline: TC02-NEGATIVE => Verify login failed with Invalid credentials 
    Given I open Kasirdemo website
    When I login with email: <email> and password: <password>
    Then It shows an alert message: <expectedErrorMessage>

    Examples:
        | email                   | password            | expectedErrorMessage               |
        | invalid_email           | farraz123           | "email" must be a valid email      |
        | admin.farraz@gmail.com  | invalid_password    | Kredensial yang Anda berikan salah |

@all @positive @smoke
Scenario: TC03-POSITIVE => Login successfully with Valid credentials
    Given I open Kasirdemo website
    When I login with valid credentials
    Then I should be on the dashboard page
