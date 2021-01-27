/* eslint-env node */
const fetch = require('node-fetch');

const CORS = {
  statusCode: 204,
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT',
  },
  body: {},
};

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return CORS;
  }

  const code = event.queryStringParameters.code;

  let res = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  return {
    statusCode: res.status,
    body: JSON.stringify(await res.json()),
  };
};
