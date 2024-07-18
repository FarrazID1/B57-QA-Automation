//!-- EX: Define 'Reusable Functions' for API automation --
//!-- using ESM JS (import/export) --

//TODO 1: import library & module that needed (supertest)
import request from 'supertest';

//TODO 2: import set 'baseUrl' & other params - as environment variable
import { baseUrl } from '../../data/configData.js';

//TODO 3: define function - to create NEW accessToken
async function createToken2() {
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

  return response;
}

//? -- if using existing token in 'kasir.suite.js' -- use params: accessToken, refreshToken
// export async function updateToken(accessToken, refreshToken) {

//? -- but, if it needed to create NEW accessToken -- use below function
export async function updateToken() {
  const responseX = await createToken2();

  let accessToken = responseX.body.data.accessToken;
  let refreshToken = responseX.body.data.refreshToken;

  //content of request body
  const payload2 = {
    refreshToken: `${refreshToken}`,
  };

  //PUT method - to update token
  const response = await request(baseUrl)
    .put('/authentications') //endpoint
    .send(payload2) //request body
    .set('Authorization', `Bearer ${accessToken}`); //header

  return response;
}
