const initialState = [1, 2, 3, 4, 5]

const imageUrls = (state = initialState, action) => {
  switch (action.type) {
    case 'RESEIVE_URL':
      return action.payload;
    default:
      return state;
  }
}

export default imageUrls
