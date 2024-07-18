//!-- EX: API automation - using ES module JS --

//TODO 1: import library & module that needed (supertest, chai)
import request from 'supertest';
import { expect } from 'chai';

import { getBooking } from '../functions/01_getBooking.spec.js'; //TODO: --next chapter

//TODO 2: set 'baseUrl' & other params
const baseUrl = 'https://restful-booker.herokuapp.com';

//--data id: 1
// const paramFirstName = 'Eric';
// const paramLastName = 'Ericsson';
// const bookingId = '1';

//--data id: 2
const paramFirstName = 'Susan';
const paramLastName = 'Smith';
const bookingId = '2';

//TODO 3.1: 'describe' the test suite/scenario - Positive / Negative
//* -- describe > for test scenario
//* -- it > for test case
describe('Suite 1: Get Booking Scenario', () => {
  //TODO 3.2: then set 'it' (test case)
  //--test case 1: GET ALL BOOKING IDs - use 'async-await' (asynchronous function)
  it('Test 1: Positive - success get all booking ids', async () => {
    let response = await request(baseUrl) //base url
      .get('/booking'); //endpoint

    //TODO 3.3: add assertion script (expect) - use 'chai'
    //--check at: https://www.chaijs.com/api/bdd/#method_equal
    expect((await response).status).to.equal(200);
    // console.log((await response).body); //-- it will display all booking ids in console
  });

  //--test case 2: GET BOOKING WITH PARAM
  it('Test 2: Positive - success get all booking with param', async () => {
    let response = await request(baseUrl) //base url
      .get(
        `/booking` + `?firstname=${paramFirstName}&lastname=${paramLastName}`
      ); //endpoint with query params

    expect((await response).status).to.equal(200);
    // console.log((await response).body);
  });

  //--test case 3: GET BOOKING WITH ID
  it('Test 3: Positive - success get booking with id', async () => {
    let response = await request(baseUrl) //base url
      .get(`/booking/${bookingId}`); //endpoint with id path

    expect((await response).status).to.equal(418);
    console.log((await response).body);
  });
});

//TODO 4: 'describe' the test suite/scenario - Positive / Negative - by Function
describe('Suite 2: Get Booking Scenario - by Function', () => {
  it('Test: Positive - success get booking all ids (by function)', async () => {
    const response = await getBooking.all();
    console.log((await response).status);

    //add assertion script (expect) - use 'chai'
    expect((await response).status).to.equal(200);
    console.log((await response).body); //-- it will display all booking ids in console
  });

  it('Test: Positive - success get booking by id (by function)', async () => {
    const response = await getBooking.id(bookingId);
    console.log((await response).status);

    //add assertion script (expect) - use 'chai'
    expect((await response).status).to.equal(418);
    console.log((await response).body);
  });
});
