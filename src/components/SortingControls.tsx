interface SortingControlsProps {
  speed: number
  arraySize: number
  onSpeedChange: (value: number) => void
  onSizeChange: (value: number) => void
}

export default function SortingControls({ ...props }: SortingControlsProps) {
  return (
    <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm">
      <div className="p-4 flex flex-col space-y-1">
        <h3 className="font-semibold leading-none tracking-tight text-zinc-900 dark:text-zinc-50">
          Controls
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Adjust visualization parameters.
        </p>
      </div>
      <div className="p-4 pt-0 space-y-4">
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
              value={1100 - props.speed}
              onChange={(e) => {
                const sliderValue = Number(e.target.value)
                props.onSpeedChange(1100 - sliderValue)
              }}
              className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full appearance-none cursor-pointer accent-zinc-700 dark:accent-zinc-400"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 