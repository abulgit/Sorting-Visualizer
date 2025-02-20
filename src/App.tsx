import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import VisualizerPage from './pages/VisualizerPage'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:algorithm" element={<VisualizerPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
