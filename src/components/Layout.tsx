import { useLocation, useNavigate } from 'react-router-dom'

const algorithms = [
  { name: 'Bubble Sort', path: 'bubble-sort' },
  { name: 'Merge Sort', path: 'merge-sort' },
  { name: 'Quick Sort', path: 'quick-sort' },
  { name: 'Selection Sort', path: 'selection-sort' },
  { name: 'Insertion Sort', path: 'insertion-sort' }
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname.substring(1)

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-gradient-to-b from-gray-800 to-gray-900 fixed left-0 top-0 text-white">
        <div className="p-6">
          <h2 
            onClick={() => navigate('/')}
            className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 cursor-pointer"
          >
            Sorting Visualizer
          </h2>
          <div className="space-y-3">
            {algorithms.map((algo) => (
              <button
                key={algo.path}
                onClick={() => navigate(algo.path)}
                className={`w-full px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  currentPath === algo.path
                    ? 'bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg'
                    : 'hover:bg-white/10'
                }`}
              >
                {algo.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 min-h-screen">
        <div className="p-8 max-w-6xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  )
} 