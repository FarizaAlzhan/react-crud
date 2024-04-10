import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addBulletin, deleteBulletin, editBulletin } from './actions/bulletinActions';
import './App.css'; // Путь к файлу стилей

const AsyncBulletinBoard = ({ bulletins, addBulletin, deleteBulletin, editBulletin }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addBulletin(text);
      setText('');
    }
  };

  const handleEditClick = (bulletinId, currentText) => {
    const newText = prompt('Enter new text', currentText);
    if (newText !== null) {
      editBulletin(bulletinId, newText); // Используем newText для вызова editBulletin
    }
  };

  return (
    <div className="bulletin-board">
      <h2 className="board-title">Bulletin Board</h2>
      <div className="add-bulletin-form">
        <h3 className="form-title">Add New Bulletin</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            className="bulletin-textarea"
            value={text}
            onChange={handleChange}
            placeholder="Enter your bulletin text here"
          />
          <button type="submit" className="add-button">Add</button>
        </form>
      </div>
      <ul className="bulletin-list">
        {bulletins.map(bulletin => (
          <li key={bulletin.id} className="bulletin-item">
            <span>{bulletin.text}</span>
            <button onClick={() => deleteBulletin(bulletin.id)} className="delete-button">Delete</button>
            <button onClick={() => handleEditClick(bulletin.id, bulletin.text)} className="edit-button">Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    bulletins: state.bulletins
  };
};

const mapDispatchToProps = {
  addBulletin,
  deleteBulletin,
  editBulletin
};

export default connect(mapStateToProps, mapDispatchToProps)(AsyncBulletinBoard);
