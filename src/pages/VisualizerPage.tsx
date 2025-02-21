import { useParams, useNavigate } from 'react-router-dom'
import ArrayVisualizer from '../components/ArrayVisualizer'
import SortingControls from '../components/SortingControls'
import ArrayInput from '../components/ArrayInput'
import { useArrayGeneration } from '../hooks/useArrayGeneration'
import { useSortAlgorithm } from '../hooks/useSortAlgorithm'
import { useState, useEffect } from 'react'

const algorithmMap = {
  'bubble-sort': {
    name: 'Bubble Sort',
    description: 'A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.'
  },
  'merge-sort': {
    name: 'Merge Sort',
    description: 'A divide-and-conquer algorithm that recursively breaks down a list into smaller sublists until each sublist consists of a single element, then merges those sublists.'
  },
  'quick-sort': {
    name: 'Quick Sort',
    description: 'An efficient, in-place sorting algorithm that uses a pivot element to partition the array into two sub-arrays, then recursively sorts the sub-arrays.'
  },
  'selection-sort': {
    name: 'Selection Sort',
    description: 'A simple sorting algorithm that divides the input into a sorted and unsorted region, repeatedly selecting the smallest element from the unsorted region.'
  },
  'insertion-sort': {
    name: 'Insertion Sort',
    description: 'Builds the final sorted array one item at a time, by repeatedly inserting a new element into the sorted portion of the array.'
  }
}

export default function VisualizerPage() {
  const { algorithm } = useParams<{ algorithm: keyof typeof algorithmMap }>()
  const navigate = useNavigate()
  const [speed, setSpeed] = useState<number>(500)
  const [arraySize, setArraySize] = useState<number>(15)
  const { array, generateRandomArray, setCustomArray, setArray } = useArrayGeneration()
  const { sort, isSorting, comparingIndices } = useSortAlgorithm()

  useEffect(() => {
    if (!algorithm || !algorithmMap[algorithm]) {
      navigate('/')
    }
  }, [algorithm, navigate])

  const handleSort = async () => {
    if (!algorithm) return
    await sort(algorithmMap[algorithm].name as "Bubble Sort" | "Merge Sort" | "Quick Sort" | "Selection Sort" | "Insertion Sort", array, setArray, speed)
  }

  if (!algorithm || !algorithmMap[algorithm]) return null

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 text-transparent bg-clip-text">
          {algorithmMap[algorithm].name}
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {algorithmMap[algorithm].description}
        </p>
      </div>

      <div className="grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SortingControls
            speed={speed}
            arraySize={arraySize}
            onSpeedChange={setSpeed}
            onSizeChange={setArraySize}
          />
          <ArrayInput 
            setCustomArray={setCustomArray}
            generateNewArray={() => generateRandomArray(arraySize)}
            startSorting={handleSort}
            isSorting={isSorting}
            algorithmName={algorithmMap[algorithm].name}
            arraySize={arraySize}
          />
        </div>
        
        <ArrayVisualizer array={array} comparing={comparingIndices} />
      </div>
    </div>
  )
} 