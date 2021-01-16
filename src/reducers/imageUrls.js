const initialState = []

const imageUrls = (state = initialState, action) => {
  switch (action.type) {
    case 'RESEIVE_URL':
      return action.payload;
    default:
      return state;
  }
}

export default imageUrls
