import { useNavigate } from 'react-router-dom'

const algorithms = [
  { name: 'Bubble Sort', path: 'bubble-sort' },
  { name: 'Merge Sort', path: 'merge-sort' },
  { name: 'Quick Sort', path: 'quick-sort' },
  { name: 'Selection Sort', path: 'selection-sort' },
  { name: 'Insertion Sort', path: 'insertion-sort' }
]

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="space-y-8">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-teal-600 text-transparent bg-clip-text">
          Sorting Algorithm Visualizer
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
          An interactive tool to visualize and understand how different sorting algorithms work. Watch in real-time as the algorithms organize data step by step.
        </p>
      </div>

      <div className="grid gap-4 max-w-2xl mx-auto">
        {algorithms.map((algo) => (
          <button
            key={algo.path}
            onClick={() => navigate(algo.path)}
            className="w-full p-4 rounded-lg text-left transition-all duration-200 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm"
          >
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
              {algo.name}
            </h3>
          </button>
        ))}
      </div>
    </div>
  )
} 