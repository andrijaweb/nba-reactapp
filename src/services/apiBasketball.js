const BASE_URL = "https://api.sportsdata.io/v3/nba/stats/json/";
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
    const res = await fetch(`${BASE_URL}/teams?key=${API_KEY}`);
    if (!res.ok) throw new Error("Error while trying to fetch AllTeams");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getBoxScores(date) {
  try {
    const res = await fetch(`${BASE_URL}/BoxScores/${date}?key=${API_KEY}`);
    if (!res.ok) throw new Error("Error while trying to fetch BoxScores");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getTeamSeasonStats() {
  try {
    const res = await fetch(`${BASE_URL}/TeamSeasonStats/2024?key=${API_KEY}`);
    if (!res.ok) throw new Error("Error while trying to fetch BoxScores");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
