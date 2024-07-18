//!-- EX: API automation - using Common JS --

//TODO 1: import library & module that needed (supertest, chai)
const request = require('supertest');
const { expect } = require('chai');

const baseUrl = 'https://restful-booker.herokuapp.com';

//Describe the test suite
//* -- describe > test scenario
//* -- it > test case
describe('Get All Booking', () => {
  it('Positive - success get all bookings', () => {
    const response = request(baseUrl) //request library HTTP AJAX (via supertest)
      .get('/booking'); //test - endpoint

    //Assertion - use chai : expect()
    expect(response.status).to.equal(200);
  });
});
