import Menu from "./components/Nav/menu"
import Films from "./components/Films/filmes"
import Series from "./components/Series/series"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {

  return (
    <Router>
    <Menu />
      <Routes>
        <Route path="/" element={<Films />} />
        <Route path="/series" element={<Series />} />
      </Routes>
  </Router>
  )
}