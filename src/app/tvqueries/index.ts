"server-only";

export async function getTv() {
  try {
    const req = await fetch(
      "https://api.kinopoisk.dev/v1.4/movie?&type=tv-series",
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
