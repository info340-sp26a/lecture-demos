import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router'

import App from './components/App.jsx';

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjMbEJRxWduNu-TdbQHYDfFmoKoOU4gHY",
  authDomain: "react-chat-sp26.firebaseapp.com",
  projectId: "react-chat-sp26",
  storageBucket: "react-chat-sp26.firebasestorage.app",
  messagingSenderId: "277212641268",
  appId: "1:277212641268:web:8aaf7f88a14f2b012c6ba1"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);