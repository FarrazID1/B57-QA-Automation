@regression @TDD
Feature: Test Suite: Kasirdemo Login Tests with TDD

@all @positive @smoke
Scenario: TC01-POSITIVE => Login successfully with valid credentials
    Given I open Kasirdemo website
    When I login with valid credentials
    Then I should be on the dashboard page

# @all @negative
# Scenario: Verify login failed with Invalid Email
#     Given I open Kasirdemo website
#     When I login with invalid Email format
#     Then I should see an error message
    

@all @negative
    Scenario: TC02-NEGATIVE => Verify login failed with invalid Password
    Given I open Kasirdemo website
    When I login with invalid Password
    Then I should see an error message

