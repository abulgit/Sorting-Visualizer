import { useLocation, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const algorithms = [
  { name: 'Bubble Sort', path: 'bubble-sort' },
  { name: 'Selection Sort', path: 'selection-sort' },
  { name: 'Insertion Sort', path: 'insertion-sort' },
  { name: 'Merge Sort', path: 'merge-sort' },
  { name: 'Quick Sort', path: 'quick-sort' }
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname.substring(1)

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 transition-colors">
      <div className="w-48 h-screen bg-white dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 fixed left-0 top-0 border-r border-zinc-200 dark:border-zinc-800">
        <div className="p-4">
          <h2 
            onClick={() => navigate('/')}
            className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 cursor-pointer"
          >
            Sorting Visualizer
          </h2>
          <div className="space-y-2">
            {algorithms.map((algo) => (
              <button
                key={algo.path}
                onClick={() => navigate(algo.path)}
                className={`w-full px-3 py-2 rounded-lg text-left ${
                  currentPath === algo.path
                    ? 'bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900'
                    : 'border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                {algo.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="ml-48 flex-1 min-h-screen">
        <div className="p-4 max-w-7xl mx-auto">
          <ThemeToggle />
          {children}
        </div>
      </div>
    </div>
  )
} 