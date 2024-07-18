//!-- EX: Define 'Reusable Functions' for API automation --
//!-- using ESM JS (import/export) --

//TODO 1: import library & module that needed (supertest)
import request from 'supertest';

//TODO 2: import set 'baseUrl' & other params - as environment variable
import { baseUrl } from '../../data/configData.js';

// const baseUrl = 'https://kasir-api.belajarqa.com';

//TODO 3: define function - to create NEW accessToken
export async function createToken() {
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

//TODO 4: export all above return values - as object (JSON format)
