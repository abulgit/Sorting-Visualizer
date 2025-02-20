interface SortingControlsProps {
  speed: number
  arraySize: number
  onSpeedChange: (value: number) => void
  onSizeChange: (value: number) => void
  generateNewArray: () => void
  startSorting: () => void
  isSorting: boolean
}

export default function SortingControls({ ...props }: SortingControlsProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Controls</h3>
      <div className="space-y-6">
        <div>
          <label className="flex justify-between text-sm font-medium text-gray-600 mb-2">
            <span>Array Size</span>
            <span>{props.arraySize}</span>
          </label>
          <input
            type="range"
            min="0"
            max="10"
            value={props.arraySize}
            onChange={(e) => props.onSizeChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>

        <div>
          <label className="flex justify-between text-sm font-medium text-gray-600 mb-2">
            <span>Animation Speed</span>
            <span>{props.speed}ms</span>
          </label>
          <input
            type="range"
            min="100"
            max="1000"
            step="100"
            value={props.speed}
            onChange={(e) => props.onSpeedChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            onClick={props.generateNewArray}
            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
          >
            New Array
          </button>
          
          <button
            onClick={props.startSorting}
            disabled={props.isSorting}
            className={`px-4 py-2 rounded-lg transition-colors ${
              props.isSorting 
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                : 'bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:from-blue-600 hover:to-teal-600'
            }`}
          >
            {props.isSorting ? 'Sorting...' : 'Start Sort'}
          </button>
        </div>
      </div>
    </div>
  )
} 