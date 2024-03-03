import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Header from './Components/Header';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ProfileSearch from './Pages/Profile';
import Todo from './Pages/Todo';
import Counter from './Pages/Counter';
import Home from './Pages/Home/Home';

import { Provider } from 'react-redux'
import store from './Redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist'

const persistor = persistStore(store)

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />
//   },
//   {
//     path: "/profile",
//     element: <ProfileSearch />,
//   },
//   {
//     path: "/todo",
//     element: <Todo />,
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" >
        <Route path="" element={<App />}>
          <Route index element={<Home />} />
          <Route path="counter" element={<Counter />} />
          <Route path="profile" element={<ProfileSearch />} />
          <Route path="todo" element={<Todo />} />
          {/* ... etc. */}
        </Route>
        <Route path="*" element={<h1>Not Found !</h1>} />
      </Route>  
  )
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}/>
      </PersistGate>
    </React.StrictMode>
  </Provider>
);