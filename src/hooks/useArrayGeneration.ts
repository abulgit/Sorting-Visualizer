import { useState, useCallback, useEffect } from 'react'

export function useArrayGeneration(initialSize: number) {
  const [array, setArray] = useState<number[]>([])

  const generateRandomArray = useCallback((size: number) => {
    // Ensure size is within bounds
    const validSize = Math.min(Math.max(size, 2), 15)
    const newArray = Array.from({ length: validSize }, () => 
      Math.floor(Math.random() * 100)
    )
    setArray(newArray)
  }, [])

  const setCustomArray = useCallback((input: string) => {
    const numbers = input
      .split(',')
      .map(n => parseInt(n.trim(), 10))
      .filter(n => !isNaN(n))
    
    if (numbers.length >= 2 && numbers.length <= 15) {
      setArray(numbers)
    }
  }, [])

  // Initialize array
  useEffect(() => {
    if (array.length === 0) {
      generateRandomArray(initialSize)
    }
  }, [initialSize, generateRandomArray, array.length])

  return {
    array,
    setArray,
    generateRandomArray,
    setCustomArray
  }
} 