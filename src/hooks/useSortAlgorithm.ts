import { useState, useCallback } from 'react'
import { algorithms } from '../utils/sortingAlgorithms'

export const useSortAlgorithm = () => {
  const [isSorting, setIsSorting] = useState(false)
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [comparingIndices, setComparingIndices] = useState<number[]>([])

  const sort = useCallback(
    async (
      algorithm: keyof typeof algorithms,
      array: number[],
      updateArray: (arr: number[]) => void,
      speed: number
    ) => {
      setIsSorting(true)
      const generator = algorithms[algorithm](array)
      
      for (let step of generator) {
        setComparingIndices(step.comparing)
        updateArray(step.array)
        setCurrentStep(prev => prev + 1)
        await new Promise(resolve => setTimeout(resolve, speed))
      }

      setComparingIndices([])
      setIsSorting(false)
    },
    []
  )

  return { sort, isSorting, currentStep, comparingIndices }
} 