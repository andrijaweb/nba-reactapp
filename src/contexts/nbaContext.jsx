import { createContext, useContext, useReducer } from "react";
import { API_KEY } from "../utils/config";

const BASE_URL = "https://api.sportsdata.io/v3/nba/stats/json/";
const SCORES_BASE_URL = "https://api.sportsdata.io/v3/nba/scores/json/";

const NbaContext = createContext();

const initialState = {
  news: [],
  teams: [],
  players: [],
  boxScores: null,
  teamSeasonStats: [],
  isLoading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "news/loaded":
      return {
        ...state,
        isLoading: false,
        news: action.payload,
      };
    case "teams/loaded":
      return {
        ...state,
        isLoading: false,
        teams: action.payload,
      };
    case "players/loaded":
      return {
        ...state,
        isLoading: false,
        players: action.payload,
      };
    case "boxScores/loaded":
      return {
        ...state,
        isLoading: false,
        boxScores: action.payload,
      };
    case "teamSeasonStats/loaded":
      return {
        ...state,
        isLoading: false,
        teamSeasonStats: action.payload,
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("Unknown action type!");
  }
}

function NbaProvider({ children }) {
  const [
    { news, teams, players, boxScores, teamSeasonStats, isLoading },
    dispatch,
  ] = useReducer(reducer, initialState);

  async function getAllTeams() {
    dispatch({ type: "loading" });

    try {
      const res = await fetch(`${BASE_URL}/teams?key=${API_KEY}`);
      if (!res.ok) throw new Error("Error while trying to fetch AllTeams");

      const data = await res.json();
      dispatch({ type: "teams/loaded", payload: data });
    } catch (error) {
      dispatch({ type: "rejected", payload: `${error}` });
    }
  }

  async function getNews() {
    dispatch({ type: "loading" });

    try {
      const res = await fetch(`${BASE_URL}/News?key=${API_KEY}`);
      if (!res.ok) throw new Error("Error while trying to fetch News");

      const data = await res.json();
      dispatch({ type: "news/loaded", payload: data });
    } catch (error) {
      dispatch({ type: "rejected", error: `${error}` });
    }
  }

  async function getBoxScores(date) {
    dispatch({ type: "loading" });

    try {
      const res = await fetch(`${BASE_URL}/BoxScores/${date}?key=${API_KEY}`);
      if (!res.ok) throw new Error("Error while trying to fetch BoxScores");

      const data = await res.json();
      dispatch({ type: "boxScores/loaded", payload: data });
    } catch (error) {
      console.error(error);
    }
  }

  async function getTeamSeasonStats() {
    dispatch({ type: "loading" });

    try {
      const res = await fetch(
        `${BASE_URL}/TeamSeasonStats/2024?key=${API_KEY}`
      );
      if (!res.ok)
        throw new Error("Error while trying to fetch Team Season Stats.");

      const data = await res.json();
      dispatch({ type: "teamSeasonStats/loaded", payload: data });
    } catch (error) {
      console.error(error);
    }
  }

  async function getActivePlayers() {
    dispatch({ type: "loading" });

    try {
      const res = await fetch(
        `${SCORES_BASE_URL}/PlayersActiveBasic?key=${API_KEY}`
      );
      if (!res.ok) throw new Error("Error while trying to fetch Players.");

      const data = await res.json();
      dispatch({ type: "players/loaded", payload: data });
    } catch (error) {
      console.error(error);
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
