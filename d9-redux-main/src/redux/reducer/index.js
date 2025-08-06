const initialState = {
  favourites: {
    content: [],
  },
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload],
        },
      }
    case `REMOVE_FROM_FAVOURITES`:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter((job) => {
            if (job._id === action.payload) {
              return false
            } else {
              return true
            }
          }),
        },
      }
    default:
      return state
  }
}

export default mainReducer
