const initialData = {
  data: null,
};

const Reducer = (state = initialData, action) => {
  switch (action.type) {
    case "getData":
      return {
        ...state,
        data: action.payload.data,
      };
    default: {
      return state;
    }
  }
};

export default Reducer;
