"server-only";

export async function getTr() {
  try {
    const req = await fetch(
      "https://api.kinopoisk.dev/v1.4/movie?rating.imdb=8-10",
      {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": "SA5NW37-EH0469V-K4GRWFF-QMB3B06",
        },
      }
    );
    const res = await req.json();
    return res;
  } catch (error) {
    return error;
  }
}
