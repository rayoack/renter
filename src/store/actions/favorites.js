const actions = {
  addFavorite: (property) => ({
    type: 'ADD_TO_FAVORITES',
    property,
  }),
  removeFavorite: (property) => ({
    type: 'REMOVE_TO_FAVORITES',
    property,
  })
}

export { actions };
