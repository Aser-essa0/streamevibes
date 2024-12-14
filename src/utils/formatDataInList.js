function formatDataInList(data = []) {
  function filter(data = [], type) {
    const result = data
      .filter((el) =>
        el?.genres
          ?.map((el) => el.name.toLowerCase() === type.toLowerCase())
          .includes(true),
      )
      .slice(4, 8);
    if (result.length === 4) return result;
    return [];
  }

  let dataGenres = [
    { name: "Action", data: filter(data, "Action") },
    { name: "Adventure", data: filter(data, "Adventure") },
    { name: "Animation", data: filter(data, "Animation") },
    { name: "Comedy", data: filter(data, "Comedy") },
    { name: "Crime", data: filter(data, "Crime") },
    { name: "Drama", data: filter(data, "Drama") },
    { name: "History", data: filter(data, "History") },
    { name: "Fantasy", data: filter(data, "Fantasy") },
    { name: "Family", data: filter(data, "Family") },
    { name: "Horror", data: filter(data, "Horror") },
    { name: "Music", data: filter(data, "Music") },
    { name: "Mystery", data: filter(data, "Mystery") },
    { name: "Western", data: filter(data, "Western") },
    { name: "War", data: filter(data, "War") },
    { name: "War & Politics", data: filter(data, "War & Politics") },
    { name: "Romance", data: filter(data, "Romance") },
    { name: "Action & Adventure", data: filter(data, "Action & Adventure") },
    { name: "Documentary", data: filter(data, "Documentary") },
    { name: "Kids", data: filter(data, "Kids") },
    { name: "Documentary", data: filter(data, "Documentary") },
    { name: "Soap", data: filter(data, "Soap") },
  ];

  dataGenres = dataGenres.filter((el) => el.data.length === 4);

  return dataGenres;
}

export { formatDataInList };
