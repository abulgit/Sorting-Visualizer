import { useParams, useNavigate } from 'react-router-dom'
import ArrayVisualizer from '../components/ArrayVisualizer'
import SortingControls from '../components/SortingControls'
import ArrayInput from '../components/ArrayInput'
import { useArrayGeneration } from '../hooks/useArrayGeneration'
import { useSortAlgorithm } from '../hooks/useSortAlgorithm'
import { useState, useEffect } from 'react'

const algorithmMap = {
  'bubble-sort': 'Bubble Sort',
  'merge-sort': 'Merge Sort',
  'quick-sort': 'Quick Sort',
  'selection-sort': 'Selection Sort',
  'insertion-sort': 'Insertion Sort'
}

export default function VisualizerPage() {
  const { algorithm } = useParams<{ algorithm: keyof typeof algorithmMap }>()
  const navigate = useNavigate()
  const [speed, setSpeed] = useState<number>(500)
  const [arraySize, setArraySize] = useState<number>(5)
  const { array, generateRandomArray, setCustomArray, setArray } = useArrayGeneration(arraySize)
  const { sort, isSorting, comparingIndices } = useSortAlgorithm()

  useEffect(() => {
    if (!algorithm || !algorithmMap[algorithm]) {
      navigate('/')
    }
  }, [algorithm, navigate])

  const handleSort = async () => {
    if (!algorithm) return
    await sort(algorithmMap[algorithm] as "Bubble Sort" | "Merge Sort" | "Quick Sort" | "Selection Sort" | "Insertion Sort", array, setArray, speed)
  }

  if (!algorithm || !algorithmMap[algorithm]) return null

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 text-transparent bg-clip-text">
          {algorithmMap[algorithm]}
        </h1>
        <p className="text-gray-600">
          Visualizing {algorithmMap[algorithm].toLowerCase()} algorithm
        </p>
      </div>

      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SortingControls
            speed={speed}
            arraySize={arraySize}
            onSpeedChange={setSpeed}
            onSizeChange={setArraySize}
            generateNewArray={() => generateRandomArray(arraySize)}
            startSorting={handleSort}
            isSorting={isSorting}
          />
          <ArrayInput setCustomArray={setCustomArray} />
        </div>
        
        <ArrayVisualizer array={array} comparing={comparingIndices} />
      </div>
    </div>
  )
} 