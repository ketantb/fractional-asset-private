const initialData = {
  filterPropertyName: "",
};

const Reducer = (state = initialData, action) => {
  switch (action.type) {
    case "filter_property_name":
      return {
        ...state,
        filterPropertyName: action.payload.filterPropertyName,
      };
    default: {
      return state;
    }
  }
};

export default Reducer;
