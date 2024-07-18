import request from 'supertest';
import { baseUrl } from '../../data/configData.js';

export async function deleteUser(accessToken, userId) {
  //send request
  const response = await request(baseUrl)
    // .delete('/users' + userId)
    .delete(`/users/${userId}`)
    .set('Authorization', `Bearer ${accessToken}`);

  return response;
}
