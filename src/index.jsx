/* Styles */
import './styles/styles.css'

/* Hooks */
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/* Components */
import { Index } from './layout/home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route index Component={Index} />
    </Routes>
  </Router>
)
