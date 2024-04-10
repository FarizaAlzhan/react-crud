export const addBulletin = (text) => {
  const newBulletin = {
    id: Date.now(),
    text
  };
  return {
    type: 'ADD_BULLETIN',
    payload: newBulletin
  };
};

export const deleteBulletin = (id) => {
  return {
    type: 'DELETE_BULLETIN',
    payload: id
  };
};

export const editBulletin = (id, newText) => {
  return {
    type: 'EDIT_BULLETIN',
    payload: { id, newText }
  };
};
