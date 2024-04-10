const initialState = {
  bulletins: JSON.parse(localStorage.getItem('bulletins')) || []
};

const bulletinReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BULLETIN':
      const newBulletin = action.payload;
      const updatedBulletins = [...state.bulletins, newBulletin];
      localStorage.setItem('bulletins', JSON.stringify(updatedBulletins));
      return {
        ...state,
        bulletins: updatedBulletins
      };

    case 'DELETE_BULLETIN':
      const idToDelete = action.payload;
      const filteredBulletins = state.bulletins.filter(bulletin => bulletin.id !== idToDelete);
      localStorage.setItem('bulletins', JSON.stringify(filteredBulletins));
      return {
        ...state,
        bulletins: filteredBulletins
      };

    case 'EDIT_BULLETIN':
      const { id, newText } = action.payload;
      const editedBulletins = state.bulletins.map(bulletin => {
        if (bulletin.id === id) {
          return { ...bulletin, text: newText };
        }
        return bulletin;
      });
      localStorage.setItem('bulletins', JSON.stringify(editedBulletins));
      return {
        ...state,
        bulletins: editedBulletins
      };

    default:
      return state;
  }
};

export default bulletinReducer;
