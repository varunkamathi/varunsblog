import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {store} from './redux/store.js'
import {Provider} from 'react-redux'
import ThemeProvider from './components/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider>  
        <App />
    </ThemeProvider>
  </Provider>,
)
