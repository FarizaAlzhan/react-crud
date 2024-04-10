import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addReklama, deleteReklama, editReklama } from './reklamaActions';
import './App.css';

const Main = ({ reklamas, addReklama, deleteReklama, editReklama }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addReklama(text);
      setText('');
    }
  };

  const handleEditClick = (reklamaId, currentText) => {
    const newText = prompt('Enter new text', currentText);
    if (newText !== null) {
      editReklama(reklamaId, newText);
    }
  };

  return (
    <div className="reklama-board" >
      <h2 className="board-title">Объявления</h2>
      <div className="add-reklama-form">
        <h3 className="form-title">Добавить новое объявление</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            className="reklama-textarea"
            value={text}
            onChange={handleChange}
            placeholder="введите тект"
          />
          <button type="submit" className="add-button">Добавить</button>
        </form>
      </div>
      <div className="reklama-list">
        {reklamas.map(reklama => (
          <div key={reklama.id} className="reklama-item">
            <span>{reklama.text}</span>
            <button onClick={() => deleteReklama(reklama.id)} className="delete-button">Удалить</button>
            <button onClick={() => handleEditClick(reklama.id, reklama.text)} className="edit-button">Редактировать</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    reklamas: state.reklamas
  };
};

const mapDispatchToProps = {
  addReklama,
  deleteReklama,
  editReklama
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
