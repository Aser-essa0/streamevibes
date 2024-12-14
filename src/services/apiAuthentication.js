const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjBlZTNlNTljM2MzMTVkN2U4ZjE0MWU3Y2MzOWZhYSIsIm5iZiI6MTcyODQyNzIwOS4zMTY3MzUsInN1YiI6IjY3MDNmMDk4MTc0YTFkNTc3Mzc5NjI2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IdyUBDZsJjkDaIvesijUPHSdGIto-5ikACH6UtVYnN8",
  },
};

export async function getRequestToken() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/authentication/token/new",
      options,
    );
    const data = await response.json();
    return data?.request_token;
  } catch (err) {
    console.log(err);
  }
}

export async function createSession(requestToken) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/authentication/session/new?request_token=${requestToken}`,
      options,
    );
    const data = await response.json();
    return data.session_id;
  } catch (err) {
    console.log(err);
  }
}

export async function createGuestSession() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/authentication/guest_session/new`,
      options,
    );
    const data = await response.json();
    return data.guest_session_id;
  } catch (err) {
    console.log(err);
  }
}
