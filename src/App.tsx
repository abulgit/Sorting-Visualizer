import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorBoundary from './components/ErrorBoundary'
import { ThemeProvider } from './contexts/ThemeContext'

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'))
const VisualizerPage = lazy(() => import('./pages/VisualizerPage'))

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <BrowserRouter>
          <Layout>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:algorithm" element={<VisualizerPage />} />
              </Routes>
            </Suspense>
          </Layout>
        </BrowserRouter>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
