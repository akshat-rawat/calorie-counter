const initialState = {
  foodEntries: [],
  entriesByUser: [],
  token: "user",
  editEntryDetails: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ENTRY":
      return {
        ...state,
        entriesByUser: [...state.entriesByUser, action.payload.entry],
        foodEntries: [...state.entriesByUser, action.payload.entry],
      };

    case "ADD_ENTRY_ARRAY":
      return {
        ...state,
        foodEntries: [...action.payload.entryArray, ...state.entriesByUser],
      };

    case "UPDATE_ENTRY_ARRAY":
      return {
        ...state,
        foodEntries: action.payload.entryArray,
      };

    case "EDIT_ENTRY":
      return {
        ...state,
        editEntryDetails: action.payload.editEntryDetails,
      };

    case "EMPTY":
      return {
        ...state,
        entriesByUser: [],
        foodEntries: [],
      };

    default:
      return state;
  }
};
