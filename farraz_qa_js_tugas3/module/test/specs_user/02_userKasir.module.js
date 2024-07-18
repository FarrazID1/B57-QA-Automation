//TODO 1: import library & module that needed (supertest, chai)
import request from 'supertest';
import { expect } from 'chai';

import { createToken } from '../functions/1a_createToken.spec.js';
// import { authAdmin } from '../functions/01_createToken.spec.js';

//TODO 2: set 'baseUrl' & other params
import { baseUrl } from '../../data/configData.js';
// const baseUrl = 'https://kasir-api.belajarqa.com';

//TODO 3.1: 'describe' the test suite/scenario - Positive
describe('Suite : Get User (Kasir) Scenario', () => {
  let accessToken;
  let refreshToken;
  let admin_Id;
  let user1_Id;
  let user2_Id;
  let user3_Id;
  let user4_Id;

  //todo 3.2: then set 'it' (test case)
  it('Test 1: Positive - Success -> Get Token', async () => {
    //call function
    const response = await createToken();

    //store return value (token) - from function createToken()
    accessToken = (await response).body.data.accessToken;
    refreshToken = (await response).body.data.refreshToken;

    console.log('accessToken => ', accessToken);
    console.log('refreshToken => ', refreshToken);
    console.log('admin_Id => ', admin_Id);
  });

  it('Test 2: Positive - Success -> GET: Get All Users', async () => {
    const response = await request(baseUrl)
      .get('/users')
      .set('Authorization', `Bearer ${accessToken}`);

    //TODO: add assertion script (expect) - use 'chai'
    expect((await response).status).to.equal(200); //200 - ok
    console.log(
      'Assertion 1: GET - Response Status => ',
      (await response).status
    );
    console.log((await response).body.data.users);

    //store return value: user1_Id, user2_Id, user3_Id, user4_Id
    user1_Id = (await response).body.data.users[0].id;
    user2_Id = (await response).body.data.users[1].id;
    user3_Id = (await response).body.data.users[2].id;
    user4_Id = (await response).body.data.users[3].id;

    //display return value: user1_Id, user2_Id, user3_Id, user4_Id
    console.log('user1-Id => ', user1_Id);
    console.log('user2-Id => ', user2_Id);
    console.log('user3-Id => ', user3_Id);
    console.log('user4-Id => ', user4_Id);
  });

  it('Test 3: Positive - Success -> DEL: Delete User by Id', async () => {
    const response = await request(baseUrl)
      .delete(`/users/${user1_Id}`)
      .set('Authorization', `Bearer ${accessToken}`);

    let message = response.body.message;

    //TODO: add assertion script (expect) - use 'chai'
    expect((await response).status).to.equal(200); //200 - ok
    console.log(
      'Assertion 2: DEL - Response Status => ',
      (await response).status
    );
    console.log('Assertion 2: DEL - Response Message => ', message);
  });
});
