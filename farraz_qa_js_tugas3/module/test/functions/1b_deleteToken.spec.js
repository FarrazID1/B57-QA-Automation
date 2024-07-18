import request from 'supertest';
import { baseUrl } from '../../data/configData.js';

export async function deleteToken(accessToken, refreshToken) {
  //content of request body
  const payload = {
    refreshToken: `${refreshToken}`,
  };

  //send request
  const response = await request(baseUrl)
    .delete('/authentications') //endpoint
    .send(payload) //request body
    .set('Authorization', `Bearer ${accessToken}`); //header

  return response;
}
