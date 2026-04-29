import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import './assets/styles/globals.css'

// Initialize mock API in development
async function enableMocking() {
  if (import.meta.env.VITE_MOCK_API_ENABLED !== 'true') {
    return
  }

  // Mock API is already integrated via handlers
  console.log('Mock API handlers enabled')
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  )
})
