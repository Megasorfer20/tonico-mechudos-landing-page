import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const ShopifyData = window.ShopifyData;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data={ShopifyData} />
  </React.StrictMode>,
)
