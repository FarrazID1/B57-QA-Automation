//TODO 1: import library & module that needed (supertest, chai)
import request from 'supertest';
import { expect } from 'chai';

//TODO 2: set 'baseUrl' & other params
// import { baseUrl } from '../../data/configData.js';
const baseUrl = 'https://kasir-api.belajarqa.com';

//TODO 3.1: 'describe' the test suite/scenario - Positive
describe('Suite : Create Auth-Token (Kasir) Scenario', () => {
  //define variable -- to store accessToken
  let accessToken;
  let refreshToken;
  let userId;

  //TODO 3.2: then set 'it' (test case)
  //?--use 'async-await' (asynchronous function)
  //--test case 1: POST User Login + Create Token
  it('Test 1: Positive - Success -> POST: Login + Get Token & Id', async () => {
    //! -- scope: function createToken() --
    //content of request body
    const payload = {
      email: 'farraz02@gmail.com',
      password: 'p12345',
    };

    //send request
    const response = await request(baseUrl)
      .post('/authentications') //endpoint
      .send(payload) //request body
      .set('Content-Type', 'application/json'); //header

    //! -- scope: (test suite) --
    //TODO 3.3: add assertion script (expect) - use 'chai'
    expect((await response).status).to.equal(201); //201 - created
    console.log('Response Status => ', (await response).status);
    //Response Status =>  201

    //--display accessToken value
    accessToken = (await response).body.data.accessToken;
    console.log('1st auth (admin) > accessToken =>', await accessToken);
    // {accessToken => ...}

    //--display refreshToken value
    refreshToken = (await response).body.data.refreshToken;
    console.log('1st auth (admin) > refreshToken =>', await refreshToken);
    // {refreshToken => ...}

    //--display userId value
    userId = (await response).body.data.user.id;
    console.log('1st auth (admin) > userId =>', await userId);
  });

  it('Test 2: Positive - Success -> DEL: Logout Token', async () => {
    //content of request body
    const payload = {
      refreshToken: `${refreshToken}`,
    };
    //send request
    const response = await request(baseUrl)
      .delete('/authentications')
      .send(payload) //request body
      .set('Authorization', `Bearer ${accessToken}`);

    //TODO: add assertion script (expect) - use 'chai'
    expect((await response).status).to.equal(200); //200 - ok
    console.log('Response Status => ', (await response).status);
    //Response Status =>  200

    console.log((await response).body);
  });

  it('Test 3: Positive - Success -> PUT: Refresh (update) Token', async () => {
    //content of request body - for request: POST (response1)
    const payload1 = {
      email: 'farraz02@gmail.com',
      password: 'p12345',
    };

    //send request
    const response1 = await request(baseUrl)
      .post('/authentications') //endpoint
      .send(payload1) //request body
      .set('Content-Type', 'application/json'); //header

    //content of request body - for request: PUT (update) refreshToken
    const payload2 = {
      refreshToken: `${refreshToken}`,
    };

    //PUT method - to update booking
    const response2 = await request(baseUrl)
      .put('/authentications') //endpoint
      .send(payload2) //request body
      .set('Authorization', `Bearer ${accessToken}`); //header
    // .set('Cookie', accessToken); //header

    accessToken = (await response1).body.data.accessToken;
    console.log('2nd auth (admin) > accessToken =>', await accessToken); // {accessToken => ...}

    //--display refreshToken value
    refreshToken = (await response1).body.data.refreshToken;
    console.log('2nd auth (admin) > refreshToken =>', await refreshToken);
  });
});
