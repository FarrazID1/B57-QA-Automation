//!-- EX: API automation - using ES module JS --

//TODO 1: import library & module that needed (supertest, chai)
import request from 'supertest';
import { expect } from 'chai';

import { createToken } from '../functions/03_createToken.spec.js'; //TODO: --next chapter

//TODO 2: set 'baseUrl' & other params
const baseUrl = 'https://restful-booker.herokuapp.com';

//TODO 3: 'describe' the test suite/scenario - Positive / Negative
describe('Suite : Create Token Scenario', () => {
  //define variable -- to store token
  let token;
  // let importToken;
  let bookingId;

  //--test case 1: POST Create Token - use 'async-await' (asynchronous function)
  it('Test 1: Positive - Success Get Token', async () => {
    const payload = {
      username: 'admin',
      password: 'password123',
    };
    //send request
    const response = await request(baseUrl)
      .post('/auth') //endpoint
      .send(payload) //request body
      .set('Content-Type', 'application/json'); //header

    expect((await response).status).to.equal(200);
    //--method 1: display token value
    console.log((await response).body); // {token: '...'}

    //--method 2: display token value
    token = (await response).body.token;
    console.log('1st auth > token =>', await token); // {token => ...}
  });

  //test case 2: PUT Implement Token
  it('Test 2: Positive - Success Implement Token', async () => {
    //PUT method - to update booking
    const response = await request(baseUrl)
      .put('/booking/' + bookingId)
      .set('Cookie', token);

    console.log('1st token > stored in cookie =>', token);
  });

  //test case 3: call function (createToken) - import token value
  it('Test 3: Positive - Success Update token', async () => {
    const importToken = await createToken();
    // console.log(await importToken);

    console.log('2nd auth (function) > refresh (update) token =>', importToken);
  });

  //--Flow CRUD di API AUTOMATION--
  //It Get Token
  //It Create
  //It Get
  //It Delete
});
