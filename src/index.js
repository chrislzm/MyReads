/*
  MyReads: index.js
  By Chris Leung

  Description:
  Renders the application to the DOM. Wraps the app in React Router to keep the
  application in sync with the URL.
*/

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
