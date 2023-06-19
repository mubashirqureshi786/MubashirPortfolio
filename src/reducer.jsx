const reducer = (state, action) => {
  if (action.type === "Update_Home") {
    return {
      ...state,
      name: action.payload.name,
      image: action.payload.image,
      para: action.payload.para,
    };
  }
  if (action.type === "Update_About") {
    return {
      ...state,
      name: action.payload.name,
      image: action.payload.image,
      para: action.payload.para,
    };
  }
  return state;
};

export default reducer;
