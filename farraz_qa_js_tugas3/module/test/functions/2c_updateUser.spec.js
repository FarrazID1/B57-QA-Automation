import request from 'supertest';
import { baseUrl } from '../../data/configData.js';

export async function updateUsers(accessToken, userId) {
  //content of request body
  const payload = {
    name: 'Farraz',
    email: 'farraz02@gmail.com',
    password: 'p12345',
  };

  //send request
  const response = await request(baseUrl)
    // .put('/users/' + userId) //endpoint
    .put(`/users/${userId}`) //endpoint
    .send(payload) //request body
    .set('Authorization', `Bearer ${accessToken}`); //header

  return response;
}
