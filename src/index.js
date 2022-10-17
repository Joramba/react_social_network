import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


let postsData = [
  { id: 1, message: "Hi, how are u?", likesCount: 12 },
  { id: 2, message: "It's my first post", likesCount: 21 },
  { id: 3, message: "Abrakadarawe", likesCount: 2321 },
  { id: 4, message: "TRRRRRRRRRRRRRRRRRRRR", likesCount: 32 },
];

let dialogsData = [
  { id: 1, name: 'Andrew' },
  { id: 2, name: 'Jakub' },
  { id: 3, name: 'Georgiu' },
  { id: 4, name: 'Maksim' },
  { id: 5, name: 'Victor' },
  { id: 6, name: 'Alex' },
];

let messagesData = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'How are u?!' },
  { id: 3, message: 'YUooooo!' },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>
);
