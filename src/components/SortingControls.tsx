interface SortingControlsProps {
  speed: number
  arraySize: number
  onSpeedChange: (value: number) => void
  onSizeChange: (value: number) => void
  startSorting: () => void
  isSorting: boolean
}

export default function SortingControls({ ...props }: SortingControlsProps) {
  return (
    <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm">
      <div className="p-6 flex flex-col space-y-2">
        <h3 className="font-semibold leading-none tracking-tight text-zinc-900 dark:text-zinc-50">
          Controls
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Adjust visualization parameters.
        </p>
      </div>
      <div className="p-6 pt-0 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium leading-none text-zinc-900 dark:text-zinc-50">
                Array Size
              </label>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {props.arraySize}
              </span>
            </div>
            <input
              type="range"
              min="2"
              max="15"
              value={props.arraySize}
              onChange={(e) => props.onSizeChange(Number(e.target.value))}
              className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full appearance-none cursor-pointer accent-zinc-700 dark:accent-zinc-400"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium leading-none text-zinc-900 dark:text-zinc-50">
                Animation Speed
              </label>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {props.speed}ms
              </span>
            </div>
            <input
              type="range"
              min="100"
              max="1000"
              step="100"
              value={props.speed}
              onChange={(e) => props.onSpeedChange(Number(e.target.value))}
              className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full appearance-none cursor-pointer accent-zinc-700 dark:accent-zinc-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={props.startSorting}
            disabled={props.isSorting}
            className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 h-9 px-4 py-2"
          >
            {props.isSorting ? 'Sorting...' : 'Start Sorting'}
          </button>
        </div>
      </div>
    </div>
  )
} 