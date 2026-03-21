import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Leagues from './pages/Leagues'
import CreateLeague from './pages/CreateLeague'
import LeagueDetail from './pages/LeagueDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/leagues" element={<Leagues />} />
        <Route path="/leagues/create" element={<CreateLeague />} />
        <Route path="/leagues/:id" element={<LeagueDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
