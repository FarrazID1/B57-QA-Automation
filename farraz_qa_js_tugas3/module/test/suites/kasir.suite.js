//! -- Define End To End (E2E) Test --
//Get Token, Get booking, Update booking

//TODO 1: import libraries & modules that needed
import { expect } from 'chai';

import { createToken } from '../functions/1a_createToken.spec.js';
import { deleteToken } from '../functions/1b_deleteToken.spec.js';
import { updateToken } from '../functions/1c_refreshToken.spec.js';

import { getAllUsers } from '../functions/2b_getAllUsers.spec.js';
import { createUser } from '../functions/2a_createUser.spec.js';
import { updateUsers } from '../functions/2c_updateUser.spec.js';
import { deleteUser } from '../functions/2d_deleteUser.spec.js';

import { createUnit } from '../functions/3a_createUnit.spec.js';
import { getAllUnits } from '../functions/3b_getAllUnits.spec.js';

import promptSync from 'prompt-sync';

//TODO 3.1: describe the test suite (E2E)
describe('Suite 1: End To End - KasirAja', () => {
  //define variable -- to store accessToken
  let accessToken;
  let refreshToken;

  let admin_Id;
  let user1_Id;
  let user2_Id;
  let user3_Id;
  let user4_Id;

  let selected_Id;

  //For Simulation: if using input prompt - to get userId
  const prompt = promptSync();
  let prompt_userId;

  let unit1_Id;
  let unit2_Id;

  //TODO 3.2: then set 'it' (test case)

  //TODO: Test case 1 - endpoint: POST (1)
  it('Test 1: Positive - Success -> POST: Login + Get Token & Id', async () => {
    //call function createToken1() -- then, store response value
    const response = await createToken();

    accessToken = response.body.data.accessToken;
    refreshToken = response.body.data.refreshToken;
    admin_Id = response.body.data.user.id;

    //add assertion script (expect) - use 'chai'
    expect((await response).status).to.equal(201); //201 - created
    console.log(
      'Assertion 1: POST - Response Status => ',
      (await response).status
    );

    //display return value: accessToken, refreshToken, admin_Id
    console.log('accessToken => ', accessToken);
    console.log('refreshToken => ', refreshToken);
    console.log('admin_Id => ', admin_Id);
  });

  //TODO: Test case 2 - endpoint: DEL (1)
  it('Test 2: Positive - Success -> DEL: Logout Token', async () => {
    //store return value - from function deleteToken()
    const responseX = await deleteToken(accessToken, refreshToken);
    let message = responseX.body.message;

    //TODO: add assertion script (expect) - use 'chai'
    expect((await responseX).status).to.equal(200); //200 - ok
    console.log(
      'Assertion 2: DEL - Response Status => ',
      (await responseX).status
    );
    //message
    console.log('DEL: message => ', `${message}`);
  });

  //TODO: Test case 3 - endpoint: PUT (1)
  it('Test 3: Positive - Success -> PUT: Update (Refresh) Token', async () => {
    //store return value - from function updateToken()
    const responseX = await updateToken();

    //store new (update) accessToken - from function updateToken()
    accessToken = responseX.body.data.accessToken;

    //TODO: add assertion script (expect) - use 'chai'
    expect((await responseX).status).to.equal(200); //200 - ok
    console.log(
      'Assertion 3: PUT - Response Status => ',
      (await responseX).status
    );
    //display return value: accessToken
    console.log('(update) accessToken => ', accessToken);
  });

  //TODO: Test case 4 - endpoint: POST (2)
  it('Test 4: Positive - Success -> POST: Create New User', async () => {
    const response = await createUser(accessToken, refreshToken);
    let message = response.body.message;

    //TODO: add assertion script (expect) - use 'chai'
    expect((await response).status).to.equal(201); //201 - created
    console.log(
      'Assertion 4: POST - Response Status => ',
      (await response).status
    );
    //display return value: message
    console.log('POST: message => ', `${message}`);
  });

  //TODO: Test case 5 - endpoint: GET (1)
  it('Test 5: Positive - Success -> GET: Get All Users', async () => {
    const response = await getAllUsers(accessToken, refreshToken);

    //TODO: add assertion script (expect) - use 'chai'
    expect((await response).status).to.equal(200); //200 - ok
    console.log(
      'Assertion 5: GET - Response Status => ',
      (await response).status
    );
    //display return value: all users
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

  //TODO: Test case 6 - endpoint: POST (2)
  it('Test 6: Positive - Success -> PUT: Update User', async () => {
    //get userId - to be updated
    const selected_Id = user1_Id;
    console.log('Selected-User Id => ', selected_Id);

    //! -- if we use prompt, it will get =>  Error: Timeout of 2000ms exceeded
    // const prompt_userId = await prompt('Enter User Id: ');
    // const selected_Id = String(prompt_userId);
    // console.log('Selected-User IdX => ', String(prompt_userId));

    const response = await updateUsers(accessToken, selected_Id);
    let message = response.body.message;

    //TODO: add assertion script (expect) - use 'chai'
    expect((await response).status).to.equal(200); //200 - ok
    console.log(
      'Assertion 6: PUT - Response Status => ',
      (await response).status
    );
    //display return value: message
    console.log('PUT: message => ', `${message}`);
  });

  //TODO: Test case 7 - endpoint: DEL (2)
  it('Test 7: Positive - Success -> DEL: Delete User', async () => {
    //store return value - from function deleteToken()
    const responseX = await deleteUser(accessToken, user1_Id);
    let message = responseX.body.message;

    //TODO: add assertion script (expect) - use 'chai'
    expect((await responseX).status).to.equal(200); //200 - ok
    console.log(
      'Assertion 7: DEL - Response Status => ',
      (await responseX).status
    );
    //display return value: message
    console.log('DEL: message => ', `${message}`);
  });

  //TODO: Test case 8 - endpoint: POST (3)
  it('Test 8: Positive - Success -> POST: Create New Unit', async () => {
    const response = await createUnit(accessToken, refreshToken);
    let message = response.body.message;

    //TODO: add assertion script (expect) - use 'chai'
    expect((await response).status).to.equal(201); //201 - created
    console.log(
      'Assertion 8: POST - Response Status => ',
      (await response).status
    );
    //display return value: message
    console.log('POST: message => ', `${message}`);
  });

  //TODO: Test case 9 - endpoint: GET (2)
  it('Test 9: Positive - Success -> GET: Get All Units', async () => {
    const response = await getAllUnits(accessToken, refreshToken);

    //TODO: add assertion script (expect) - use 'chai'
    expect((await response).status).to.equal(200); //200 - ok
    console.log(
      'Assertion 9: GET - Response Status => ',
      (await response).status
    );
    //display return value: all units
    console.log((await response).body.data.units);

    //store return value: unit1_Id, unit2_Id
    unit1_Id = (await response).body.data.units[0].id;
    unit2_Id = (await response).body.data.units[1].id;

    //display return value: unit1_Id, unit2_Id
    console.log('unit1-Id => ', unit1_Id);
    console.log('unit2-Id => ', unit2_Id);
  });
});
