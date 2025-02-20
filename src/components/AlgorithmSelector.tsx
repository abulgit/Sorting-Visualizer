import { useState } from 'react'

const algorithms = [
  'Bubble Sort',
  'Merge Sort',
  'Quick Sort',
  'Selection Sort',
  'Insertion Sort'
]

export default function AlgorithmSelector({
  selectedAlgorithm,
  onSelect
}: {
  selectedAlgorithm: string
  onSelect: (algorithm: string) => void
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
      >
        {selectedAlgorithm || 'Select Sorting Algorithm'}
      </button>
      
      {isOpen && (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-xl z-10">
          {algorithms.map((algorithm) => (
            <div
              key={algorithm}
              onClick={() => {
                onSelect(algorithm)
                setIsOpen(false)
              }}
              className="p-3 hover:bg-blue-50 cursor-pointer transition-colors"
            >
              {algorithm}
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 