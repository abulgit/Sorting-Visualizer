interface SortingControlsProps {
  speed: number
  arraySize: number
  onSpeedChange: (value: number) => void
  onSizeChange: (value: number) => void
  generateNewArray: () => void
  startSorting: () => void
  isSorting: boolean
}

export default function SortingControls({
  speed,
  arraySize,
  onSpeedChange,
  onSizeChange,
  generateNewArray,
  startSorting,
  isSorting
}: SortingControlsProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-4">
      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Array Size: {arraySize}
          </label>
          <input
            type="range"
            min="0"
            max="10"
            value={arraySize}
            onChange={(e) => onSizeChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sorting Speed: {speed}ms
          </label>
          <input
            type="range"
            min="100"
            max="1000"
            step="100"
            value={speed}
            onChange={(e) => onSpeedChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      <button
        onClick={generateNewArray}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
      >
        Generate New Array
      </button>

      <button
        onClick={startSorting}
        disabled={isSorting}
        className={`w-full py-2 px-4 rounded-md transition-colors ${
          isSorting 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-green-500 hover:bg-green-600 text-white'
        }`}
      >
        {isSorting ? 'Sorting...' : 'Start Sorting'}
      </button>
    </div>
  )
} 