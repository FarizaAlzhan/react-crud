export const addReklama = (text) => {
  const newReklama = {
    id: Date.now(),
    text
  };
  return {
    type: 'ADD_REKLAMA',
    payload: newReklama
  };
};

export const deleteReklama = (id) => {
  return {
    type: 'DELETE_REKLAMA',
    payload: id
  };
};

export const editReklama = (id, newText) => {
  return {
    type: 'EDIT_REKLAMA',
    payload: { id, newText }
  };
};
