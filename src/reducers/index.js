const reducer = (state, action) => {
  /* Analizo si existe el elemento en mylist para asi no poderse
  repetir el mismo elemento, al momento de darle a favoritos.
  Debo declarar la constante fuera del CASE 'SET_FAVORITE' ya que, dentro, no la permite. */
  const exists = state.mylist.find((item) => item.id === action.payload.id);
  switch (action.type) {
    case 'SET_FAVORITE':
      return exists ? state : {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        mylist: state.mylist.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.find((item) => item.id === Number(action.payload)) ||
        state.originals.find((item) => item.id === Number(action.payload)) ||
        [],
      };
    default:
      return state;
  }
};

export default reducer;
