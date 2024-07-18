//!-- EX: API automation - using ES module JS --

//TODO 1: import library & module that needed (supertest, chai)
import request from 'supertest';
import { expect } from 'chai';

//TODO 2: set 'baseUrl' & other params
const baseUrl = 'https://restful-booker.herokuapp.com';

//TODO 3: 'describe' the test suite/scenario - Positive / Negative
describe('Suite: Create Booking Scenario', () => {
  //--test case 1: POST Create Booking - use 'async-await' (asynchronous function)
  //todo 3.2: then set 'it' (test case)
  it('Test 1: Positive - Success Create Booking', async () => {
    const payload = {
      firstname: 'Jim',
      lastname: 'Brown',
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: '2024-01-01',
        checkout: '2025-01-02',
      },
      additionalneeds: 'Breakfast',
    };
    //send request
    const response = await request(baseUrl)
      .post('/booking') //endpoint
      .send(payload) //request body
      .set('Content-Type', 'application/json'); //header

    //TODO 3.3: add assertion script (expect) - use 'chai'
    expect((await response).status).to.equal(418);
    console.log((await response).body);
  });
});
