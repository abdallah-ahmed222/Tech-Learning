import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { Provider } from 'react-redux';
import { store } from './rtk/store';



const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <RouterProvider router={ router } />

    </Provider>
  </React.StrictMode>
);
