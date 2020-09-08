import 'regenerator-runtime';

const fetch = require('node-fetch');

async function scorePostApi(user, score) {
  const data = {
    user,
    score,
  };
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Z3N1DiIVq4C11F2FgrTg/scores',
    {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    },
  );
  return response.json();
}

// eslint-disable-next-line import/prefer-default-export
export { scorePostApi };