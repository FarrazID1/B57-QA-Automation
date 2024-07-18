import request from 'supertest';
import { baseUrl } from '../../data/configData.js';

export async function createUser(accessToken, refreshToken) {
  //content of request body
  const payload = {
    name: 'Dummy user3',
    email: 'dummy.user3@gmail.com',
    password: '333333',
  };

  //send request
  const response = await request(baseUrl)
    .post('/users') //endpoint
    .send(payload) //request body
    .set('Authorization', `Bearer ${accessToken}`); //header

  return response;
}
