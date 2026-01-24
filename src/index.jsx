/* Styles */
import './styles/styles.css'

/* Hooks */
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

/* Components */
import { Index } from './layout/home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      {/* Ruta pricipal */}
      <Route index Component={Index} />
    </Routes>
  </Router>
)