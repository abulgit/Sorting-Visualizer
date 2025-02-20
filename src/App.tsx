import { useState } from 'react'
import AlgorithmSelector from './components/AlgorithmSelector'
import ArrayVisualizer from './components/ArrayVisualizer'
import SortingControls from './components/SortingControls'
import ArrayInput from './components/ArrayInput'
import { useArrayGeneration } from './hooks/useArrayGeneration'
import { useSortAlgorithm } from './hooks/useSortAlgorithm'

function App() {
  const [algorithm, setAlgorithm] = useState<string>('')
  const [speed, setSpeed] = useState<number>(500)
  const [arraySize, setArraySize] = useState<number>(5)
  const { array, generateRandomArray, setCustomArray, setArray } = useArrayGeneration(arraySize)
  const { sort, isSorting, comparingIndices } = useSortAlgorithm()

  const handleSort = async () => {
    if (!algorithm) return alert('Please select an algorithm first!')
    await sort(algorithm as keyof typeof algorithms, array, setArray, speed)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        Sorting Algorithm Visualizer
      </h1>
      
      <div className="max-w-6xl mx-auto space-y-6">
        <AlgorithmSelector selectedAlgorithm={algorithm} onSelect={setAlgorithm} />
        
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
        
        <ArrayVisualizer array={array} comparing={comparingIndices} />
      </div>
    </div>
  )
}

export default App
