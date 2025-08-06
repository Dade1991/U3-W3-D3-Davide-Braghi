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
          content: [...state.favourites.content, state.payload],
        },
      }
    case `REMOVE_FROM_FAVOURITES`:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter((job) => {
            if (job.id !== action.payload) {
              return true
            } else {
              return false
            }
          }),
        },
      }
    default:
      return state
  }
}

export default mainReducer
