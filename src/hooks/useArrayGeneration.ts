import { useState, useCallback, useEffect } from 'react'

export const useArrayGeneration = (initialSize: number) => {
  const [array, setArray] = useState<number[]>([])
  const [currentSize, setCurrentSize] = useState(initialSize)

  const generateRandomArray = useCallback((size: number) => {
    const newArray = Array.from({ length: size }, () => 
      Math.floor(Math.random() * 100) + 10
    )
    setArray(newArray)
    setCurrentSize(size)
  }, [])

  const setCustomArray = useCallback((input: string) => {
    const numbers = input.split(',').map(Number).filter(n => !isNaN(n))
    if (numbers.length <= 10) {
      setArray(numbers)
      setCurrentSize(numbers.length)
    }
  }, [])

  // Update array when size changes
  useEffect(() => {
    generateRandomArray(currentSize)
  }, [currentSize, generateRandomArray])

  return { array, generateRandomArray, setCustomArray, setArray }
} 