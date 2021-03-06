// Base URL

const api_key = process.env.REACT_APP_API_KEY;

const baseUrl = (query, date = "") =>
  `https://api.rawg.io/api/${query}?key=${api_key}&${date}`;

//Getting the dates

const month = String(new Date().getMonth() + 1).padStart(2, "0");
const day = String(new Date().getDate()).padStart(2, "0");
const year = new Date().getFullYear();

const currentDate = `${year}-${month}-${day}`;

const lastYear = `${year - 1}-${month}-${day}`;

const nextYear = `${year + 1}-${month}-${day}`;

//popularGames

export const popularGamesUrl = baseUrl(
  "games",
  `dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
);

export const upcomingGamesUrl = baseUrl(
  "games",
  `dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
);

export const newGamesUrl = baseUrl(
  "games",
  `dates=${lastYear},${currentDate}&ordering=-released&page_size=10`
);

export const gameDetailsUrl = (gameId) => baseUrl(`games/${gameId}`);

// Game Screenshot
export const gameScreenshotUrl = (gameId) =>
  baseUrl(`games/${gameId}/screenshots`);

//Search games

export const searchGamesUrl = (game_name) =>
  baseUrl(`games`, `search=${game_name}&page_size=9`);
