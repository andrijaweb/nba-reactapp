const BASE_URL = "https://api.sportsdata.io/v3/nba/scores/json";
const API_KEY = "1b1692b63f9d497aab312a0b0efbed7a";

export async function getNews() {
  try {
    const res = await fetch(`${BASE_URL}/News?key=${API_KEY}`);
    if (!res.ok) throw new Error("Error while trying to fetch News");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllTeams() {
  try {
    const res = await fetch(`${BASE_URL}/AllTeams?key=${API_KEY}`);
    if (!res.ok) throw new Error("Error while trying to fetch AllTeams");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
