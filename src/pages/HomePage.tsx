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
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Welcome to Sorting Visualizer
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400">
          An interactive way to visualize sorting algorithms in action.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm">
          <div className="p-6 flex flex-col space-y-2">
            <h3 className="font-semibold leading-none tracking-tight text-zinc-900 dark:text-zinc-50">
              Getting Started
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Follow these steps to begin visualizing sorting algorithms.
            </p>
          </div>
          <div className="p-6 pt-0">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-lg bg-zinc-100 flex items-center justify-center text-sm font-medium">
                  1
                </div>
                <p className="text-sm text-zinc-700">Select an algorithm from the sidebar</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-lg bg-zinc-100 flex items-center justify-center text-sm font-medium">
                  2
                </div>
                <p className="text-sm text-zinc-700">Customize array size and animation speed</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-lg bg-zinc-100 flex items-center justify-center text-sm font-medium">
                  3
                </div>
                <p className="text-sm text-zinc-700">Generate a random array or input custom values</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-lg bg-zinc-100 flex items-center justify-center text-sm font-medium">
                  4
                </div>
                <p className="text-sm text-zinc-700">Watch the sorting process with visual animations</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6 flex flex-col space-y-2">
            <h3 className="font-semibold leading-none tracking-tight">Available Algorithms</h3>
            <p className="text-sm text-muted-foreground">Learn about each sorting algorithm.</p>
          </div>
          <div className="p-6 pt-0 grid gap-4">
            <div className="space-y-1.5">
              <h4 className="text-sm font-medium">Bubble Sort</h4>
              <p className="text-sm text-zinc-500">
                A simple comparison-based algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
              </p>
            </div>
            <div className="space-y-1.5">
              <h4 className="text-sm font-medium">Merge Sort</h4>
              <p className="text-sm text-zinc-500">
                An efficient, stable sorting algorithm that uses a divide-and-conquer strategy to sort the elements.
              </p>
            </div>
            <div className="space-y-1.5">
              <h4 className="text-sm font-medium">Quick Sort</h4>
              <p className="text-sm text-zinc-500">
                A highly efficient sorting algorithm that uses partitioning to sort elements around a chosen pivot.
              </p>
            </div>
            {/* Add other algorithms */}
          </div>
        </div>
      </div>
    </div>
  )
} 