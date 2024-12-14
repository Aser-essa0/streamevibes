const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjBlZTNlNTljM2MzMTVkN2U4ZjE0MWU3Y2MzOWZhYSIsIm5iZiI6MTcyODQyNzIwOS4zMTY3MzUsInN1YiI6IjY3MDNmMDk4MTc0YTFkNTc3Mzc5NjI2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IdyUBDZsJjkDaIvesijUPHSdGIto-5ikACH6UtVYnN8",
  },
};

export async function GetSeasonEpisodes(id, seasonNumber, episodesCount) {
  try {
    if (seasonNumber && episodesCount && seasonNumber !== 0) {
      const dataArray = [];
      for (let i = 1; i < episodesCount; i++) {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}/episode/${i}?language=en-US`,
          options,
        );
        const data = await response.json();
        dataArray.push(data);
      }
      return dataArray;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getEpisodes({ id, seasonData }) {
  const data = await seasonData?.map(
    async (el) =>
      await GetSeasonEpisodes(id, el.season_number, el.episode_count),
  );
  const dataEpisode = await Promise.all(data).then((values) => {
    return values;
  });

  return dataEpisode;
}
