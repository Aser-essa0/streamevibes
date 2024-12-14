const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjBlZTNlNTljM2MzMTVkN2U4ZjE0MWU3Y2MzOWZhYSIsIm5iZiI6MTcyODQyNzIwOS4zMTY3MzUsInN1YiI6IjY3MDNmMDk4MTc0YTFkNTc3Mzc5NjI2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IdyUBDZsJjkDaIvesijUPHSdGIto-5ikACH6UtVYnN8",
  },
};

export async function getShowData(id) {
  try {
    if (id) {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
        options,
      );
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getShows() {
  try {
    const allData = [];
    for (let i = 10; i <= 25; i++) {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${i}&sort_by=popularity.desc`,
        options,
      );
      const data = await response.json();
      allData.push(...data.results);
    }
    const moviesData = allData.map((el) => getShowData(el.id));
    const data = Promise.all(moviesData).then((respones) => {
      return respones.filter(
        (el) =>
          !el.genres
            .map(
              (el) =>
                el.name === "Drama" ||
                el.name === "Romance" ||
                el.name === "Documentary",
            )
            .includes(true),
      );
    });

    return data;
  } catch (err) {
    console.log(err);
  }
}

// export async function getShows() {
//   try {
//     const response = await fetch(
//       `https://00ceb0d59d1b4417ace907b8129068c0.api.mockbin.io/`,
//     );
//     const data = await response.json();
//     const filteredData = data.filter(
//       (el) =>
//         !el.genres
//           .map(
//             (el) =>
//               el.name === "Drama" ||
//               el.name === "Comedy" ||
//               el.name === "Romance" ||
//               el.name === "Soap",
//           )
//           .includes(true),
//     );
//     console.log(filteredData);
//     return filteredData;
//   } catch (err) {
//     console.log(err);
//   }
// }
