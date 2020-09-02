export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //remove after dev
  // token:
  //   "BQBvOKl5Xij3dY_wYDeFG8ZDg7RvWbT3W56SoAhXJy7S7Ihi33PHq-r9FwFAQzMVY5px0EDBnL8IpI799oFUvHhN7SmM0V2uo5Yxsj3LdrCzagMjQbjIN3aQkQx7TRPqQgT207jKfI940UfTwRp-EIamcFWj76vWsvo7y9nKWOgEgVZ-",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload.user };
    case "SET_TOKEN":
      return { ...state, token: action.payload.token };
    case "SET_PLAYLISTS":
      return { ...state, playlists: action.payload.playlists };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discoverWeekly: action.payload.discoverWeekly,
      };
    default:
      return state;
  }
};

export default reducer;
