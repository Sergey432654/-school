import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import { store } from './components/home/API/slice'; 
import Router from './components/home/Router/Router.tsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <Router/>
    </Provider>
  </React.StrictMode>,
)
