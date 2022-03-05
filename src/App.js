import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import DashboardScreen from './components/DashboardScreen';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardScreen />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
