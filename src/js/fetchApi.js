// import "regenerator-runtime";

const fetch = require("node-fetch");
const data = { "name" : "Bunny Hop" };

async function postGameApi() {
    // creates the game in the API and get the ID 
  const response = await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games",{
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
  });

  const result = response.json();

  result.then(res => console.log(res));
}

async function getApi() {
    let serverRes;
    // gets the scores of specific game with the given ID
    const response = await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Z3N1DiIVq4C11F2FgrTg/scores",
    {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    });
    const result = response.json();
    result.then((res) => { 
        // console.log(res)
        serverRes = res;
    }).catch((err) => console.log("OOPS! --> " + err));
    return result;
};

async function scorePostApi(user, score) {
    const data = {
        user,
        score,
    }
    console.log(data);
  const response = await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Z3N1DiIVq4C11F2FgrTg/scores",
    {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    }
  );
  const result = response.json();
  result.then((res) => console.log(res));
}

// console.log(scorePostApi('Abunuwasi', 900));
// console.log(getApi());

// console.log(getApi())

export { getApi, scorePostApi }