const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upcoming: action.payload.upcoming,
      };
    case "FETCH_SEARCH":
      return { ...state, searched: action.payload.search };
    case "CLEAR_SEARCH":
      return { ...state, searched: [] };
    default:
      return { ...state };
  }
};

export default gameReducer;
