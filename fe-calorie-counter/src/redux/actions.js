export const add_entry = (entry) => ({ type: "ADD_ENTRY", payload: { entry } });

export const add_entry_array = (entryArray) => ({ type: "ADD_ENTRY_ARRAY", payload: { entryArray } });

export const update_entry_array = (entryArray) => ({ type: "UPDATE_ENTRY_ARRAY", payload: { entryArray } });

export const edit_entry_details = (editEntryDetails) => ({ type: "EDIT_ENTRY", payload: { editEntryDetails } });

export const empty = () => ({ type: "EMPTY", payload: {  } });