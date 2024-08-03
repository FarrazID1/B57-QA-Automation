@regression
Feature: Test Suite: Kasirdemo Login Test with TDD

# @all @positive @smoke
# Scenario Outline: TC01-POSITIVE => Admin add new category with Valid data:
#     Given I open create new category page
#     When admin input nama: <catName>
#     When admin input deskripsi: <catDesc>
#     When admin click simpan button
#     Then admin should see toast success message : <toast>

#     Examples:
#         | catName          | catDesc          | toast               |
#         | snack_1          | dummy            | item ditambahkan    |      
#         | snack_2          | dummy            | item ditambahkan    |


@all @negative
Scenario Outline: TC02-NEGATIVE => Admin add new category with Invalid data
    Given I open create new category page
    When admin input nama: <catName_Neg>
    When admin input deskripsi: <catDesc_Neg>
    When admin click simpan button
    Then admin should see warning message: <warningMessage>
   
    Examples:
      | catName_Neg    | catDesc_Neg         | warningMessage                       |
      | -              | mineral water       | "name" is not allowed to be empty    |

