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
    default:
      return state;
  }
};

export default reducer;
