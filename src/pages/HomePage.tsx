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
      <div>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 text-transparent bg-clip-text">
          Welcome to Sorting Visualizer
        </h1>
        <p className="text-xl text-gray-600">
          A visual guide to understanding sorting algorithms
        </p>
      </div>

      <div className="grid gap-8">
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            How to Use
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              1. Select a sorting algorithm from the sidebar to visualize its operation
            </p>
            <p>
              2. Adjust the array size and animation speed using the controls
            </p>
            <p>
              3. Input custom values or generate random arrays to sort
            </p>
            <p>
              4. Watch the algorithm in action with color-coded animations
            </p>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Available Algorithms
          </h2>
          <div className="space-y-4 text-gray-600">
            <div>
              <h3 className="font-semibold">Bubble Sort</h3>
              <p>A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.</p>
            </div>
            <div>
              <h3 className="font-semibold">Merge Sort</h3>
              <p>An efficient, stable sorting algorithm that divides the array into smaller subarrays, sorts them, and then merges them back together.</p>
            </div>
            <div>
              <h3 className="font-semibold">Quick Sort</h3>
              <p>A highly efficient sorting algorithm that uses a divide-and-conquer strategy to sort elements around a pivot.</p>
            </div>
            {/* Add other algorithms */}
          </div>
        </section>
      </div>
    </div>
  )
} 