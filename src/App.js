import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import bulletinReducer from './bulletinReducer';
import AsyncBulletinBoard from './AsyncBulletinBoard';

const store = createStore(bulletinReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Bulletin Board App</h1>
        </header>
        <main>
          <AsyncBulletinBoard />
        </main>
      </div>
    </Provider>
  );
}

export default App;
