import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBJR7fEfWgZSUM7m-BTeud5iNlibRwuvow",
  authDomain: "rest-api-b6410.firebaseapp.com",
  databaseURL: "https://rest-api-b6410.firebaseio.com",
  projectId: "rest-api-b6410",
  storageBucket: "rest-api-b6410.appspot.com",
  messagingSenderId: "278242273749",
  appId: "1:278242273749:web:f47f0beae70d68a555b55c"
};

initializeApp(firebaseConfig);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </QueryClientProvider>
);
