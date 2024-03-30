import { createContext, useContext, useState } from "react";

const BASE_URL = "https://api.sportsdata.io/v3/nba/stats/json/";
const SCORES_BASE_URL = "https://api.sportsdata.io/v3/nba/scores/json/";
const API_KEY = "1b1692b63f9d497aab312a0b0efbed7a";

const NbaContext = createContext();

function NbaProvider({ children }) {
  const [news, setNews] = useState([]);
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [boxScores, setBoxScores] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [teamSeasonStats, setTeamSeasonStats] = useState([]);

  async function getAllTeams() {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/teams?key=${API_KEY}`);
      if (!res.ok) throw new Error("Error while trying to fetch AllTeams");

      const data = await res.json();
      setTeams(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function getNews() {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/News?key=${API_KEY}`);
      if (!res.ok) throw new Error("Error while trying to fetch News");

      const data = await res.json();
      setNews(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function getBoxScores(date) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/BoxScores/${date}?key=${API_KEY}`);
      if (!res.ok) throw new Error("Error while trying to fetch BoxScores");

      const data = await res.json();
      setBoxScores(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function getTeamSeasonStats() {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${BASE_URL}/TeamSeasonStats/2024?key=${API_KEY}`
      );
      if (!res.ok)
        throw new Error("Error while trying to fetch Team Season Stats.");

      const data = await res.json();
      setTeamSeasonStats(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function getActivePlayers() {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${SCORES_BASE_URL}/PlayersActiveBasic?key=${API_KEY}`
      );
      if (!res.ok) throw new Error("Error while trying to fetch Players.");

      const data = await res.json();
      setPlayers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <NbaContext.Provider
      value={{
        getAllTeams,
        getActivePlayers,
        players,
        getNews,
        getBoxScores,
        boxScores,
        getTeamSeasonStats,
        teamSeasonStats,
        news,
        teams,
        isLoading,
      }}
    >
      {children}
    </NbaContext.Provider>
  );
}

function useNba() {
  const context = useContext(NbaContext);
  if (context === undefined)
    throw new Error("NbaContext cannot be used outside of NbaProvider.");
  return context;
}

export { NbaProvider, useNba };
