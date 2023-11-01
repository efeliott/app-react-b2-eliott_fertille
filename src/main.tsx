import React from 'react';
import ReactDOM from 'react-dom/client';
import Posts from './component/Post';
import Users from './component/User';
import './styles/index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/", // Page d'accueil
    element: <Users />, // Affiche UserComponent sur la page d'accueil
    children: [
      {
        path: "/users", // Notez le retrait du "/" pour définir un chemin relatif
        element: <Users />
      },
      {
        path: "/posts", // Notez le retrait du "/" pour définir un chemin relatif
        element: <Posts />
      },
    ]
  },
]);

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Failed to find the root element');
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
