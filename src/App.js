import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reklamaReducer from './reklamaReducer';
import Main from './Main';

const store = createStore(reklamaReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <main>
          <Main />
        </main>
      </div>
    </Provider>
  );
}

export default App;
