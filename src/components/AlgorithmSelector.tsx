import { useState } from 'react'

interface AlgorithmSelectorProps {
  selectedAlgorithm: string
  onSelect: (algorithm: string) => void
}

const algorithms = [
  'Bubble Sort',
  'Merge Sort',
  'Quick Sort',
  'Selection Sort',
  'Insertion Sort'
]

export default function AlgorithmSelector({ selectedAlgorithm, onSelect }: AlgorithmSelectorProps) {
  return (
    <div className="w-64 h-screen bg-gradient-to-b from-gray-800 to-gray-900 fixed left-0 top-0 text-white">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
          Sorting Algorithms
        </h2>
        <div className="space-y-3">
          {algorithms.map((algorithm) => (
            <button
              key={algorithm}
              onClick={() => onSelect(algorithm)}
              className={`w-full px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                selectedAlgorithm === algorithm
                  ? 'bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg'
                  : 'hover:bg-white/10'
              }`}
            >
              {algorithm}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
} 