const initialState = {
  reklamas: JSON.parse(localStorage.getItem('reklamas')) || []
};

const reklamaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_REKLAMA':
      const newReklama = action.payload;
      const updatedReklamas = [...state.reklamas, newReklama];
      localStorage.setItem('reklamas', JSON.stringify(updatedReklamas));
      return {
        ...state,
        reklamas: updatedReklamas
      };

    case 'DELETE_REKLAMA':
      const idToDelete = action.payload;
      const filteredReklamas = state.reklamas.filter(reklama => reklama.id !== idToDelete);
      localStorage.setItem('reklamas', JSON.stringify(filteredReklamas));
      return {
        ...state,
        reklamas: filteredReklamas
      };

    case 'EDIT_REKLAMA':
      const { id, newText } = action.payload;
      const editedReklamas = state.reklamas.map(reklama => {
        if (reklama.id === id) {
          return { ...reklama, text: newText };
        }
        return reklama;
      });
      localStorage.setItem('reklamas', JSON.stringify(editedReklamas));
      return {
        ...state,
        reklamas: editedReklamas
      };

    default:
      return state;
  }
};

export default reklamaReducer;
