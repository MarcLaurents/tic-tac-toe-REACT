// ? This is the file bridge between the component you created in the App.js file and the web browser.
// ? Lines 1-5 brings all the necessary pieces together:
// ? -React
// ? -React’s library to talk to web browsers (React DOM)
// ? -the styles for your components
// ? -the component you created in App.js.
// ? The remainder of the file brings all the pieces together and injects the final product into index.html in the public folder.
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

import App from './App'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
