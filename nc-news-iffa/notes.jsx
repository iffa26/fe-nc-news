// CORS error - Cross Origin Resource Sharing
// need to enable CORS in backend

// Login page?
// default user already logged in
// potentially add in a dropdown for some valid users

import * as api from "./api"; // import everything from api file
import Axios from "axios";

// api get request

const endpoint = genre ? `?genre_slug=${genre}` : "";

// login
// if someone od defualt logged in, need th store the logged in user in app:
state = { user: "jessjelly" }; // in app
// pass down to all compenents
// in post request take user from app

// voting

const handleClick = starDifference => {
  api.patchStars(game_id, starDifference);
};

<button onClick={() => handleClick(1)}>UP</button>;

// in api

export const patchStars = (game_id, starDifference) => {
  axios.patch(`url/api/${game_id}`), { star: starDifference };
};

// disabled = {true} in button tag do make button unclickable
