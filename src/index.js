// import React from 'react';
// import ReactDOM from 'react-dom';
// import { PersistGate } from 'redux-persist/integration/react';
// import * as store from './redux/store';
// import { Provider } from 'react-redux';
// import 'modern-normalize/modern-normalize.css';

// import './components/basic.css';

// import App from './App';
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store.store}>
//       <PersistGate loading={null} persistor={store.persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

//1.0
import React from 'react';
import ReactDOM from 'react-dom';
// import { PersistGate } from 'redux-persist/integration/react';
import * as store from './redux/store';
import { Provider } from 'react-redux';
import 'modern-normalize/modern-normalize.css';

import './components/basic.css';

import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      {/* <PersistGate loading={null} persistor={store.persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
